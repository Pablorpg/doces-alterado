import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🍓 Docelã</div>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/cardapio">Cardápio</Link></li>
        <li><Link to="/carrinho">Carrinho</Link></li>
        <li><Link to="/pedido">Pedido</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
