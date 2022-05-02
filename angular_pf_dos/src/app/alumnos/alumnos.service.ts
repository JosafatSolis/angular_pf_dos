import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlumnoItem } from './alumnoitem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<AlumnoItem[]> {
    return this.http.get<AlumnoItem[]>(environment.API_BASE_URL + 'alumnos');
  }

  getAlumno(id: number): Observable<AlumnoItem> {
    return this.http.get<AlumnoItem>(environment.API_BASE_URL + 'alumnos/' + String(id));
  }

  // Retorna el elemento que se eliminó
  deleteAlumno(id: number): Observable<AlumnoItem> {
    return this.http.delete<AlumnoItem>(environment.API_BASE_URL + 'alumnos/' + String(id));
  }

  updateAlumno(alumno: AlumnoItem): Observable<AlumnoItem> {
    return this.http.put<AlumnoItem>(environment.API_BASE_URL + 'alumnos/' + String(alumno.id), alumno);
  }
}
