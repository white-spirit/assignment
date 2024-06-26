import { Component, inject } from '@angular/core';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { TriggerButtonComponent } from './components/trigger-button/trigger-button.component';
import { CartItem, CartService } from '../shared/services/cart.service';

@Component({
  selector: 'ex-cart',
  standalone: true,
  imports: [
    OrderCardComponent,
    OrderSummaryComponent,
    TriggerButtonComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService = inject(CartService);

  isOpen = false;

  orders: CartItem[] = [];

  ngOnInit () {
    this.cartService.getCartItems().subscribe(data => {
      this.orders = data;
    })
  }

  toggle () {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.cartService.getCartItems().subscribe(data => {
        console.log(data);
        this.orders = data;
      })
    }
  }
}
