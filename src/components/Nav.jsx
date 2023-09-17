import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9fcf19;
  color: #fff;
  padding: 10px;
  margin: 0; /* Adicione esta linha para remover a margem */
  margin-top: 0;
`;

const Logo = styled.h1`
  margin: 0;
`;

const GreenText = styled.span`
  color: #008000; /* Verde */
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  margin-right: 20px;
  transition: all 0.4s ease 0s;
  max-width: 100px; /* Defina a largura máxima desejada */

  &:hover {
    color: #ffffff; /* Cor diferente ao passar o mouse */
    transform: scale(3.15); /* Aumenta o tamanho ao passar o mouse */
    transform: translateY(-5px);
  }
`;

function Nav() {
  return (
    <NavContainer>
      <div className="logo">
        <Logo>
          <GreenText>Natureza</GreenText>Descoberta
        </Logo>
      </div>
      <div className="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/mododianoite">Modo Dia/Noite</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </NavContainer>
  );
}

export default Nav;