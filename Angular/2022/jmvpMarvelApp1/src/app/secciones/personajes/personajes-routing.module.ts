import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesBusquedaComponent } from './personajes-busqueda/personajes-busqueda.component';
import { PersonajesDetalleComponent } from './personajes-detalle/personajes-detalle.component';
import { PersonajesListaComponent } from './personajes-lista/personajes-lista.component';

const routes: Routes = [
  { path: 'busc', component: PersonajesBusquedaComponent, outlet:'cuerpo' },
  { path: 'deta', component: PersonajesDetalleComponent, outlet: 'menu'},
  { path: 'list', component: PersonajesListaComponent, outlet: 'aside'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
