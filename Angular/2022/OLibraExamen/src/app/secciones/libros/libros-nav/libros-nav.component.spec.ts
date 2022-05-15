import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosNavComponent } from './libros-nav.component';

describe('LibrosNavComponent', () => {
  let component: LibrosNavComponent;
  let fixture: ComponentFixture<LibrosNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
