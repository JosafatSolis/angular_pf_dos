import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
//import { FormControl, FormGroup, Validators } from '@angular/forms/forms';
import { AlumnoItem } from './alumnoitem';
import { CursoItem } from '../cursos/cursoitem';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-det-alumno',
  templateUrl: './det-alumno.component.html',
  styleUrls: ['./det-alumno.component.css']
})
export class DetAlumnoComponent implements OnInit {

  alumnoId!: string | null;

  // formAlumno: FormGroup = new FormGroup(
  //   {
  //     matricula: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
  //     nombre: new FormControl('', [Validators.required]),
  //     apellidos: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     fechaNacimiento: new FormControl('', [Validators.required]),
  //     genero: new FormControl()
  //   }
  // )

  @Input() alumno: AlumnoItem = 
    {
      matricula: 123, 
      nombre: "Juan", 
      apellidos: "Perez", 
      email:"1@2.com", 
      fechaNacimiento: new Date(),
      genero: "Hombre", 
      cursos: [{
        id: 1,
        nombre: "Angular",
        fechaInicio: new Date(),
        fechaFin: new Date(),
        creditos: 10,
        descripcion: "Curso completo de Angular"
      }]
    }
  displayedColumns: string[] = ['id', 'nombre', 'fechaInicio', 'fechaFin', 'action'];

  constructor(private route: ActivatedRoute, private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      this.alumnoId = map.get('id');
      console.log('alumnoId:', this.alumnoId);
      this.alumnosService.getAlumno(Number(this.alumnoId)).subscribe((resp) => {
        this.alumno = resp;
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
