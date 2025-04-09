import { useEffect, useState } from "react"
import { ICursoProps } from "../types/types"
import { getCourses } from "../http/api"

const useFetchCourses = () => {

    const [cursos, setCursos] = useState<ICursoProps[]>([])
        useEffect(()=>{
            (async()=>{
                const res = await getCourses();
                if(res){
                    setCursos(res)
                }
            })()
        },[])

    return {
        cursos,
        setCursos
    }
}

export default useFetchCourses
