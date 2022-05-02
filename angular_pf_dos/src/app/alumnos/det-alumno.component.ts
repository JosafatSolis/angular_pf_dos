import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoItem } from './alumnoitem';
import { CursoItem } from '../cursos/cursoitem';
import { AlumnosService } from './alumnos.service';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-det-alumno',
  templateUrl: './det-alumno.component.html',
  styleUrls: ['./det-alumno.component.css']
})
export class DetAlumnoComponent implements OnInit {

  alumnoId!: string | null;
  readOnly: boolean = true; // Inicia deshabilitado
  // @ViewChild('form') form!: NgForm;

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
      matricula: new FormControl({value: '', disabled: this.readOnly}, [Validators.required, Validators.pattern('^[0-9]*$')]),
      nombre: new FormControl({value:'', disabled: this.readOnly}, [Validators.required]),
      apellidos: new FormControl({value: '', disabled: this.readOnly}, [Validators.required]),
      email: new FormControl({value: '', disabled: this.readOnly}, [Validators.required, Validators.email]),
      fechaNacimiento: new FormControl({value: '', disabled: this.readOnly}, [Validators.required]),
      genero: new FormControl({value: '', disabled: this.readOnly})
    }
  )

  displayedColumns: string[] = ['id', 'nombre', 'fechaInicio', 'fechaFin', 'action'];

  constructor(private route: ActivatedRoute, private alumnosService: AlumnosService) { }

  controls = {
    matricula: this.formAlumno.get('matricula') as FormControl,
    nombre: this.formAlumno.get('nombre') as FormControl,
    apellidos: this.formAlumno.get('apellidos') as FormControl,
    email: this.formAlumno.get('email') as FormControl,
    fechaNacimiento: this.formAlumno.get('fechaNacimiento') as FormControl,
    genero: this.formAlumno.get('genero') as FormControl
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((map: ParamMap) => {
      // Se obtiene el Id de la ruta
      this.alumnoId = map.get('id');
      // Se extrae la información de la BD
      this.alumnosService.getAlumno(Number(this.alumnoId)).subscribe((resp) => {
        this.alumno = {...resp, cursos: []};
        // Se le asigna un valor a cada campo
        this.controls.matricula.setValue(this.alumno.matricula);
        this.controls.nombre.setValue(this.alumno.nombre);
        this.controls.apellidos.setValue(this.alumno.apellidos);
        this.controls.email.setValue(this.alumno.email);
        this.controls.fechaNacimiento.setValue(formatDate(this.alumno.fechaNacimiento, 'yyyy-MM-dd', 'en'));
        this.controls.genero.setValue(this.alumno.genero);
      })
    })

    this.route.queryParams.subscribe((params) => {
      // ¡¡ Cuidado con esta conversión, por alguna razón no funciona si se quiere asignar directamente el valor
      // convertido con "as unknown as boolean" !!
      this.readOnly = params['readOnly'] == 'true' ? true : false;
      this.desHabilita();
    })
  }

  cancelaEdicion(alumno: AlumnoItem) {
    this.formAlumno.patchValue({
      matricula: alumno.matricula,
      nombre: alumno.nombre,
      apellidos: alumno.apellidos,
      email: alumno.email,
      fechaNacimiento: formatDate(alumno.fechaNacimiento, 'yyyy-MM-dd', 'en'),
      genero: alumno.genero
    })
    //this.formAlumno.reset(this.formAlumno.value);
    this.readOnly = true;
    this.desHabilita();
  }

  onEditarClick() {
    this.readOnly = false;
    this.desHabilita();
  }

  onCancelarClick() {
    this.cancelaEdicion(this.alumno);
  }

  // Clic en botón Guardar cambios del Alumno
  onNgSubmit() {
    // Como el id no está en el form, hay que agregarlo:
    const al = this.formAlumno.value as AlumnoItem;
    this.alumnosService.updateAlumno({...al, id:this.alumno.id}).subscribe((resp) => {
      this.cancelaEdicion(resp as AlumnoItem);
    })
  }

  // Eliminar el registro del Alumno
  onEliminarClick() {    
  }

  desHabilita() {
    this.readOnly ? this.controls.matricula.disable() : this.controls.matricula.enable();
    this.readOnly ? this.controls.nombre.disable() : this.controls.nombre.enable();
    this.readOnly ? this.controls.apellidos.disable() : this.controls.apellidos.enable();
    this.readOnly ? this.controls.email.disable() : this.controls.email.enable();
    this.readOnly ? this.controls.fechaNacimiento.disable() : this.controls.fechaNacimiento.enable();
    this.readOnly ? this.controls.genero.disable() : this.controls.genero.enable();
  }

  // Desinscribir un curso
  onBorrarClick(element: CursoItem) {

  }
}
