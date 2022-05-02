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
      this.alumnos = resp as AlumnoItem[];
    })   
  }

  changeRowSelected(row: any) {
    this.selectedRow = row;
  }

  onEditarClick(element: AlumnoItem) {
    this.router.navigate([String(element.id)], {relativeTo: this.route, queryParams: { readOnly: false }})    
  }

  onEliminarClick(element: AlumnoItem): void {
    const dialogRef = this.dialog.open(DialogConfirmarBorradoComponent, {
      width: '400px',
      data: element
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.alumnosService.deleteAlumno((result as AlumnoItem).id).subscribe((resp) => {
        this.alumnosService.getAlumnos().subscribe((resp) => {
          this.alumnos = resp as AlumnoItem[];
        })
      })
    })
  }

  onDetallesClick(element: AlumnoItem) {
    this.router.navigate([String(element.id)], {relativeTo: this.route, queryParams: { readOnly: true }})    
  }
}
