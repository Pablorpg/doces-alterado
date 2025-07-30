import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Bem-vindo à Doceria!</h1>
        <p>Delicie-se com nossos doces e bolos feitos com carinho!</p>
        <button className="btn-saborear" onClick={() => navigate('/cardapio')}>
          Ver Cardápio 🍩
        </button>
      </div>

      <section className="vitrine">
        <h2>✨ Nossos Doces ✨</h2>
        <div className="doces-grid">
          <div className="doce-card">Cupcake</div>
          <div className="doce-card">Morango do Amor</div>
          <div className="doce-card">Brigadeiro</div>
          <div className="doce-card">Bolo de Pote</div>
        </div>
      </section>

      <section className="promocoes">
        <h2>🎉 Promoções da Semana</h2>
        <p>Compre 3 cupcakes e ganhe 1 grátis!</p>
        <p>Frete grátis em pedidos acima de R$30!</p>
      </section>
    </div>
  );
}

export default Home;
