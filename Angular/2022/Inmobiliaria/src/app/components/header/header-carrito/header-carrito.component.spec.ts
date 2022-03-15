import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCarritoComponent } from './header-carrito.component';

describe('HeaderCarritoComponent', () => {
  let component: HeaderCarritoComponent;
  let fixture: ComponentFixture<HeaderCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
