import { Component, effect, inject } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'ex-trigger-button',
  standalone: true,
  imports: [],
  templateUrl: './trigger-button.component.html',
  styleUrl: './trigger-button.component.scss'
})
export class TriggerButtonComponent {
  private cartService = inject(CartService);

  itemsCount = 0;

  constructor() {
    effect(() => {
      this.itemsCount = this.cartService.cart().length;
    })
  }
}
