import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {Pet} from '../../models/pet.model';
import {PetService} from '../../services/pet.service';

@Component({
    selector: 'app-pet-list',
    imports: [
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatButtonToggleModule
    ],
    template: `
        <mat-button-toggle-group class="view-toggle" [(value)]="viewMode">
            <mat-button-toggle value="grid">
                Grid View
            </mat-button-toggle>
            <mat-button-toggle value="list">
                List View
            </mat-button-toggle>
        </mat-button-toggle-group>

        @if (viewMode === 'grid') {
            <div class="pet-grid">
                @for (pet of pets; track pet.id) {
                    <mat-card class="pet-card">
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
                }
            </div>
        }

        @if (viewMode === 'list') {
            <mat-list>
                @for (pet of pets; track pet.id) {
                    <mat-list-item class="pet-list-item" (click)="viewDetails(pet.id)">
                        <img [src]="pet.imageUrl" [alt]="pet.name" class="list-image">
                        <div matListItemTitle>{{ pet.name }}</div>
                        <div matListItemLine>{{ pet.breed }} • {{ pet.age }} years old</div>
                    </mat-list-item>
                }
            </mat-list>
        }
    `,
    styleUrl: 'pet-list.component.scss'
})
export class PetListComponent {
    petService: PetService = inject(PetService);
    router: Router = inject(Router);
    pets: Pet[] = this.petService.getPets();
    viewMode: 'grid' | 'list' = 'grid';

    viewDetails(id: number): void {
        this.router.navigate(['/pet', id]);
    }
}