import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-search',
  imports: [
    MatFormFieldModule,
    MatIcon,
    MatInput
  ],
  template: `
    <mat-form-field appearance="outline">
      <mat-label>Search</mat-label>
      <input matInput placeholder="Enter name or breed">
      <mat-icon matSuffix>search</mat-icon>
    </mat-form-field>
  `,
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
