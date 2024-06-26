import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum FilterCategory {
  Popular = 'Popular',
  Burgers = 'Burgers',
  Steaks = 'Steaks',
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterSubject = new BehaviorSubject<any>({ popular: true });

  currentFilters = this.filterSubject;

  updateFilters(filters: any) {
    this.filterSubject.next(filters);
  }
}