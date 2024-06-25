import { Component, Input } from '@angular/core';

@Component({
  selector: 'ex-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss'
})
export class AddToCartButtonComponent {
  @Input() dish: any = {};

  isActive = false;
  count = 1;

  decrease() {
    this.count--;

    if (!this.count) {
      this.isActive = false;
      this.count = 1;
    }
  }

  increase () {
    this.count++;
  }

  setActive() {
    this.isActive = true;
  }
}
