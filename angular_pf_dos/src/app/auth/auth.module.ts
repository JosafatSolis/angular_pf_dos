import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthMaterialModule } from './auth-material.module';
import { LstUsuariosComponent } from './lst-usuarios.component';
import { DetUsuarioComponent } from './det-usuario.component';

@NgModule({
  declarations: [
    LstUsuariosComponent,
    DetUsuarioComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthMaterialModule
  ],
  exports: [
    LstUsuariosComponent,
    DetUsuarioComponent
  ]
})
export class AuthModule { }
