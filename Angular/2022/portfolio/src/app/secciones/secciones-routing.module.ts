import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FormacionComponent } from './formacion/formacion.component';
import { QSomosComponent } from './q-somos/q-somos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'formacion', component: FormacionComponent},
  {path: 'q-somos', component: QSomosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'trabajos', component: TrabajosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
