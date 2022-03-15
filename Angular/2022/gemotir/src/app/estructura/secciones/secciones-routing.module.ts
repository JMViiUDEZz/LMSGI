import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';
import { QsomosComponent } from './qsomos/qsomos.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'maquinaria', component: MaquinariaComponent},
  {path: 'qsomos', component: QsomosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
