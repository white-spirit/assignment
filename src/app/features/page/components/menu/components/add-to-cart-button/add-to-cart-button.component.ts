import { Component, Input, inject } from '@angular/core';
import { CounterComponent } from '../../../../shared/components/counter/counter.component';
import { CartService } from '../../../../../shared/services/cart.service';
import { DishItem } from '../../../../shared/services/menu.service';

@Component({
  selector: 'ex-add-to-cart-button',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss'
})
export class AddToCartButtonComponent {
  private cartService = inject(CartService);

  @Input() dish!: DishItem;

  isActive = false;

  addToCart() {
    this.isActive = true;

    this.cartService.addCartItem({
      id: this.dish.id,
      name: this.dish.name,
      price: this.dish.price,
      count: 1
    }).subscribe(() => console.log('added'))
  }

  onCountChange (event: number) {
    if (event === 0) {
      this.cartService.delete(this.dish.id).subscribe(() => console.log('deleted'));
      this.isActive = false;
    } else {
      this.cartService.updateItem(this.dish.id, {
        count: event
      }).subscribe(() => console.log('updated'))
    }
  }
}
