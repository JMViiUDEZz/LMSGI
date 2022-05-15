import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresShowComponent } from './autores-show.component';

describe('AutoresShowComponent', () => {
  let component: AutoresShowComponent;
  let fixture: ComponentFixture<AutoresShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
