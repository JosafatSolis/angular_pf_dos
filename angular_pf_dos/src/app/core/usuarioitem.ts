// Esta interfaz va en core para poder usarla sin tener que cargar
// auth, que es lazy loading
export interface UsuarioItem {
    id: number,
    username: string,
    nombre: string,
    pwd: string
    alumnosCUD: boolean,
    cursosCUD: boolean,
    inscripcionesCUD: boolean,
    usuariosCUD: boolean
}
