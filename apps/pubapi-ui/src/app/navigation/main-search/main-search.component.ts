import { Component } from '@angular/core';
import { TypeaheadComponent } from '../../shared/components/typeahead/typeahead.component';

@Component({
  selector: 'pbp-main-search',
  imports: [
    TypeaheadComponent
  ],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.css'
})
export class MainSearchComponent {
  typeaheadValueChanged(query: string) {
  }
}
