import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 5vh; /* Defina uma altura mínima para preencher a tela inteira */
  position: relative; /* Adicione esta linha para posicionar o footer corretamente */
`;

const FooterContainer = styled.footer`
  background-color: #9fcf19;
  color: #fffff;
  padding: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Footer() {
  return (
    <PageContainer>
      {/* Conteúdo da página */}
      <FooterContainer>
        <p>&copy; 2023 NaturezaDescoberta. Todos os direitos reservados.</p>
      </FooterContainer>
    </PageContainer>
  );
}

export default Footer