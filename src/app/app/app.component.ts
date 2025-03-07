import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <div [class]="isDarkTheme ? 'dark-theme' : 'light-theme'">
      <mat-toolbar>
        <span>Pet Gallery</span>
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