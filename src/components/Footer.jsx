import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 5vh; /* Defina uma altura mínima para preencher a tela inteira */
  position: relative; /* Adicione esta linha para posicionar o footer corretamente */
`;

const FooterContainer = styled.footer`
  background-color: #203920;
  color: #ffffff;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  flex: 1;
  text-align: left;
`;

const Title = styled.h3`
  color: #ffd024;
`;

const TitleNatureza = styled.h3`
  color: #ffffff;
  margin-top: -50px;
  margin-left: 20px;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin: 10px 0;
`;

function Footer() {
  return (
    <PageContainer>
      {/* Conteúdo da página */}
      <FooterContainer>
        <Column>
          <TitleNatureza>NaturezaDescoberta</TitleNatureza>
        </Column>
        <Column>
          <Title>Explorar Trilhas</Title>
          <Link href="#">Mapa do Mundo</Link>
          <Link href="#">Explorar por Fotos</Link>
          <Link href="#">Todas as Atividades e Países</Link>
        </Column>
        <Column>
          <Title>Sobre NaturezaDescoberta</Title>
          <Link href="#">Sobre nós</Link>
          <Link href="#">Membros da Comunidade</Link>
          <Link href="#">Central de ajuda</Link>
        </Column>
        <Column>
          <Title>Serviços</Title>
          <Link href="#">Premium</Link>
          <Link href="#">Promova seu negócio</Link>
          <Link href="#">Promova suas trilhas</Link>
        </Column>
      </FooterContainer>
    </PageContainer>
  );
}

export default Footer;