import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainAsideComponent } from './main-aside/main-aside.component';
import { MainCuerpoComponent } from './main-cuerpo/main-cuerpo.component';



@NgModule({
  declarations: [
    MainComponent,
    MainMenuComponent,
    MainAsideComponent,
    MainCuerpoComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
