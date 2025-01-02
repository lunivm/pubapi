import { Component, inject } from '@angular/core';
import { TypeaheadComponent } from '../../shared/components/typeahead/typeahead.component';
import { MainSearchService } from './main-search.service';

@Component({
  selector: 'pbp-main-search',
  imports: [
    TypeaheadComponent
  ],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.css'
})
export class MainSearchComponent {
  private mainSearchService = inject(MainSearchService);

  typeaheadValueChanged(query: string) {
    this.mainSearchService.query(query).subscribe((result) => {
      console.log("=>(main-search.component.ts:19) ", result);
    })
  }
}
