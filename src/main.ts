import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';


import {App} from "./app/app/app.component";


bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', loadComponent: () => import('./app/components/pet-list/pet-list.component').then(m => m.PetListComponent) },
      { path: 'pet/:id', loadComponent: () => import('./app/components/pet-detail/pet-detail.component').then(m => m.PetDetailComponent) },
      { path: 'adopt/:id', loadComponent: () => import('./app/components/pet-form/pet-form.component').then(m => m.PetFormComponent) }
    ]),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));