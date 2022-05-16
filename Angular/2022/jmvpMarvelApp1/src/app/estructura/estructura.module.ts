import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstructuraRoutingModule } from './estructura-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { MainCuerpoComponent } from './main/main-cuerpo/main-cuerpo.component';
import { MainAsideComponent } from './main/main-aside/main-aside.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MainMenuComponent,
    MainCuerpoComponent,
    MainAsideComponent
  ],
  imports: [
    CommonModule,
    EstructuraRoutingModule
  ],
  exports:[
    HeaderComponent,
    MainComponent
  ]
})
export class EstructuraModule { }
