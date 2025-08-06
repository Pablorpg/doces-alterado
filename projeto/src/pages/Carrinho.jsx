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
    localStorage.setItem('pedidoFinalizado', 'true');
    localStorage.removeItem('carrinho');
    setShowConfirmacao(true);
    setItensAgrupados({});
    setTotal(0);
  };

  const nomesDoces = Object.keys(itensAgrupados);

  return (
    <div className="carrinho-container">
      <h2>🛍️ Carrinho</h2>

      {nomesDoces.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <>
          <ul className="lista-itens">
            {nomesDoces.map((nome, index) => {
              const item = itensAgrupados[nome];
              return (
                <li className="item-cardapio" key={index}>
                  <span>
                    <strong>{item.nome}</strong> — {item.quantidade}x<br />
                    <small>R$ {item.preco.toFixed(2)} cada</small>
                  </span>
                  <button
                    onClick={() => removerItem(item.nome)}
                    className="botao-remover"
                  >
                    ❌
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="caixa-pagamento">
            <h3>💳 Pagamento</h3>
            <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
            <button className="botao-finalizar" onClick={finalizarPedido}>
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
