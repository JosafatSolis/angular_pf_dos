import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlumnoItem } from './alumnoitem';

@Component({
  selector: 'app-dialog-confirmar-borrado',
  templateUrl: './dialog-confirmar-borrado.component.html',
  styleUrls: ['./dialog-confirmar-borrado.component.css']
})
export class DialogConfirmarBorradoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogConfirmarBorradoComponent>,
    @Inject(MAT_DIALOG_DATA) public alumno: AlumnoItem) { }

  ngOnInit(): void {
  }

  onClickAceptar() {
    console.log('Aceptar');
  }

  onClickCancelar() {
    console.log('Cancelar');
    this.dialogRef.close();
  }

}
