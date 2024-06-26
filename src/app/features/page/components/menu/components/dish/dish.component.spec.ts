import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishComponent } from './dish.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('DishComponent', () => {
  let component: DishComponent;
  let fixture: ComponentFixture<DishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishComponent);
    component = fixture.componentInstance;
    component.dish = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
