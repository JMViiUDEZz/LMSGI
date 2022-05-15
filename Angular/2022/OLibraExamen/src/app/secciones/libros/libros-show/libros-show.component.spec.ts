import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosShowComponent } from './libros-show.component';

describe('LibrosShowComponent', () => {
  let component: LibrosShowComponent;
  let fixture: ComponentFixture<LibrosShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
