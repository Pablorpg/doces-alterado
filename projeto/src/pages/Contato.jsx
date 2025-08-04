import React, { useState } from 'react';
import '../styles/Contato.css';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    setTimeout(() => {
      setNome('');
      setEmail('');
      setMensagem('');
      setEnviado(false);
      alert(`🍓 Sua mensagem foi enviada para: ${nome}`);
    }, 1000);
  };

  return (
    <div className="contato-container">
      <h2>📞 Fale com a Doceria</h2>

      <form className="form-contato" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Mensagem:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            rows="4"
            required
          ></textarea>
        </label>

        <button type="submit" disabled={enviado}>
          {enviado ? 'Enviando...' : 'Enviar Mensagem 💌'}
        </button>
      </form>
    </div>
  );
}

export default Contato;
