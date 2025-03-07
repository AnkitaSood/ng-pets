import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { PetListComponent } from './app/components/pet-list/pet-list.component';
import { PetDetailComponent } from './app/components/pet-detail/pet-detail.component';
import {App} from "./app/app/app.component";
import {PetFormComponent} from "./app/components/pet-form/pet-form.component";

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: PetListComponent },
      { path: 'pet/:id', component: PetDetailComponent },
      { path: 'adopt/:id', component: PetFormComponent }
    ]),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).catch(err => console.error(err));