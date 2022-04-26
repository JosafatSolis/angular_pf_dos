import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { LstCursosComponent } from './lst-cursos.component';
import { DetCursoComponent } from './det-curso.component';


@NgModule({
  declarations: [
    LstCursosComponent,
    DetCursoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [
    LstCursosComponent,
    DetCursoComponent
  ]
})
export class CursosModule { }
