import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores.component';
import { AutoresCreateComponent } from './autores-create/autores-create.component';
import { AutoresListComponent } from './autores-list/autores-list.component';
import { AutoresNavComponent } from './autores-nav/autores-nav.component';
import { AutoresShowComponent } from './autores-show/autores-show.component';


@NgModule({
  declarations: [
    AutoresComponent,
    AutoresCreateComponent,
    AutoresListComponent,
    AutoresNavComponent,
    AutoresShowComponent
  ],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
