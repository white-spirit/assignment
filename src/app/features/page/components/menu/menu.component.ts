import { Component, effect, inject } from '@angular/core';
import { DishComponent } from './components/dish/dish.component';
import { FilterService } from '../../shared/services';
import { DishItem, MenuService } from '../../shared/services/menu.service';
import { CartService } from '../../../shared/services/cart.service';

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
  private menuService = inject(MenuService);
  private filtersService = inject(FilterService);

  dishes: DishItem[] = [];

  constructor () {
    effect(() => {
      this.menuService.getMenu(this.filtersService.currentFilters())
        .subscribe(data => this.dishes = data);
    })
  }
}
