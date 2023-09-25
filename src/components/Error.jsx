import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ff4500; /* Cor laranja */
`;

const ErrorDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorMessage>Desculpe, mas não encontramos a página que você solicitou (404)</ErrorMessage>
      <ErrorDescription>
        Parece que algo deu errado. Por favor, verifique o URL ou retorne à página inicial.
      </ErrorDescription>
    </ErrorContainer>
  );
}

export default Error