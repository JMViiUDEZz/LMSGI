import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesDetalleComponent } from './personajes-detalle.component';

describe('PersonajesDetalleComponent', () => {
  let component: PersonajesDetalleComponent;
  let fixture: ComponentFixture<PersonajesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
