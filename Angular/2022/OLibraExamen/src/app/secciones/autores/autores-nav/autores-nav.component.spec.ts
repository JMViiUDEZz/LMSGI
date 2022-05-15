import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresNavComponent } from './autores-nav.component';

describe('AutoresNavComponent', () => {
  let component: AutoresNavComponent;
  let fixture: ComponentFixture<AutoresNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
