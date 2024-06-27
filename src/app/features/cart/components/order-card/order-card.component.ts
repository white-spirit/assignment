import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { AddToCartButtonComponent } from '../../../page/components/menu/components/add-to-cart-button/add-to-cart-button.component';
import { CurrencyPipe } from '@angular/common';
import { CounterComponent } from '../../../page/shared/components/counter/counter.component';
import { CartItem, CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'ex-order-card',
  standalone: true,
  imports: [
    AddToCartButtonComponent,
    CurrencyPipe,
    CounterComponent
  ],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss'
})
export class OrderCardComponent implements OnChanges {
  private cartService = inject(CartService);
  @Input() order!: CartItem;

  totalPrice = 0;

  ngOnChanges(): void {
    this.totalPrice = this.order.price * this.order.count;
  }

  onCountChange (event: number) {
    if (event === 0) {
      this.cartService.delete(this.order.id).subscribe(() => console.log('deleted'))
    } else {
      this.cartService.updateItem(this.order.id, {
        count: event
      }).subscribe((data: any) => {
        this.order = data;
      })
    }
  }
}
