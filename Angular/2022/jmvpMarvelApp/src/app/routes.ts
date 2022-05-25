import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";

import { Error404Component } from "./error404/error404.component";
import { HomeComponent } from "./home/home.component";
import { PersonajesDetalleComponent } from "./personajes/personajes-detalle/personajes-detalle.component";


const appRoutes: Routes = [
  //{ path: "", component: PersonajesComponent },
  { path: "", component: HomeComponent }, //componente home que es el principal
  { path: "detail/:id", component: PersonajesDetalleComponent }, //componente app-personajes-detalle con los detalles del personaje por id
  { path: "**", component: Error404Component } //mensaje error
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  appRoutes
  //,{ enableTracing: true } // <-- solo con fines de depuración
);
