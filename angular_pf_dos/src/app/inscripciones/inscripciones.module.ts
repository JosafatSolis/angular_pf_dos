import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';

import { SharedFormModule } from '../shared-form/shared-form.module';

@NgModule({
  declarations: [
    InscripcionesComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedFormModule
  ],
  exports: [
    InscripcionesComponent
  ]
})
export class InscripcionesModule { }
