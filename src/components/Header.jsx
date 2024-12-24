import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  color: white;
  background-color: #f8f8f8;
  position: relative;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
  color: #5F7560;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-around;
  gap: 20px;
  background-color: #5F7560;
  padding: 10px 15px;
  color: #f8f8f8;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #f8f8f8;
    color: #5F7560;
    padding: 20px;
    gap: 10px;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    border-radius: 0;
    text-align: center;
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
    display: none;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  cursor: pointer;
`;

const MenuOption = styled.div`
  margin: 0 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.6rem;
  color: #f8f8f8;

  @media (max-width: 768px) {
    margin: 10px 0;
    color: #5F7560;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  color: #f8f8f8;
  background-color: #C0A080;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 15px;
  }
`;

const ButtonResponsive = styled(Button)`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    margin-left: 20px;
    color: #C0A080;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Left>
        <Title>Nosotros ❤️</Title>
      </Left>
      <HamburgerIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <Center open={menuOpen}>
        <Link to="/" style={{ textDecoration: 'none', color: '#f8f8f8' }}>
          <MenuOption onClick={toggleMenu}>Inicio</MenuOption>
        </Link>
        <Link to="/historia" style={{ textDecoration: 'none', color: '#f8f8f8' }}>
          <MenuOption onClick={toggleMenu}>Historia</MenuOption>
        </Link>

        <Link to="/viajes" style={{ textDecoration: 'none', color: '#f8f8f8' }}>
          <MenuOption onClick={toggleMenu}>Viajes</MenuOption>
        </Link>
        <Link to="/restaurantes" style={{ textDecoration: 'none', color: '#f8f8f8' }}>
          <MenuOption onClick={toggleMenu}>Restaurantes</MenuOption>
        </Link>
        <Link to="/cupones" style={{ textDecoration: 'none', color: '#f8f8f8' }}>
          <MenuOption onClick={toggleMenu}>Cupones</MenuOption>
        </Link>
        <Link to="/mensajes" style={{ textDecoration: 'none', color: '#f8f8f8' }}>
          <MenuOption onClick={toggleMenu}>Mensajes</MenuOption>
        </Link>

      </Center>
      <Right>
        <Link to="/mensajes" style={{ textDecoration: 'none', color: '#f8f8f8', backgroundColor: '#C0A080', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          <MenuOption onClick={toggleMenu}>Escribir mensaje</MenuOption>
        </Link>
      </Right>
    </Container>
  );
}

export default Header;
