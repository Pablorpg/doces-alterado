import React, { useState } from 'react';
import '../styles/Cardapio.css';

function Cardapio() {
  const doces = [
    { nome: 'Brigadeiro', preco: 2.5 },
    { nome: 'Cupcake', preco: 5.0 },
    { nome: 'Morango do Amor', preco: 12.0 },
    { nome: 'Bolo de Pote', preco: 7.5 }
  ];

  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('');

  const adicionar = (doce) => {
    const carrinhoExistente = JSON.parse(localStorage.getItem('carrinho')) || [];
    const novoCarrinho = [...carrinhoExistente, doce];

    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));

    setMensagem(`🍬 ${doce.nome} adicionado ao carrinho!`);
    setTipoMensagem(getClassePorDoce(doce.nome));

    setTimeout(() => {
      setMensagem('');
      setTipoMensagem('');
    }, 3000);
  };

  const getClassePorDoce = (doce) => {
    if (doce.toLowerCase().includes('brigadeiro')) return 'mensagem-brigadeiro';
    if (doce.toLowerCase().includes('cupcake')) return 'mensagem-cupcake';
    if (doce.toLowerCase().includes('morango')) return 'mensagem-morangodoamor';
    if (doce.toLowerCase().includes('bolo')) return 'mensagem-bolo';
    return '';
  };

  return (
    <div className="cardapio-container">
      <h2>🍰 Cardápio</h2>
      <div className="cardapio-grid">
        {doces.map((doce, index) => (
          <div className="item-doce" key={index}>
            <p>{doce.nome}</p>
            <p>R$ {doce.preco.toFixed(2)}</p>
            <button onClick={() => adicionar(doce)}>Adicionar 🛒</button>
          </div>
        ))}
      </div>

      {mensagem && (
        <div className={`mensagem-carrinho ${tipoMensagem}`}>
          {mensagem}
        </div>
      )}
    </div>
  );
}

export default Cardapio;
