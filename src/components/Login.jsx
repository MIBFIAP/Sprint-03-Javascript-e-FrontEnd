import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
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

  @media (max-width: 660px) {
    width: 200px;
  }
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
  const { handleSubmit, control, reset } = useForm();

  const handleLogin = (formData) => {
    if (formData.username === 'usuario123' && formData.password === 'senha12345') {
      localStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('isLoggedIn', 'true');
      alert('Login bem-sucedido!');
      reset(); // Limpa o formulário após o envio
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <LoginContainer>
      <h2>Página de Login</h2>
      <LoginBox>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputField
                  type="text"
                  placeholder="Nome de usuário"
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputField
                  type="password"
                  placeholder="Senha"
                  {...field}
                />
              )}
            />
          </div>
          <div>
            <LoginButton type="submit">Login</LoginButton>
          </div>
        </form>
      </LoginBox>
    </LoginContainer>
  );
}

export default Login;