import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import Carrinho from './pages/Carrinho';
import Perfil from './pages/Perfil';
import Pedido from './pages/Pedido';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
