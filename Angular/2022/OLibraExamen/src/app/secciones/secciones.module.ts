import { LibrosModule } from './libros/libros.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
// import { LibrosComponent } from './libros/libros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    // LibrosComponent,
    CategoriasComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    LibrosModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
