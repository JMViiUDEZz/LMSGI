import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoresCreateComponent } from './autores-create/autores-create.component';
import { AutoresListComponent } from './autores-list/autores-list.component';
import { AutoresNavComponent } from './autores-nav/autores-nav.component';
import { AutoresShowComponent } from './autores-show/autores-show.component';
import { AutoresComponent } from './autores.component';

const routes: Routes = [
  { path: 'home', component: AutoresComponent, outlet:'cuerpo' }, // home
  { path: 'new', component: AutoresCreateComponent, outlet: 'cuerpo'},
  { path: 'show', component: AutoresShowComponent, outlet: 'cuerpo'},
  { path: 'sidevar', component: AutoresNavComponent, outlet:'menu' },
  { path: 'list/:codCat/:nombre', component: AutoresListComponent, outlet: 'cuerpo'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
