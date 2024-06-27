import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, effect, inject } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ex-order-summary',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  private cartService = inject(CartService);

  @Output() onContinueShipping = new EventEmitter();
  @Output() onOrder = new EventEmitter();

  subtotal = 0;
  deliveryFee = 0;
  total = 0;

  constructor() {
    effect(() => {
      const items = this.cartService.cart();

      this.subtotal = items.reduce((sum, { count, price }) => {
        return sum + count * price;
      }, 0);
      this.deliveryFee = this.subtotal * 0.1;
      this.total = this.subtotal + this.deliveryFee;
    })
  }

  toggle() {
    this.onContinueShipping.emit();
  }

  order() {
    this.onOrder.emit();
    this.cartService.clearCart();
  }
}
