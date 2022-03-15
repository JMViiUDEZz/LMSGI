import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'secciones', loadChildren: () => import('./estructura/secciones/secciones.module').then (m => m.SeccionesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
