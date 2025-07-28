import React from 'react';
import './Styles/Perfil.css';

function Perfil() {
  return (
    <div className="perfil-container">
      <h2>👩‍🍳 Meu Perfil</h2>

      <div className="perfil-card">
        <p><strong>Nome:</strong> Wanessa Sabry</p>
        <p><strong>E-mail:</strong> wanessa@doceria.com</p>
        <p><strong>Doces favoritos:</strong> Cupcake, Donut e Brigadeiro</p>
        <button className="btn-editar">Editar Perfil ✏️</button>
      </div>
    </div>
  );
}

export default Perfil;
