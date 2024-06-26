import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartButtonComponent } from './add-to-cart-button.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AddToCartButtonComponent', () => {
  let component: AddToCartButtonComponent;
  let fixture: ComponentFixture<AddToCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCartButtonComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
