import { useLocation } from "react-router-dom"
import useFetchCourses from "../../hooks/useFetchCourses";

const EstudiantesScreen = () => {
  
  const location = useLocation(); // hook de react-router-dom que devuelve la ubicación actual de la aplicación, incluyendo el pathname, search y hash
  const param = new URLSearchParams(location.search); // obtiene los parámetros de la URL
  const cursoId = param.get("curso") // obtiene el valor del parámetro "curso" de la URL

  const {cursos} = useFetchCourses(); // hook personalizado que obtiene los cursos de la API 
  const curso = cursos.find((curso) => curso.id === Number(cursoId)); // busca el curso que coincide con el id obtenido de la URL

  return (
    <>
      {curso 
        ? (
          <div>
            <h3>Estudiantes del curso {curso.nombre}</h3>
            {curso.estudiantes.map((estudiante) => (
              <div key={estudiante.id}>
                <h4>{estudiante.nombre}</h4>
                <p>Edad: {estudiante.edad}</p>
              </div>
            ))}
          </div>
        )
        : (
          <p>No se encontró el curso</p>
        )
      }
    </>
  )
}

export default EstudiantesScreen
