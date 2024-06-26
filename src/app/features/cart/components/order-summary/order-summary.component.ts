import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ex-order-summary',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {
  subtotal = 0;
  deliveryFee = 0;
  total = 0;
}
