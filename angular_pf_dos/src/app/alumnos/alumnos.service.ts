import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlumnoItem } from './alumnoitem';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<AlumnoItem[]> {
    return this.http.get<AlumnoItem[]>(environment.API_BASE_URL + 'alumnos');
  }

  getAlumno(id: number): Observable<AlumnoItem> {
    return this.http.get<AlumnoItem>(environment.API_BASE_URL + 'alumnos/' + String(id))
  }
}
