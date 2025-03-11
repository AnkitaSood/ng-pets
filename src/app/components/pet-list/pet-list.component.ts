import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import {SearchComponent} from "../../ui-components/search/search.component";

@Component({
  selector: 'app-pet-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatButtonToggleModule,
    SearchComponent,
  ],
  template: `
    <app-search (search)="filterPets($event)" [placeholderTxt]="'Enter name or breed.'"/>
    
      <mat-button-toggle-group class="view-toggle" [(value)]="viewMode">
          <mat-button-toggle value="grid">
              Grid View
          </mat-button-toggle>
          <mat-button-toggle value="list">
              List View
          </mat-button-toggle>
      </mat-button-toggle-group>

      <ng-container *ngIf="viewMode === 'grid'">
          <div class="pet-grid">
              <mat-card *ngFor="let pet of filteredPets" class="pet-card">
                  <img mat-card-image [src]="pet.imageUrl" [alt]="pet.name" class="pet-image">
                  <mat-card-header>
                      <mat-card-title>{{ pet.name }}</mat-card-title>
                      <mat-card-subtitle>{{ pet.breed }}</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                      <p>Age: {{ pet.age }} years</p>
                  </mat-card-content>
                  <mat-card-actions>
                      <button mat-flat-button (click)="viewDetails(pet.id)">VIEW DETAILS</button>
                  </mat-card-actions>
              </mat-card>
          </div>
      </ng-container>

      <ng-container *ngIf="viewMode === 'list'">
          <mat-list>
              <mat-list-item *ngFor="let pet of filteredPets" class="pet-list-item" (click)="viewDetails(pet.id)">
                  <img [src]="pet.imageUrl" [alt]="pet.name" class="list-image">
                  <div matListItemTitle>{{ pet.name }}</div>
                  <div matListItemLine>{{ pet.breed }} • {{ pet.age }} years old</div>
              </mat-list-item>
          </mat-list>
      </ng-container>
  `,
  styleUrl: 'pet-list.component.scss'
})
export class PetListComponent {
  pets: Pet[] = this.petService.getPets();
  filteredPets: Pet[] = this.petService.getPets();
  viewMode: 'grid' | 'list' = 'grid';

  constructor(
    private petService: PetService,
    private router: Router
  ) {
  }

  filterPets(searchTerm: string): void {
    this.filteredPets = this.pets.filter(pet =>
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  viewDetails(id: number): void {
    this.router.navigate(['/pet', id]);
  }
}