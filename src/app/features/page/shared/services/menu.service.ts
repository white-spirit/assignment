import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { buildQueryParams } from '../buildQueryParams';
import { HttpClient } from '@angular/common/http';

type Category = 'Burgers' | 'Steaks'
export type DishItem = {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    category: Category,
    popular: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private http = inject(HttpClient);

  getMenu (filters: any) {
    const params = buildQueryParams(filters);

    return this.http.get<DishItem[]>('http://localhost:3000/dishes', { params })
      .pipe(map((data) => {
        const search = filters.search || '';

        return data.filter(({ name, description }) => name.toLowerCase().includes(search) || description.toLowerCase().includes(search))
      }))
  }
}