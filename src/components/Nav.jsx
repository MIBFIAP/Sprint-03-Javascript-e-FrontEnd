import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #9fcf19;
  color: #fff;
  padding: 10px;
  margin: 0;
  margin-top: 0;
`;

const Logo = styled.h1`
  margin: 0;
`;

const GreenText = styled.span`
  color: #008000;
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  margin-right: 20px;
  transition: all 0.4s ease 0s;
  max-width: 100px;

  &:hover {
    color: #ffffff;
    transform: scale(3.15);
    transform: translateY(-5px);
  }

  @media (max-width: 660px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin: 10px 0; /* Espaçamento para melhorar a legibilidade */
    flex-direction: column-reverse;
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #000000;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  background-color: #9fcf19;
  border: 1px solid #fff;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: none;

  &:hover {
    background-color: #7ca50d;
  }

  @media (max-width: 660px) {
    display: block;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #9fcf19;
  width: 100%;
  border-radius: 4px;
  z-index: 1;
`;

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 660) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <NavContainer>
      <div className="logo">
        <Logo>
          <GreenText>Natureza</GreenText>Descoberta
        </Logo>
      </div>
      <div className="navlinks">
        <NavLink to="/" isOpen={isOpen} onClick={toggleDropdown}>
          Home
        </NavLink>
        <NavLink to="/produtos" isOpen={isOpen} onClick={toggleDropdown}>
          Produtos
        </NavLink>
        <NavLink to="/blog" isOpen={isOpen} onClick={toggleDropdown}>
          Blog
        </NavLink>
        <NavLink to="/mododianoite" isOpen={isOpen} onClick={toggleDropdown}>
          Modo Dia/Noite
        </NavLink>
        <NavLink to="/login" isOpen={isOpen} onClick={toggleDropdown}>
          Login
        </NavLink>
        <DropdownButton onClick={toggleDropdown}>Menu</DropdownButton>
        <DropdownMenu isOpen={isOpen}>
          <NavLink to="/" onClick={toggleDropdown}>
            Home
          </NavLink>
          <NavLink to="/produtos" onClick={toggleDropdown}>
            Produtos
          </NavLink>
          <NavLink to="/blog" onClick={toggleDropdown}>
            Blog
          </NavLink>
          <NavLink to="/mododianoite" onClick={toggleDropdown}>
            Modo Dia/Noite
          </NavLink>
          <NavLink to="/login" onClick={toggleDropdown}>
            Login
          </NavLink>
        </DropdownMenu>
      </div>
    </NavContainer>
  );
}

export default Nav;