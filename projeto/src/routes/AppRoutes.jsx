
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Tarefas from '../pages/Tarefas';

const AppRoutes = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
        <NavLink to="/tarefas">Tarefas</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
