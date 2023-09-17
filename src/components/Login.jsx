import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: #f4f4f4;
  color: #333;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 300px;
`;

const InputField = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  background-color: #9fcf19;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #6b8e23;
  }
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'usuario123' && password === 'senha12345') {
      localStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('isLoggedIn', 'true');
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <LoginContainer>
      <h2>Página de Login</h2>
      <LoginBox>
        <div>
          <InputField
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <InputField
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </div>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;