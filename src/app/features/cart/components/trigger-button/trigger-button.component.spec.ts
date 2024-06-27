import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerButtonComponent } from './trigger-button.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TriggerButtonComponent', () => {
  let component: TriggerButtonComponent;
  let fixture: ComponentFixture<TriggerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerButtonComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
