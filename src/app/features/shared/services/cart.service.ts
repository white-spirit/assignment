import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type CartItem = {
  id: string;
  count: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient);

  getCartItems (): Observable<CartItem[]> {
    return this.http.get<CartItem[]>('http://localhost:3000/basket')
  }

  addCartItem (item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>('http://localhost:3000/basket', item)
  }

  delete (id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/basket/${id}`);
  }

  updateItem (id: string, item: Pick<CartItem, 'count'>): Observable<CartItem> {
    return this.http.patch<CartItem>(`http://localhost:3000/basket/${id}`, item)
  }
}