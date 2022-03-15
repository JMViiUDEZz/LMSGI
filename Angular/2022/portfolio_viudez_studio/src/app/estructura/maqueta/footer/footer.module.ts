import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';
import { FooterSocialComponent } from './footer-social/footer-social.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    FooterComponent,
    FooterLogoComponent,
    FooterSocialComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    HeaderModule
  ]
})
export class FooterModule { }
