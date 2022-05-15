import { LibrosModule } from './libros/libros.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { LibrosComponent } from './libros/libros.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'libros', loadChildren: () => import('./libros/libros.module')
                          .then(m => m.LibrosModule)},
  // { path: 'libros', component: LibrosComponent},
  { path: 'categorias', component: CategoriasComponent},
  { path: 'users', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
