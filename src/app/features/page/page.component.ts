import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ToolbarComponent,
    MenuComponent
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

}
