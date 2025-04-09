import axios from "axios"
import { ICursoProps } from "../types/types"

export const getCourses = async(): Promise<ICursoProps[] | undefined> => {
    try {
        const res = await axios.get<ICursoProps[]>("http://localhost:3001/cursos")
        if(res) return res.data
        throw new Error("No se encontraron cursos")
    } catch (error) {
        throw new Error("Error al obtener los cursos: " + error)
    }
}
