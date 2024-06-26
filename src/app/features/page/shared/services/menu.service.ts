import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { buildQueryParams } from '../buildQueryParams';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private http = inject(HttpClient);

  getMenu (filters: any) {
    const params = buildQueryParams(filters);

    return this.http.get<any[]>('http://localhost:3000/dishes', { params })
      .pipe(map((data) => {
        const search = filters.search || '';

        return data.filter(({ name, description }) => name.toLowerCase().includes(search) || description.toLowerCase().includes(search))
      }))
  }
}