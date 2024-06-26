import { Component } from '@angular/core';

@Component({
  selector: 'ex-trigger-button',
  standalone: true,
  imports: [],
  templateUrl: './trigger-button.component.html',
  styleUrl: './trigger-button.component.scss'
})
export class TriggerButtonComponent {
  itemsCount = 0;
}
