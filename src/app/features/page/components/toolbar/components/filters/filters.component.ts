import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum FilterType {
  Popular = 'popular',
  Burgers = 'burgers',
  Steaks = 'steaks',
}

@Component({
  selector: 'ex-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  filters = [FilterType.Popular, FilterType.Burgers, FilterType.Steaks];
  activeFilter = 'popular';

  setActive (filter: FilterType) {
    this.activeFilter = filter;
  }
}
