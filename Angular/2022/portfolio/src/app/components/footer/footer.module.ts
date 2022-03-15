import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterSocialesComponent } from './footer-sociales/footer-sociales.component';
import { FooterMapaComponent } from './footer-mapa/footer-mapa.component';



@NgModule({
  declarations: [
    FooterComponent,
    FooterSocialesComponent,
    FooterMapaComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ]

})
export class FooterModule { }
