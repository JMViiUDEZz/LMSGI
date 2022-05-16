import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesBusquedaComponent } from './personajes-busqueda/personajes-busqueda.component';
import { PersonajesDetalleComponent } from './personajes-detalle/personajes-detalle.component';
import { PersonajesListaComponent } from './personajes-lista/personajes-lista.component';


@NgModule({
  declarations: [
    PersonajesBusquedaComponent,
    PersonajesDetalleComponent,
    PersonajesListaComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
