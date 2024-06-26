import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FilterCategory, FilterService } from '../../../../shared/services';

@Component({
  selector: 'ex-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  private filtersService = inject(FilterService);

  filters = [FilterCategory.Popular, FilterCategory.Burgers, FilterCategory.Steaks];
  activeFilter = FilterCategory.Popular;

  setActive (filter: FilterCategory) {
    const params = filter === FilterCategory.Popular
      ? { popular: true }
      : { category: filter};

    this.activeFilter = filter;
    this.filtersService.updateFilters(params);
  }
}
