import React, { useState } from 'react';
import styled from 'styled-components';

const ModoDiaNoiteContainer = styled.div`
  background-color: ${(props) => (props.modo === 'dia' ? '#f4f4f4' : '#333')};
  color: ${(props) => (props.modo === 'dia' ? '#333' : '#f4f4f4')};
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
  padding: 20px;
  min-height: 86.5vh;
`;

const ModoButton = styled.button`
  background-color: ${(props) => (props.modo === 'dia' ? '#333' : '#f4f4f4')};
  color: ${(props) => (props.modo === 'dia' ? '#f4f4f4' : '#333')};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 20px;
`;

const AtividadesContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${(props) => (props.modo === 'dia' ? '#f4f4f4' : '#333')};
  border-radius: 10px;
`;

const Atividade = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 10px;
`;

function ModoDiaNoite() {
  const [modo, setModo] = useState('dia');

  const alternarModo = () => {
    if (modo === 'dia') {
      setModo('noite');
    } else {
      setModo('dia');
    }
  };

  return (
    <ModoDiaNoiteContainer modo={modo}>
      <h1>Atividades Noturnas</h1>
      <p>Modo atual: {modo}</p>
      <ModoButton modo={modo} onClick={alternarModo}>
        Alternar para {modo === 'dia' ? 'Noite' : 'Dia'}
      </ModoButton>
      <AtividadesContainer modo={modo}>
        <h2>Atividades Interessantes à Noite</h2>
        <Atividade>
          Observar o céu estrelado é uma das atividades mais fascinantes durante a noite. Explore constelações e estrelas cadentes.
        </Atividade>
        <Atividade>
          Passeios noturnos em parques naturais oferecem uma experiência única de conexão com a natureza.
        </Atividade>
        <Atividade>
          A vida noturna na cidade pode ser emocionante, com bares, restaurantes e espetáculos ao vivo.
        </Atividade>
        <Atividade>
          Faça caminhadas noturnas com lanternas para uma aventura diferente em trilhas iluminadas pela lua.
        </Atividade>
        <Atividade>
          Explore a fotografia noturna e capture paisagens urbanas sob as luzes da cidade.
        </Atividade>
        <Atividade>
          Experimente uma sessão de cinema ao ar livre com amigos em uma noite estrelada.
        </Atividade>
        <Atividade>
          Participe de festivais culturais noturnos que celebram música, dança e arte.
        </Atividade>
        <Atividade>
          Faça uma fogueira e desfrute de histórias e marshmallows assados durante um acampamento.
        </Atividade>
        <Atividade>
          Jogue jogos de tabuleiro com a família e amigos em noites aconchegantes.
        </Atividade>
        <Atividade>
          Mergulhe na leitura de um livro emocionante ou conte histórias para as crianças antes de dormir.
        </Atividade>
        <Atividade>
          Aproveite a tranquilidade noturna para meditar e praticar o autocuidado.
        </Atividade>
      </AtividadesContainer>
    </ModoDiaNoiteContainer>
  );
}

export default ModoDiaNoite;