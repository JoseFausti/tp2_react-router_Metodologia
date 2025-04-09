export interface IEstudiante {
    id: number,
    nombre: string,
    edad: number,
}

export interface ICursoProps{
    id: number,
    nombre: string,
    estudiantes: IEstudiante[]
}

export interface ICurso { 
    cursos: ICursoProps[]
}
