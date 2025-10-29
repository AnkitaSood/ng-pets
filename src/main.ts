import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withViewTransitions} from '@angular/router';


import {App} from "./app/app/app.component";
import {provideHttpClient} from "@angular/common/http";


bootstrapApplication(App, {
    providers: [
        provideRouter([
            {
                path: '',
                loadComponent: () => import('./app/components/dogs-list/dogs-list.component').then(m => m.DogsListComponent)
            },
            {
                path: 'pet-list',
                loadComponent: () => import('./app/components/pet-list/pet-list.component').then(m => m.PetListComponent)
            },
            {
                path: 'pet/:id',
                loadComponent: () => import('./app/components/pet-detail/pet-detail.component').then(m => m.PetDetailComponent)
            },
            {
                path: 'adopt/:id',
                loadComponent: () => import('./app/components/pet-form/pet-form.component').then(m => m.PetFormComponent)
            },
        ], withViewTransitions()),
        provideHttpClient()

    ]
}).catch(err => console.error(err));