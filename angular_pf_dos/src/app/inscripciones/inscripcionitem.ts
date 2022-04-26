import { AlumnoItem } from '../alumnos/alumnoitem';
import { CursoItem } from '../cursos/cursoitem';

export interface InscripcionItem {
    id: number,
    alumno: AlumnoItem,
    curso : CursoItem,
    fechaInscripcion: Date
}
