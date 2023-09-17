import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 53px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  grid-column: span 2;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoSection = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

const DestaqueSection = styled.div`
  background-color: #9fcf19;
  padding: 20px;
  border-radius: 10px;
  box-shadow: -5px 5px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const DestaqueTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ParqueList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ParqueItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const ParqueImage = styled.img`
  width: 150px;
  height: 120px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100px;
    height: 80px;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Bem-vindo à NaturezaDescoberta</Title>
      <InfoSection>
        <InfoTitle>Conecte-se com a Natureza</InfoTitle>
        <InfoText>
          Descubra e explore os espaços verdes escondidos em sua cidade. Desfrute de momentos de paz e conexão com a natureza no coração da vida urbana.
        </InfoText>
      </InfoSection>
      <InfoSection>
        <InfoTitle>Promova o Bem-Estar</InfoTitle>
        <InfoText>
          Aproveite os benefícios para a saúde mental e física que os espaços verdes oferecem. Encontre locais para atividades ao ar livre, ioga, meditação e muito mais.
        </InfoText>
      </InfoSection>
      <DestaqueSection>
        <DestaqueTitle>Parques em Destaque</DestaqueTitle>
        <ParqueList>
          <ParqueItem>
            <ParqueImage src="src\assets\parque1.jpg" alt="Parque 1" />
            <div>
              <strong>Parque da Cachoeira Verde</strong>
              <p>Endereço: Rua das Flores, 123, Bairro Jardim Feliz, Cidade Alegre</p>
            </div>
          </ParqueItem>
          <ParqueItem>
            <ParqueImage src="src\assets\parque2.jpg" alt="Parque 2" />
            <div>
              <strong>Parque das Árvores Gigantes</strong>
              <p>Endereço: Avenida dos Pinheiros, 456, Bairro Arborizado, Cidade Sombria</p>
            </div>
          </ParqueItem>
          <ParqueItem>
            <ParqueImage src="src\assets\parque3.jpg" alt="Parque 3" />
            <div>
              <strong>Parque da Serenidade</strong>
              <p>Endereço: Rua da Paz, 789, Bairro Tranquilo, Cidade Calma</p>
            </div>
          </ParqueItem>
        </ParqueList>
      </DestaqueSection>
      <DestaqueSection>
        <DestaqueTitle>Perto de Você</DestaqueTitle>
        <ParqueList>
        <ParqueItem>
            <ParqueImage src="src\assets\parque4.jpg" alt="Parque 3" />
            <div>
              <strong>Parque das Borboletas Coloridas</strong>
              <p>Endereço: Rua das Cores, 321, Bairro Encantado, Cidade Alegria</p>
            </div>
          </ParqueItem>
          <ParqueItem>
            <ParqueImage src="src\assets\parque5.jpg" alt="Parque 3" />
            <div>
              <strong>Parque do Lago Azul</strong>
              <p>Endereço: Avenida das Águas, 654, Bairro Sereno, Cidade Sol</p>
            </div>
          </ParqueItem>
          <ParqueItem>
            <ParqueImage src="src\assets\parque6.jpg" alt="Parque 3" />
            <div>
              <strong>Parque das Estrelas Cadentes</strong>
              <p>Endereço: Estrada do Universo, 987, Bairro Celestial, Cidade Brilhante</p>
            </div>
          </ParqueItem>
        </ParqueList>
      </DestaqueSection>
    </HomeContainer>
  );
}

export default Home;