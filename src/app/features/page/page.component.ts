import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'ex-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ToolbarComponent,
    MenuComponent,
    CartComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
