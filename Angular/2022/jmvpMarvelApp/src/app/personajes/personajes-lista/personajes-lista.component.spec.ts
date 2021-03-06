import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesListaComponent } from './personajes-lista.component';

describe('PersonajesListaComponent', () => {
  let component: PersonajesListaComponent;
  let fixture: ComponentFixture<PersonajesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
