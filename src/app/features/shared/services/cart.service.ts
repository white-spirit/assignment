import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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

  cart = signal<CartItem[]>([]);

  getCartItems (): Observable<CartItem[]> {
    return this.http.get<CartItem[]>('http://localhost:3000/basket')
      .pipe(tap((data) => this.cart.set(data)));
  }

  addCartItem (item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>('http://localhost:3000/basket', item)
      .pipe(tap((data) => this.cart.update(arr => [...arr, data])));
  }

  delete (id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/basket/${id}`)
      .pipe(
        tap(() => this.cart.update(arr => arr.filter(el => el.id != id)))
      );
  }

  updateItem (id: string, item: Pick<CartItem, 'count'>): Observable<CartItem> {
    return this.http.patch<CartItem>(`http://localhost:3000/basket/${id}`, item)
      .pipe(
        tap((data) => this.cart.update(arr => arr.map(el =>
          el.id === id ? { ...el, ...data } : el
        )))
      );
  }

  clearCart() {
    for (let item of this.cart()) {
      this.delete(item.id).subscribe(() => {
        this.cart.set([]);
      });
    }
  }
}
