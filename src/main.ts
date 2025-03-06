import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PetListComponent } from './app/components/pet-list/pet-list.component';
import { PetDetailComponent } from './app/components/pet-detail/pet-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <div [class]="isDarkTheme ? 'dark-theme' : 'light-theme'">
      <mat-toolbar color="primary">
        <span>Pet Gallery</span>
        <span style="flex: 1 1 auto"></span>
        <button mat-icon-button (click)="toggleTheme()">
          <mat-icon>{{ isDarkTheme ? 'light_mode' : 'dark_mode' }}</mat-icon>
        </button>
      </mat-toolbar>
      <router-outlet></router-outlet>
    </div>
  `
})
export class App {
  isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: PetListComponent },
      { path: 'pet/:id', component: PetDetailComponent }
    ]),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));