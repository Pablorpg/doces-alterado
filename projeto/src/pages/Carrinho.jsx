import React, { useEffect, useState } from 'react';

function Carrinho() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItens(carrinhoSalvo);
  }, []);

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>🛍️ Carrinho</h2>
      {itens.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <ul>
          {itens.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Carrinho;
