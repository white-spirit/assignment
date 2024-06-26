import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardComponent } from './order-card.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('OrderCardComponent', () => {
  let component: OrderCardComponent;
  let fixture: ComponentFixture<OrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardComponent);
    component = fixture.componentInstance;
    component.order = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
