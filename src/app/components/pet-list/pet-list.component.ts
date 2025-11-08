import {
    Component,
    inject,
    signal,
} from '@angular/core';
import {Router} from '@angular/router';

import {
    MatCard,
    MatCardModule
} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Pet} from '../../models/pet.model';
import {PetService} from '../../services/pet.service';
import {SearchComponent} from "../../ui-components/search/search.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-pet-list',
    imports: [
        MatButtonModule,
        MatListModule,
        MatButtonToggleModule,
        SearchComponent,
        MatCardModule,
        MatCard,
        NgOptimizedImage
    ],
    template: `
        <app-search (search)="filterPets($event)"
                    (cleared)="clearFilter($event)"
                    [placeholderTxt]="'Enter name or breed.'"/>

        @if (displayMatches()) {
            <p>{{ filteredPets.length }} of {{ pets.length }} matches.</p>
        }
        <mat-button-toggle-group class="view-toggle" [(value)]="viewMode">
            <mat-button-toggle value="grid">
                Grid View
            </mat-button-toggle>
            <mat-button-toggle value="list">
                List View
            </mat-button-toggle>
        </mat-button-toggle-group>
        @if (viewMode === 'grid') {
            <section class="pet-grid">
                @for (pet of filteredPets; track pet.id) {
                    <mat-card class="pet-card">
                        <img mat-card-image [ngSrc]="pet.imageUrl" [alt]="pet.name" class="pet-image" width="350"
                             height="300">
                        <mat-card-header>
                            <mat-card-title>{{ pet.name }}</mat-card-title>
                            <mat-card-subtitle>{{ pet.breed }}</mat-card-subtitle>
                        </mat-card-header>
                        <mat-card-content>
                            <p>Age: {{ pet.age }} years</p>
                        </mat-card-content>
                        <mat-card-actions>
                            <button matButton (click)="viewDetails(pet.id)">VIEW DETAILS</button>
                        </mat-card-actions>
                    </mat-card>
                }
            </section>
        }
        @if (viewMode === 'list') {
            <mat-list>
                @for (pet of filteredPets; track pet.id) {
                    <mat-list-item class="pet-list-item" (click)="viewDetails(pet.id)">
                        <img [ngSrc]="pet.imageUrl" [alt]="pet.name" width="350" height="400" class="list-image">
                        <div matListItemTitle>{{ pet.name }}</div>
                        <div matListItemLine>{{ pet.breed }} • {{ pet.age }} years old</div>
                    </mat-list-item>
                }
            </mat-list>
        }`,
    styleUrl: 'pet-list.component.scss'
})
export class PetListComponent {
    private readonly petService = inject(PetService);
    private readonly router = inject(Router);

    pets: Pet[] = this.petService.getPets();
    filteredPets: Pet[] = this.petService.getPets();
    viewMode: 'grid' | 'list' = 'grid';
    displayMatches = signal(false);


    filterPets(searchTerm: string): void {
        this.filteredPets = this.pets.filter(pet =>
            pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.displayMatches.set(true);
    }

    clearFilter(searchCleared: boolean): void {
        this.displayMatches.set(!searchCleared);
    }

    viewDetails(id: number): void {
        this.router.navigate(['/pet', id]);
    }
}