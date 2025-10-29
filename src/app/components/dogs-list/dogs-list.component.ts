import {Component, inject} from '@angular/core';
import {DogsService} from "../../services/dogs.service";
import {KeyValuePipe} from "@angular/common";

@Component({
  selector: 'app-dogs-list',
  imports: [KeyValuePipe],
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.css',
})
export class DogsListComponent {
    dogsService = inject(DogsService);
    dogs = this.dogsService.dogsResource.value

}
