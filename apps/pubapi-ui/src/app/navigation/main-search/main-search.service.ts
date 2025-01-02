import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainSearchService {
  private httpClient = inject(HttpClient);

  query(q: string) {
    return this.httpClient.get(environment.apiUrl, { params: { q }})
  }
}
