import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesBusquedaComponent } from './personajes-busqueda.component';
describe('PersonajesBusquedaComponent', () => {
  let component: PersonajesBusquedaComponent;
  let fixture: ComponentFixture<PersonajesBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
