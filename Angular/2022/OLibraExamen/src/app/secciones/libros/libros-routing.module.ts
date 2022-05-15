import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosCreateComponent } from './libros-create/libros-create.component';
import { LibrosShowComponent } from './libros-show/libros-show.component';
import { LibrosNavComponent } from './libros-nav/libros-nav.component';
import { LibrosListComponent } from './libros-list/libros-list.component';
import { LibrosComponent } from './libros.component';

const routes: Routes = [
  { path: 'home', component: LibrosComponent, outlet:'cuerpo' }, // home
  { path: 'new', component: LibrosCreateComponent, outlet: 'cuerpo'},
  { path: 'show', component: LibrosShowComponent, outlet: 'cuerpo'},
  { path: 'sidevar', component: LibrosNavComponent, outlet:'menu' },
  { path: 'list/:codCat/:nombre', component: LibrosListComponent, outlet: 'cuerpo'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
