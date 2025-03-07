import {Component, inject, Renderer2} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
      <mat-toolbar>
          <span>Pet Gallery</span>
          <button mat-icon-button (click)="toggleTheme()">
              <mat-icon>{{ isDarkTheme ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>
      </mat-toolbar>
      <router-outlet></router-outlet>
  `,
  styleUrl: 'app.component.scss'
})
export class App {
  isDarkTheme = false;
  private renderer: Renderer2 = inject(Renderer2);

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.renderer.addClass(document.body, 'light-theme');
    }
  }
}