import { Component, Input, OnInit } from '@angular/core';
import { AlumnoItem } from './alumnoitem';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmarBorradoComponent } from './dialog-confirmar-borrado.component';
import { AlumnosService } from './alumnos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lst-alumnos',
  templateUrl: './lst-alumnos.component.html',
  styleUrls: ['./lst-alumnos.component.css']
})
export class LstAlumnosComponent implements OnInit {

  displayedColumns: string[] = ["matricula", "nombre", "apellidos", "email", "action"]
  selectedRow: any;

  alumnos!: AlumnoItem[];

  constructor(public dialog: MatDialog, private alumnosService: AlumnosService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe((resp) => {
      this.alumnos = resp;
    })
    console.log(this.alumnos);
    
  }

  changeRowSelected(row: any) {
    this.selectedRow = row;
  }

  onEditarClick(element: AlumnoItem) {
    console.log('editar:', element);
    
  }

  onEliminarClick(element: AlumnoItem): void {
    const dialogRef = this.dialog.open(DialogConfirmarBorradoComponent, {
      width: '400px',
      data: element
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log("resultado:", result);
    })
  }

  onDetallesClick(element: AlumnoItem) {
    this.router.navigate([String(element.id)], {relativeTo: this.route, queryParams: {readOnly: true}})    
  }
}
