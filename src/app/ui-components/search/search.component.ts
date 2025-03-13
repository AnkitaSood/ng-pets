import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  imports: [
    MatFormFieldModule,
    MatIcon,
    MatInput,
    MatButton,
    FormsModule
  ],
  template: `
      <mat-form-field appearance="outline" class="search-field">
          <mat-label>Search</mat-label>
          <input matInput [(ngModel)]="searchTerm" [placeholder]="placeholderTxt">
          <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
      <button mat-flat-button (click)="onSearch()">Search</button>
      <button mat-stroked-button (click)="onClear()">Clear</button>
  `,
  styleUrl: './search.component.scss'
})
export class SearchComponent {
    @Input({required: true}) placeholderTxt: string = '';
    @Output() search = new EventEmitter<string>();
    @Output() cleared = new EventEmitter<boolean>();
    searchTerm = '';

    onSearch(): void {
        this.search.emit(this.searchTerm.trim());
    }

    onClear(): void {
        this.searchTerm = '';
        this.search.emit('');
        this.cleared.emit(true);
    }
}
