import {Component, inject} from '@angular/core';
import {DogsService} from "../../services/dogs.service";
import {KeyValuePipe} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

@Component({
    selector: 'app-dogs-list',
    imports: [KeyValuePipe, MatList, MatListItem, MatButtonToggle,  MatButtonToggleGroup, MatCard, MatCardHeader, MatCardTitle],
    templateUrl: './dogs-list.component.html',
    styleUrl: './dogs-list.component.css',
})
export class DogsListComponent {
    private readonly dogsService = inject(DogsService);
    readonly dogs = this.dogsService.dogsResource.value
    viewMode: 'grid' | 'list' = 'grid';

}
