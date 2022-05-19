import { Component, OnInit } from '@angular/core';
import { AlumnoItem } from '../alumnos/alumnoitem';
import { AlumnosService } from '../alumnos/alumnos.service';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  alumnos !: AlumnoItem[];

  formInscripciones = this.fb.group({
    alumno: new FormControl('', [Validators.required]),
    curso: new FormControl('', [Validators.required])
  })

  constructor(
    private alumnosService: AlumnosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((resp) => {
      this.alumnos = resp as AlumnoItem[];
    })
  }

}
