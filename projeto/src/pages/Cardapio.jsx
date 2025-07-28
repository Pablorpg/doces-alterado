import React, { useState } from 'react';
import '../styles/Cardapio.css';

function Cardapio() {
  const doces = ['Brigadeiro', 'Cupcake', 'Donut', 'Bolo de Pote'];

  const adicionar = (doce) => {
    // Recuperar carrinho do localStorage
    const carrinhoExistente = JSON.parse(localStorage.getItem('carrinho')) || [];
    const novoCarrinho = [...carrinhoExistente, doce];

    // Salvar no localStorage
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    alert(`${doce} adicionado ao carrinho!`);
  };

  return (
    <div className="cardapio-container">
      <h2>🍰 Cardápio</h2>
      <div className="cardapio-grid">
        {doces.map((doce, index) => (
          <div className="item-doce" key={index}>
            <p>{doce}</p>
            <button onClick={() => adicionar(doce)}>Adicionar 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardapio