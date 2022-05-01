import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LstAlumnosComponent } from '../alumnos/lst-alumnos.component';
import { DetAlumnoComponent } from '../alumnos/det-alumno.component';
import { LstCursosComponent } from '../cursos/lst-cursos.component';
import { DetCursoComponent } from '../cursos/det-curso.component';
import { InscripcionesComponent } from '../inscripciones/inscripciones.component';

import { IsLoggedInGuard } from '../auth/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    canActivate: [IsLoggedInGuard],
    canActivateChild: [IsLoggedInGuard],
    children: [
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
      { path: 'alumnos', component: LstAlumnosComponent },
      { path: 'alumnos/:id', component: DetAlumnoComponent },
      { path: 'cursos', component: LstCursosComponent},
      { path: 'cursos/:id', component: DetCursoComponent },
      { path: 'inscripciones', component: InscripcionesComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
