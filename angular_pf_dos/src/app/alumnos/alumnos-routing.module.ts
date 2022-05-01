import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstAlumnosComponent } from './lst-alumnos.component';
import { DetAlumnoComponent } from './det-alumno.component';

const routes: Routes = [
  // {
  //   path: 'alumnos/:id', component: DetAlumnoComponent
  // },
  // {
  //   path: 'alumnos', component: LstAlumnosComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
