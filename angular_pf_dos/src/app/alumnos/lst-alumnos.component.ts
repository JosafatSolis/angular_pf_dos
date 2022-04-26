import { Component, Input, OnInit } from '@angular/core';
import { AlumnoItem } from './alumnoitem';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmarBorradoComponent } from './dialog-confirmar-borrado.component';

@Component({
  selector: 'app-lst-alumnos',
  templateUrl: './lst-alumnos.component.html',
  styleUrls: ['./lst-alumnos.component.css']
})
export class LstAlumnosComponent implements OnInit {

  displayedColumns: string[] = ["matricula", "nombre", "apellidos"]
  selectedRow: any;

  @Input() alumnos: AlumnoItem[] = [
    {matricula: 123, nombre: "Juan", apellidos: "Perez", email:"1@2.com", fechaNacimiento: new Date(), genero: "Hombre"},
    {matricula: 321, nombre: "Pedro", apellidos: "Lopez", email:"3@4.net", fechaNacimiento: new Date(), genero: "Hombre"},
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  changeRowSelected(row: any) {
    this.selectedRow = row;
  }

  onEliminarClick(): void {
    const dialogRef = this.dialog.open(DialogConfirmarBorradoComponent, {
      width: '300px',
      data: this.alumnos[0]
    })
    
  }

}
