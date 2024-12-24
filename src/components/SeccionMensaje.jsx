import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-top: 100px;
  position: relative;
  background-image: url(${"https://onedaywedding-production.up.railway.app/images/NahumClau_Preboda-14.webp"});
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.5); // Opacidad de fondo
  }
`;

const Message = styled.h1`
  color: #fff;
  z-index: 100;
  text-align: center;
  width: 80%;
`;

const App = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Espero que te haya gustado uno de tus regalos de navidad mi niña hermosa, vamos a usar mucho esta página para que después podamos compartir todos los momentos guardados con nuestros hijos y nuestros nietos, te amo mi esposa ❤️";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(prev => prev + fullText.charAt(index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 40); // Cambia el intervalo para ajustar la velocidad
        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <Message>{displayedText}</Message>
        </Container>
    );
};

export default App;