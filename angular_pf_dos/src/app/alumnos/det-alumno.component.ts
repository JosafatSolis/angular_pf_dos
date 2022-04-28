import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoItem } from './alumnoitem';
import { CursoItem } from '../cursos/cursoitem';
import { AlumnosService } from './alumnos.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-det-alumno',
  templateUrl: './det-alumno.component.html',
  styleUrls: ['./det-alumno.component.css']
})
export class DetAlumnoComponent implements OnInit {

  alumnoId!: string | null;

  alumno!: AlumnoItem;
    // {
    //   matricula: 123, 
    //   nombre: "Juan", 
    //   apellidos: "Perez", 
    //   email:"1@2.com", 
    //   fechaNacimiento: new Date(),
    //   genero: "Hombre", 
    //   cursos: [{
    //     id: 1,
    //     nombre: "Angular",
    //     fechaInicio: new Date(),
    //     fechaFin: new Date(),
    //     creditos: 10,
    //     descripcion: "Curso completo de Angular"
    //   }]
    // }

  formAlumno: FormGroup = new FormGroup(
    {
      matricula: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      genero: new FormControl('')
    }
  )

  displayedColumns: string[] = ['id', 'nombre', 'fechaInicio', 'fechaFin', 'action'];

  constructor(private route: ActivatedRoute, private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      // Se obtiene el Id de la ruta
      this.alumnoId = map.get('id');
      // Se extrae la información de la BD
      this.alumnosService.getAlumno(Number(this.alumnoId)).subscribe((resp) => {
        this.alumno = {...resp, cursos: []};
        console.log('alumnoId:', this.alumno);
        // Se le asigna un valor a cada campo
        (this.formAlumno.get('matricula') as FormControl).setValue(this.alumno.matricula);
        (this.formAlumno.get('nombre') as FormControl).setValue(this.alumno.nombre);
        (this.formAlumno.get('apellidos') as FormControl).setValue(this.alumno.apellidos);
        (this.formAlumno.get('email') as FormControl).setValue(this.alumno.email);
        (this.formAlumno.get('fechaNacimiento') as FormControl).setValue(formatDate(this.alumno.fechaNacimiento, 'yyyy-MM-dd', 'en'));
        (this.formAlumno.get('genero') as FormControl).setValue(this.alumno.genero);
      })
    })
  }

  // Eliminar el registro del Alumno
  onEliminarClick() {
  }

  // Desinscribir un curso
  onBorrarClick(element: CursoItem) {

  }
}
