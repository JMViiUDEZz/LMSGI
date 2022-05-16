import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { Error404Component } from "./error404/error404.component";
import { HomeComponent } from "./home/home.component";
import { PersonajesDetalleComponent } from "./personajes/personajes-detalle/personajes-detalle.component";


const appRoutes: Routes = [
  //{ path: "", component: PersonagensComponent },
  { path: "", component: HomeComponent },
  { path: "detail/:id", component: PersonajesDetalleComponent },
  { path: "**", component: Error404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes
  //,{ enableTracing: true } // <-- debugging purposes only
);
