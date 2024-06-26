import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ex-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() count = 1;

  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();

  decrease() {
    this.count--;
    this.onChange.emit(this.count);
  }

  increase () {
    this.count++;
    this.onChange.emit(this.count);
  }
}
