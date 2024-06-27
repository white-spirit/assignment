import { Component, inject } from '@angular/core';
import { FilterService } from '../../../../shared/services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ex-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  private filtersService = inject(FilterService);

  inputValue = '';

  onSearch ($event: string) {
    this.filtersService.currentFilters.set({ search: $event })
  }
}
