import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Container = styled.div`
    background-image: url(${"https://onedaywedding-production.up.railway.app/images/NahunClau_Preboda-43.webp"});
    background-size: cover;
    background-position: 20% 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; 
    width: 100%;
    height: 80vh;
    @media (max-width: 768px) {
        background-position: 50% 10%;
    }
`

const BottomDeals = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 30%; /* Ajusta la altura para que no ocupe toda la sección */
    padding: 20px;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        justify-content: flex-start;
        overflow-x: auto; /* Permite scroll horizontal en pantallas pequeñas */
        scroll-snap-type: x mandatory; /* Ayuda a que las cards "encajen" al hacer scroll */
        
        /* Oculta la barra de scroll en dispositivos que no lo necesiten */
        &::-webkit-scrollbar {
            display: none;
        }
    }
`

const DealCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex: 0 0 30%; /* Las cards ocupan 30% del contenedor */
    height: 150px;
    padding: 20px;
    gap: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.3); /* Ajustar opacidad para el efecto de espejo */
    backdrop-filter: blur(10px); /* Aplicar desenfoque */

    @media (max-width: 768px) {
        flex: 0 0 80%; /* Las cards ocupan 80% del contenedor en pantallas pequeñas */
        scroll-snap-align: center; /* Alinea las cards al centro al hacer scroll */
    }
`

const DealTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`

const DealText = styled.p`
    font-size: 1.4rem;
    text-align: center;
    color: black;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const DealPrice = styled.h3`
    font-size: 2rem;    
    font-weight: bold;
    color: red;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

function Deals() {
    return (
        <Container>
            <BottomDeals>
                <DealCard>
                    <DealTitle>Fotos de nuestro último viaje</DealTitle>
                    <Link to="/restaurantes"
                        style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                    >
                        <DealText>Encuentra fotos exclusivas de nuestro último viaje a Thailandia, Bali y Singapur donde vivimos la mejor e inolvidable 🍯🌙</DealText>
                    </Link>
                </DealCard>
                <DealCard>
                    <DealTitle>Encuentra los mejores lugares para comer según nosotros 😋</DealTitle>
                    <Link to="/restaurantes"
                        style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                    >
                        <DealText>
                            Busca entre nuestros lugares favoritos para comer en todos los lugares que hemos visitado. ¡Te aseguramos que no te arrepentirás! 🍔🍕🍣
                        </DealText>
                    </Link>
                </DealCard>
                <DealCard>
                    <DealTitle>Revíve con nosotros la mejor boda de la historia (la nuestra) 💍👰‍♀️🤵 </DealTitle>
                    <DealText>
                        Mira las fotos y videos de nuestra boda. ¡Te aseguramos que te encantarán tanto como a nostros! 📸🎥
                    </DealText>
                </DealCard>
            </BottomDeals>
        </Container>
    )
}

export default Deals;
