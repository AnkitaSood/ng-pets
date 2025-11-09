import {Component, inject} from '@angular/core';
import {DogsService} from "../../services/dogs.service";
import {MatList, MatListItem, MatListItemAvatar, MatListItemTitle} from "@angular/material/list";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {AsyncPipe, NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-dogs-list',
    imports: [MatList, MatListItem, MatButtonToggle, MatButtonToggleGroup, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatListItemTitle, MatListItemAvatar, AsyncPipe, NgOptimizedImage],
    templateUrl: './dogs-list.component.html',
    styleUrl: './dogs-list.component.css',
})
export class DogsListComponent {
    private readonly dogsService = inject(DogsService);
    viewMode: 'grid' | 'list' = 'grid';
    dogs$ = this.dogsService.getAllBreedsWithImages();
}
