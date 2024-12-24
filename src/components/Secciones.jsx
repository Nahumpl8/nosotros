import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #5F7560;
    text-align: center;
    margin-bottom: 20px;
    padding: 40px 20px 0px 20px;
`

const Square = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`

const SquareTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: black;
`

const SquareText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
    cursor: pointer;
`




function Secciones() {
    return (
        <>
            <Title>Sube nuestros recuerdos 😍</Title>

            <Container>
                <Square>
                    <SquareTitle>📸</SquareTitle>
                    <SquareText>¡Sube nuestras fotos favoritas!</SquareText>
                </Square>
                <Square>
                    <SquareTitle>🌮</SquareTitle>
                    <SquareText>¡Sube nuestros restaurantes favoritos!</SquareText>
                </Square>
                <Square>
                    <SquareTitle>🏨</SquareTitle>
                    <SquareText>¡Sube nuestros hoteles favoritos!</SquareText>
                </Square>
                <Square>
                    <SquareTitle>🎸</SquareTitle>
                    <SquareText>¡Sube nuestros conciertos favoritos!</SquareText>
                </Square>
                <Square>
                    <SquareTitle>🏁</SquareTitle>
                    <SquareText>¡Sube nuestras metas para el futuro!</SquareText>
                </Square>
                <Square>
                    <SquareTitle>✈️</SquareTitle>
                    <Link to="/viajes"
                        style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                    >
                        <SquareText>¡Sube nuestros viajes juntos!</SquareText>

                    </Link>
                </Square>

            </Container>
        </>
    )
}

export default Secciones