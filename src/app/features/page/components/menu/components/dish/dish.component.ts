import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddToCartButtonComponent } from '../add-to-cart-button/add-to-cart-button.component';

@Component({
  selector: 'ex-dish',
  standalone: true,
  imports: [
    CurrencyPipe,
    AddToCartButtonComponent,
  ],
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.scss'
})
export class DishComponent {
  @Input() dish: any = {};
}
