import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { PetListComponent } from './app/components/pet-list/pet-list.component';
import { PetDetailComponent } from './app/components/pet-detail/pet-detail.component';
import {App} from "./app/app/app.component";

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: PetListComponent },
      { path: 'pet/:id', component: PetDetailComponent }
    ]),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));