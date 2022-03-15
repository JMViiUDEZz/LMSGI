import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { QSomosComponent } from './q-somos/q-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    QSomosComponent,
    ServiciosComponent,
    TrabajosComponent,
    FormacionComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
