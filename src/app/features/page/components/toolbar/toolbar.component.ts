import { Component } from '@angular/core';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'ex-toolbar',
  standalone: true,
  imports: [
    FiltersComponent,
    SearchComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}
