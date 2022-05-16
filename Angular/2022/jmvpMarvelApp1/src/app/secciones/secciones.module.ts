import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
// import { LibrosComponent } from './libros/libros.component';
import { PersonajesModule } from './personajes/personajes.module';


@NgModule({
  declarations: [
    // LibrosComponent,
  ],
  imports: [
    CommonModule,
    PersonajesModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
