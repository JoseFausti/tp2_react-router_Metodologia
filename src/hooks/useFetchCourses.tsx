import { useEffect, useState } from "react"
import { ICursoProps } from "../types/types"
import { getCourses } from "../http/api"

const useFetchCourses = () => {

    const [cursos, setCursos] = useState<ICursoProps[]>([]) // estado para almacenar los cursos obtenidos de la API
    const [isLoading, setIsLoading] = useState(true); // estado para controlar la carga de los cursos
    
    useEffect(()=>{
        (async()=>{
            setIsLoading(true); // se establece el estado de carga a true antes de hacer la petición
            const res = await getCourses();
            if(res){
                setCursos(res)
                setIsLoading(false); // se establece el estado de carga a false después de recibir la respuesta
            }
        })() // función autoejecutable para obtener los cursos de la API
    },[])

    return {
        cursos,
        setCursos,
        isLoading,
        setIsLoading
    }
}

export default useFetchCourses
