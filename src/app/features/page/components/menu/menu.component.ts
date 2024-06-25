import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { DishComponent } from './components/dish/dish.component';

@Component({
  selector: 'ex-menu',
  standalone: true,
  imports: [
    DishComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private http = inject(HttpClient);
  data: any[] = [];

  ngOnInit () {
    this.http.get<any[]>('http://localhost:3000/dishes').subscribe((data) => {
      console.log(data)
      this.data = data;
    })
  }
}
