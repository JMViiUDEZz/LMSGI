import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';


@NgModule({
  declarations: [
    SobremiComponent,
    ServiciosComponent,
    FormacionComponent,
    ContactoComponent,
    PresupuestoComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
