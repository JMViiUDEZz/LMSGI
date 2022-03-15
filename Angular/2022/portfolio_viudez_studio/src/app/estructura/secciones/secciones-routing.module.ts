import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobremiComponent } from './sobremi/sobremi.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'formacion', component: FormacionComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'sobremi', component: SobremiComponent},
  {path: 'presupuesto', component: PresupuestoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
