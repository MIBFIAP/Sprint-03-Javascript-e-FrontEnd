import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  max-width: 100%;
  background-color: #9fcf19;
  color: #fff;
  padding: 15px;
  margin: 0;
`;

const Logo = styled.h1`
  margin: 0;
  flex: 1; /* Ocupa todo o espaço disponível */
  padding-left: 15px;
`;

const GreenText = styled.span`
  color: #008000;
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os NavLinks horizontalmente */
  align-items: center;
  flex: 2; /* Ocupa dois terços do espaço disponível */
  gap: 120px;

  @media (max-width: 1400px) {
    gap: 50px;
  }
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  transition: all 0.4s ease 0s;
  font-size: 18px;
  max-width: 100px;

  &:hover {
    color: #1c3300;
    transform: translateY(-3px);
  }

  @media (max-width: 660px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    margin: 10px 0; /* Espaçamento para melhorar a legibilidade */
    flex-direction: column-reverse;
  }
`;

const InputField = styled.input`
  border: none;
  border-radius: 15px;
  border: 1px solid #000;
  font-size: 18px;
  padding: 10px 15px;
  color: #000000;
  background-color: #9fcf19;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7ca50d;
    color: #ffffff;
  }
`;

const CascadingMenu = styled.div`
  display: flex;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease; /* Adicione uma transição suave */
  flex-direction: column;
  margin-top: 10px;
  background-color: #9fcf19;
  border-radius: 20px;
  border: 1px solid #000;
  margin-top: 30px;
  z-index: 1;
`;


const CascadingNavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  max-width: 100px;
  padding: 10px;
  transition: all 0.4s ease 0s;
  border-radius: 10px;

  &:hover {
    color: #1c3300;
    background-color: #7ca50d;
  }
`;

const NavLinkWithCascading = styled.div`
  display: flex;
  position: relative;

  &:hover ${CascadingMenu} {
    opacity: 1;
    visibility: visible;
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
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  justify-content: space-around;
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavContainer>
      <div className="logo">
        <Logo>
          <GreenText>Natureza</GreenText>Descoberta
        </Logo>
      </div>
      <NavLinksContainer>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/parque">Parque</NavLink>
        <NavLinkWithCascading>
          <NavLink to="/aventura">Aventura</NavLink>
          <CascadingMenu>
            <CascadingNavLink to="/trilha">Trilha</CascadingNavLink>
            <CascadingNavLink to="/caminhada">Caminhada</CascadingNavLink>
            <CascadingNavLink to="/comida">Comida</CascadingNavLink>
            <CascadingNavLink to="/acompanhamento">
              Aventuras
            </CascadingNavLink>
            <CascadingNavLink to="/bike">Bike</CascadingNavLink>
          </CascadingMenu>
        </NavLinkWithCascading>
        <NavLinkWithCascading>
          <NavLink to="/eventos">Eventos</NavLink>
          <CascadingMenu>
            <CascadingNavLink to="/calendarioeventos">Calendário</CascadingNavLink>
            <CascadingNavLink to="/atividadesarlivre">Atividades</CascadingNavLink>
            <CascadingNavLink to="/programacaotrilhas">Programação</CascadingNavLink>
            <CascadingNavLink to="/encontrosnanatureza">Encontros</CascadingNavLink>
            <CascadingNavLink to="/acontecimentosarlivre">Comunidade</CascadingNavLink>
            <CascadingNavLink to="/descobertasnanatureza">Descobertas</CascadingNavLink>
          </CascadingMenu>
        </NavLinkWithCascading>
        <NavLink to="/compartilhe">Compartilhe</NavLink>
        <InputField type="text" placeholder="Buscar Local" />{" "}
        {/* Espaço para escrever */}
        <NavLink to="/login">Login</NavLink>
        <DropdownButton onClick={toggleDropdown}>Menu</DropdownButton>
        <DropdownMenu isOpen={isOpen}>
          <NavLink to="/" isOpen={isOpen} onClick={toggleDropdown}>
            Home
          </NavLink>
          <NavLink to="/blog" isOpen={isOpen} onClick={toggleDropdown}>
            Blog
          </NavLink>
          <NavLink to="/mododianoite" isOpen={isOpen} onClick={toggleDropdown}>
            Dia/Noite
          </NavLink>
          <NavLink to="/login" isOpen={isOpen} onClick={toggleDropdown}>
            Login
          </NavLink>
        </DropdownMenu>
      </NavLinksContainer>
    </NavContainer>
  );
}

export default Nav;
