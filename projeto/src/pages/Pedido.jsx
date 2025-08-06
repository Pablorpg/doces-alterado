import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pedido.css';

function Pedido() {
  const [etapa, setEtapa] = useState('confirmado');
  const navigate = useNavigate();

  useEffect(() => {
    const pedidoFoiFinalizado = localStorage.getItem('pedidoFinalizado') === 'true';

    if (pedidoFoiFinalizado) {
      const timeouts = [
        setTimeout(() => setEtapa('preparando'), 3000),
        setTimeout(() => setEtapa('emRota'), 10000),
        setTimeout(() => setEtapa('entregue'), 17000)
      ];

      return () => timeouts.forEach(clearTimeout);
    } else {
      setEtapa('naoFinalizado');
    }
  }, []);

  const voltar = () => {
    localStorage.removeItem('pedidoFinalizado');
    navigate('/');
  };

  return (
    <div className="etapaOverlay">
      {etapa === 'confirmado' && <p>🔍 Analisando pedido...</p>}
      {etapa === 'preparando' && <p>👩‍🍳 Seu pedido está sendo preparado...</p>}
      {etapa === 'emRota' && (
        <div>
          <p>🛵 Pedido saiu para entrega!</p>
        </div>
      )}
      {etapa === 'entregue' && (
        <>
          <p>📦 Pedido entregue! Obrigada pela preferência.    ❤️</p>
          <button onClick={voltar}>Voltar ao Início.</button>
        </>
      )}
      {etapa === 'naoFinalizado' && (
        <>
          <p>❌ Nenhum pedido foi finalizado.</p>
          <button onClick={voltar}>Voltar ao Início</button>
        </>
      )}
    </div>
  );
}

export default Pedido;
