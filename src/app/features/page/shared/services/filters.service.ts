import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum FilterCategory {
  Popular = 'Popular',
  Burgers = 'Burgers',
  Steaks = 'Steaks',
}

export type Filter = {
  popular?: boolean;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  currentFilters = signal<Filter>({ popular: true });
}