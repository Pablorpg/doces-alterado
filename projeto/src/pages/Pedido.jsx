import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pedido() {
  const [etapa, setEtapa] = useState('confirmado');
  const navigate = useNavigate();

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setEtapa('preparando'), 3000),
      setTimeout(() => setEtapa('emRota'), 10000),
      setTimeout(() => setEtapa('entregue'), 10000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const voltar = () => navigate('/');

  return (
    <div className="etapaOverlay">
      {etapa === 'confirmado' && <p> 🔍 Analisando pedido...</p>}
      {etapa === 'preparando' && <p>👩‍🍳 Seu pedido está sendo preparado...</p>}
      {etapa === 'emRota' && (
        <div>
          <p>🛵 Pedido saiu para entrega!</p>
          <div className="motoAnimada">🏍️💨</div>
        </div>
      )}
      {etapa === 'entregue' && (
        <>
          <p>📦 Pedido entregue com sucesso! Obrigada ❤️</p>
          <button onClick={voltar}>Voltar à Home</button>
        </>
      )}

      <style>
        {`
          .etapaOverlay {
            height: 100vh;
            background: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
            font-weight: bold;
            text-align: center;
            padding: 20px;
          }

          .etapaOverlay button {
            margin-top: 20px;
            padding: 12px 24px;
            font-size: 1rem;
            border-radius: 10px;
            background-color: #2e7d32;
            color: white;
            border: none;
            cursor: pointer;
          }

          .motoAnimada {
            font-size: 2rem;
            margin-top: 20px;
            animation: moverMoto 2s infinite linear;
          }

          @keyframes moverMoto {
            0% { transform: translateX(-150px); }
            100% { transform: translateX(150px); }
          }
        `}
      </style>
    </div>
  );
}

export default Pedido;
