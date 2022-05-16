import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { CreadoresComponent } from './creadores/creadores.component';
import { EventosComponent } from './eventos/eventos.component';
import { HistoriasComponent } from './historias/historias.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: 'personajes', loadChildren: () => import('./personajes/personajes.module')
                          .then(m => m.PersonajesModule)},
  // { path: 'libros', component: LibrosComponent},
  { path: 'series', component: SeriesComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'creadores', component: CreadoresComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'historias', component: HistoriasComponent },
  { path: 'home', component: HomeComponent }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
