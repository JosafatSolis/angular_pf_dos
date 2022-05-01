import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login.component';
import { LstUsuariosComponent } from './auth/lst-usuarios.component';
import { DetUsuarioComponent } from './auth/det-usuario.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'auth/login', component: LoginComponent,
  },
  {
    path: 'auth', component: HomeComponent,
    children: [
      { path: 'usuarios', component: LstUsuariosComponent },
      { path: 'usuarios/:id', component: DetUsuarioComponent }
    ]
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
