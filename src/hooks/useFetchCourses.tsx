import { useEffect, useState } from "react"
import { ICursoProps } from "../types/types"
import { getCourses } from "../http/api"

const useFetchCourses = () => {

    const [cursos, setCursos] = useState<ICursoProps[]>([]) // estado para almacenar los cursos obtenidos de la API
        useEffect(()=>{
            (async()=>{
                const res = await getCourses();
                if(res){
                    setCursos(res)
                }
            })() // función autoejecutable para obtener los cursos de la API
        },[])

    return {
        cursos,
        setCursos
    }
}

export default useFetchCourses
