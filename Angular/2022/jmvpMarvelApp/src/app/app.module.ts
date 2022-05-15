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
import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemComponent } from './personagens/personagem/personagem.component';
import { BuscaComponent } from './personagens/busca/busca.component';
import { DetalheComponent } from './personagens/detalhe/detalhe.component';
import { HomeComponent } from './home/home.component';
import { SafeHtmlPipe } from './tuberia/safe-html.pipe';
import { HttpErrorInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    PersonagensComponent,
    PersonagemComponent,
    BuscaComponent,
    DetalheComponent,
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
