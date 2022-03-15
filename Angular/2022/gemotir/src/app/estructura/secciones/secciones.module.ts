import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QsomosComponent } from './qsomos/qsomos.component';


@NgModule({
  declarations: [
    InicioComponent,
    MaquinariaComponent,
    ContactoComponent,
    QsomosComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
