import { CursoItem } from '../cursos/cursoitem';
export interface AlumnoItem {
    id: number,
    matricula: number,
    nombre: string,
    apellidos: string,
    email: string,
    fechaNacimiento: Date,
    genero: string
    cursos: CursoItem[]
}
