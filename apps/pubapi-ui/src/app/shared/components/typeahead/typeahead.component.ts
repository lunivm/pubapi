import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'pbp-typeahead',
  imports: [
    CommonModule,
    FormsModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInputModule,
  ],
  templateUrl: './typeahead.component.html',
  styleUrl: './typeahead.component.css',
})
export class TypeaheadComponent {
  value: string = '';
}
