import React, { useEffect, useState } from 'react';
import '../styles/Carrinho.css';

function Carrinho() {
  const [itensAgrupados, setItensAgrupados] = useState({});
  const [total, setTotal] = useState(0);
  const [showConfirmacao, setShowConfirmacao] = useState(false);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  const carregarCarrinho = () => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];

    const agrupado = {};
    let valorTotal = 0;

    carrinhoSalvo.forEach((item) => {
      const key = item.nome;

      if (!agrupado[key]) {
        agrupado[key] = {
          nome: item.nome,
          preco: item.preco,
          quantidade: 1
        };
      } else {
        agrupado[key].quantidade += 1;
      }

      valorTotal += item.preco;
    });

    setItensAgrupados(agrupado);
    setTotal(valorTotal);
  };

  const removerItem = (nome) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];

    const indexParaRemover = carrinhoAtual.findIndex((item) => item.nome === nome);
    if (indexParaRemover !== -1) {
      carrinhoAtual.splice(indexParaRemover, 1);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
    carregarCarrinho();
  };

  const finalizarPedido = () => {
    localStorage.removeItem('carrinho');
    setShowConfirmacao(true);
    setItensAgrupados({});
    setTotal(0);
  };

  const nomesDoces = Object.keys(itensAgrupados);

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>🛍️ Carrinho</h2>

      {nomesDoces.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {nomesDoces.map((nome, index) => {
              const item = itensAgrupados[nome];
              return (
                <li
                  className="itemCardapio"
                  key={index}
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '10px',
                    background: '#fff0f5',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    maxWidth: '380px',
                    margin: '10px auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ textAlign: 'left' }}>
                    <strong>{item.nome}</strong> — {item.quantidade}x<br />
                    <small>R$ {item.preco.toFixed(2)} cada</small>
                  </span>
                  <button
                    onClick={() => removerItem(item.nome)}
                    style={{
                      background: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                  >
                    ❌
                  </button>
                </li>
              );
            })}
          </ul>

          <div
            style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: '#fdf0f5',
              borderRadius: '15px',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <h3>💳 Pagamento</h3>
            <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
            <button
              style={{
                background: '#4caf50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                marginTop: '10px',
                fontWeight: 'bold'
              }}
              onClick={finalizarPedido}
            >
              Finalizar Pedido
            </button>
          </div>
        </>
      )}

      {showConfirmacao && (
        <div className="overlay">
          <div className="mensagem-finalizado">
            <h2>✅ Pedido Finalizado!</h2>
            <p>Obrigado por comprar com a gente. 🍩🍓</p>
            <button onClick={() => setShowConfirmacao(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
