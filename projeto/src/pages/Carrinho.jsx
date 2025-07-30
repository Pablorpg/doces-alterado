import React, { useEffect, useState } from 'react';

function Carrinho() {
  const [itensAgrupados, setItensAgrupados] = useState({});
  const [total, setTotal] = useState(0);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  const carregarCarrinho = () => {
    let carrinhoSalvo = [];
    try {
      carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    } catch {
      carrinhoSalvo = [];
    }

    const agrupado = {};
    let valorTotal = 0;

    carrinhoSalvo.forEach((item) => {
      const key = item.nome;

      if (!agrupado[key]) {
        agrupado[key] = {
          nome: item.nome,
          preco: Number(item.preco),
          quantidade: 1,
        };
      } else {
        agrupado[key].quantidade += 1;
      }

      valorTotal += Number(item.preco);
    });

    setItensAgrupados(agrupado);
    setTotal(valorTotal);
  };

  const removerItem = (nome) => {
    let carrinhoAtual = [];
    try {
      carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
    } catch {
      carrinhoAtual = [];
    }

    const indexParaRemover = carrinhoAtual.findIndex((item) => item.nome === nome);
    if (indexParaRemover !== -1) {
      carrinhoAtual.splice(indexParaRemover, 1);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
    carregarCarrinho();
  };

  const finalizarPedido = () => {
    localStorage.removeItem('carrinho');
    setItensAgrupados({});
    setTotal(0);
    setPedidoFinalizado(true);
  };

  const voltarAoCarrinho = () => {
    setPedidoFinalizado(false);
  };

  const nomesDoces = Object.keys(itensAgrupados);

  return (
    <>
      {pedidoFinalizado ? (
        <div className="overlay">
          <div className="modal">
            <p>🎉 Pedido finalizado com sucesso! Obrigada pela compra! 🎉</p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={voltarAoCarrinho}>Voltar ao Carrinho</button>
              <button
                style={{ backgroundColor: '#1976d2' }}
                onClick={() => window.location.href = '/pedido'}
              >
                Acompanhar Pedido
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2>🛍️ Carrinho</h2>

          {nomesDoces.length === 0 ? (
            <p>Carrinho vazio.</p>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {nomesDoces.map((nome) => {
                  const item = itensAgrupados[nome];
                  return (
                    <li
                      key={nome}
                      className="itemCardapio"
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
                        <strong>{item.nome}</strong> — {item.quantidade}x
                        <br />
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
                        aria-label={`Remover ${item.nome} do carrinho`}
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
                <p>
                  Total: <strong>R$ {total.toFixed(2)}</strong>
                </p>
                <button
                  style={{
                    background: '#4caf50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.target.style.backgroundColor = '#45a049')}
                  onMouseLeave={e => (e.target.style.backgroundColor = '#4caf50')}
                  onClick={finalizarPedido}
                >
                  Finalizar Pedido
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <style>
        {`
          .overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
            animation: fadeInScale 0.4s ease forwards;
            z-index: 9999;
          }

          .modal {
            background: #fff;
            padding: 30px 40px;
            border-radius: 20px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            transform: scale(0.8);
            opacity: 0;
            animation: fadeInScale 0.4s ease forwards;
          }

          .modal p {
            font-size: 1.4rem;
            margin-bottom: 20px;
            color: #2e7d32;
            font-weight: 700;
          }

          .modal button {
            background-color: #2e7d32;
            color: white;
            border: none;
            padding: 12px 28px;
            font-size: 1rem;
            border-radius: 12px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .modal button:hover {
            background-color: #1b4d22;
          }

          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
}

export default Carrinho;
