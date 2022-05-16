import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { routing } from './routes';

import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonajesListaComponent } from './personajes/personajes-lista/personajes-lista.component';
import { PersonajesBusquedaComponent } from './personajes/personajes-busqueda/personajes-busqueda.component';
import { PersonajesDetalleComponent } from './personajes/personajes-detalle/personajes-detalle.component';
import { HomeComponent } from './home/home.component';
import { SafeHtmlPipe } from './tuberia/safe-html.pipe';
import { HttpErrorInterceptor } from './http.interceptor';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    PersonajesComponent,
    PersonajesListaComponent,
    PersonajesBusquedaComponent,
    PersonajesDetalleComponent,
    HomeComponent,
    SafeHtmlPipe,
  ],
  imports: [
    HttpModule,
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
