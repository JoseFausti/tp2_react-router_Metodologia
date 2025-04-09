import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EstudiantesScreen from '../components/screens/EstudiantesScreen';
import CursosScreen from '../components/screens/CursosScreen';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CursosScreen />} />
        <Route path="/estudiantes" element={<EstudiantesScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
