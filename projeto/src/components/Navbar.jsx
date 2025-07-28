import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🍓 Docelã</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cardapio">Cardápio</Link></li>
        <li><Link to="/carrinho">Carrinho</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
