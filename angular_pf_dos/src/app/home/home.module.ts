import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMaterialModule } from './home-material.module';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar.component';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeMaterialModule
  ],
  exports: [
    HomeComponent,
    ToolbarComponent,
    NavbarComponent,
    HomeRoutingModule,
    HomeMaterialModule
  ]
})
export class HomeModule { }
