
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Tarefas from '../pages/Tarefas';

const AppRoutes = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/tarefas">Tarefas</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
