import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedListsModule } from '../shared-lists/shared-lists.module';
import { SharedDetailsModule } from '../shared-details/shared-details.module';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { LstAlumnosComponent } from './lst-alumnos.component';
import { DetAlumnoComponent } from './det-alumno.component';
import { DialogConfirmarBorradoComponent } from './dialog-confirmar-borrado.component';

@NgModule({
  declarations: [
    LstAlumnosComponent,
    DetAlumnoComponent,
    DialogConfirmarBorradoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlumnosRoutingModule,
    SharedListsModule,
    SharedDetailsModule,
  ],
  exports: [
    LstAlumnosComponent,
    DetAlumnoComponent
  ]
})
export class AlumnosModule { }
