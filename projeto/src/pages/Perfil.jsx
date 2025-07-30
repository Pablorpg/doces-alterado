import React, { useState, useEffect } from 'react';
import '../styles/Perfil.css';

function Perfil() {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    const nomeSalvo = localStorage.getItem('perfil_nome');
    const emailSalvo = localStorage.getItem('perfil_email');
    const imagemSalva = localStorage.getItem('perfil_imagem');

    setNome(nomeSalvo || 'Wanessa Sabry');
    setEmail(emailSalvo || 'wanessa@doceria.com');
    setImagem(
      imagemSalva ||
        'https://i.pinimg.com/564x/15/f7/9f/15f79f086f2b340a9b8c678c8698d440.jpg'
    );
  }, []);

  const salvar = (e) => {
    e.preventDefault();
    localStorage.setItem('perfil_nome', nome);
    localStorage.setItem('perfil_email', email);
    localStorage.setItem('perfil_imagem', imagem);
    setModoEdicao(false);
  };

  const resetar = () => {
    const nomePadrao = 'Wanessa Sabry';
    const emailPadrao = 'wanessa@doceria.com';
    const imagemPadrao =
      'https://th.bing.com/th/id/OIP.MJ1M2PH3UASZU85bO6BFzAHaHa?w=193&h=193&c=7&r=0&o=7&pid=1.7&rm=3';

    setNome(nomePadrao);
    setEmail(emailPadrao);
    setImagem(imagemPadrao);

    localStorage.setItem('perfil_nome', nomePadrao);
    localStorage.setItem('perfil_email', emailPadrao);
    localStorage.setItem('perfil_imagem', imagemPadrao);
  };

  return (
    <div className="perfil-container">
      <h2>👩‍🍳 Meu Perfil</h2>

      <div className="perfil-card">
        <img src={imagem} alt="Foto de perfil" className="foto-perfil" />

        {!modoEdicao ? (
          <>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>E-mail:</strong> {email}</p>
            <p><strong>Doces favoritos:</strong> Cupcake, Donut e Brigadeiro</p>

            <button className="btn-editar" onClick={() => setModoEdicao(true)}>
              Editar Perfil
            </button>

            <button className="btn-resetar" onClick={resetar}>
              Resetar Perfil
            </button>
          </>
        ) : (
          <form onSubmit={salvar} className="form-edicao">
            <label>
              Nome:
              <input value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <label>
              E-mail:
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Link da imagem:
              <input
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              />
            </label>
            <button type="submit">Salvar ✅</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Perfil;



