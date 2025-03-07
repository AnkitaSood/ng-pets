import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-pet-detail',
  imports: [MatCardModule, MatButton, TitleCasePipe],
  template: `
    @if (pet) {
      <div class="container">
        <mat-card>
          <img mat-card-image [src]="pet.imageUrl" [alt]="pet.name" class="pet-image">
          <mat-card-header>
            <mat-card-title>{{ pet.name }}</mat-card-title>
            <mat-card-subtitle>{{ pet.breed }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p><strong>Type:</strong> {{ pet.type | titlecase }}</p>
            <p><strong>Age:</strong> {{ pet.age }} years</p>
            <p><strong>Description:</strong></p>
            <p>{{ pet.description }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-stroked-button (click)="goBack()">BACK TO LIST</button>
          </mat-card-actions>
        </mat-card>
      </div>
    }
  `
})
export class PetDetailComponent implements OnInit {
  pet: Pet | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pet = this.petService.getPetById(id);
    
    if (!this.pet) {
      this.router.navigate(['/']);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}