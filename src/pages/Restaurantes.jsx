import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

import sumoMadrid from '../assets/sumoMadrid.jpg'
import ganbara from '../assets/ganbara.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const SectionSchedule = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

const Subtitle = styled.div`
    display: flex;
    flex: 1.5;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0px;
    font-size: 8.4rem;
    font-weight: bold;
    & p:nth-child(2) {
        color: #C0A080;
        margin-top: -20px;
    }
    span {
        font-size: 4.5rem;
    }

    @media (max-width: 768px) {
        flex: 1;
        font-size: 4rem;
        gap: 10px;
        & p:nth-child(1) {
            letter-spacing: 0.01em;
        }
        & p:nth-child(2) {
            color: #C0A080;
            margin-top: -20px;
        }
        & span {
                font-size: 2.5rem;
        }
    }

`

const Schedule = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    gap: 30px;
    @media (max-width: 768px) {
        flex: 1;
        gap: 10px;
        font-size: 1rem;
        text-align: center;
        align-items: center;
    }

`


const Top = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 1.4rem;
    & p:nth-child(1) {
        font-size: 2rem;
        font-weight: bold;
        color: #C0A080;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
        align-items: center;
        & p:nth-child(1) {
            font-size: 1.5rem;
        }
    }


`


const DataSpace = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
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
    & img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        object-fit: cover;
    }
    & a {
        font-size: 1.5rem;
        text-align: center;
        color: black;
    }

`

const TitleDescription = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
    font-weight: bold;
`

const SquareTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: black;
`

const RestaurantType = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const SquareText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const Prices = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const Raiting = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const BestDishes = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`



const Ubicación = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const FechaVisita = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 50%;
    padding: 20px;
    margin-top: 20px;
    & input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #5F7560;
    }
    & button {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #5F7560;
        background-color: #5F7560;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`




function Restaurantes() {
    return (
        <Container>
            <Header />
            <SectionSchedule>
                <Subtitle>
                    <p>Nuestros</p>
                    <p>Restaurantes<span> 🌮</span></p>
                </Subtitle>
                <Schedule>
                    <Top>
                        <p>"Ir a comer contigo se ha vuelto de mis pasiones más grandes, amo conocer a tu lado nuevos sabores y que me enseñes miles de nuevas cosas 😍"</p>
                        <p><span>- Nahum</span></p>
                    </Top>
                </Schedule>
            </SectionSchedule>
            <DataSpace>
                <Link
                    to="/restaurantes/1"
                    style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                >
                    <Square>
                        <img src={sumoMadrid} alt="sushiSumo"></img>
                        <TitleDescription>
                            Nombre:
                        </TitleDescription>
                        <SquareTitle>Sumo</SquareTitle>
                        <TitleDescription>
                            Tipo de comida
                        </TitleDescription>
                        <RestaurantType>Sushi</RestaurantType>
                        <TitleDescription>
                            Comentario
                        </TitleDescription>
                        <SquareText>El mejor sushi de la ciudad</SquareText>
                        <TitleDescription>
                           Precio aproximado:
                        </TitleDescription>
                        <Prices>$800-$1000/persona</Prices>
                        <TitleDescription>
                            Calificación
                        </TitleDescription>
                        <Raiting>8/10</Raiting>
                        <TitleDescription>
                            Mejores Plátillos
                        </TitleDescription>
                        <BestDishes>
                            <span>Nigiri salmón flambeado</span>
                            <span>Nigiri spanescado con trufe</span>
                            <span>Bowl de salmón</span>
                        </BestDishes>
                        <TitleDescription>
                            Ciudad
                        </TitleDescription>
                        <Ubicación>Madrid</Ubicación>
                        <TitleDescription>
                            Fecha de visita
                        </TitleDescription>
                        <FechaVisita>8/12/2023</FechaVisita>
                        <TitleDescription>
                            Link de Google
                        </TitleDescription>
                        <a href="https://www.google.com/maps/place/Sumo" target="_blank">Ver en Google Maps</a>
                    </Square>
                </Link>
                <Link
                    to="/restaurantes/1"
                    style={{ textDecoration: 'none', color: 'black', width: '100%' }}
                >
                    <Square>
                        <img src={ganbara} alt="ganbara"></img>
                        <TitleDescription>
                            Nombre:
                        </TitleDescription>
                        <SquareTitle>Ganbara</SquareTitle>
                        <TitleDescription>
                            Tipo de comida:
                        </TitleDescription>
                        <RestaurantType>Pintxos</RestaurantType>
                        <TitleDescription>
                            Comentario:
                        </TitleDescription>
                        <SquareText>El mejor pintxo de la ciudad</SquareText>
                        <TitleDescription>
                           Precio aproximado:
                        </TitleDescription>
                        <Prices>$500-$700/persona</Prices>
                        <TitleDescription>
                            Calificación
                        </TitleDescription>
                        <Raiting>9/10</Raiting>
                        <TitleDescription>
                            Mejores Plátillos
                        </TitleDescription>
                        <BestDishes>
                            <span>Pintxo de huevo con trufa</span>
                            <span>Pintxo de jamón con queso</span>
                            <span>Pintxo de bacalao</span>
                        </BestDishes>
                        <TitleDescription>
                            Ciudad
                        </TitleDescription>
                        <Ubicación>San Sebastián</Ubicación>
                        <TitleDescription>
                            Fecha de visita
                        </TitleDescription>
                        <FechaVisita>12/1/2024</FechaVisita>
                        <TitleDescription>
                            Link de Google
                        </TitleDescription>
                        <a href="https://www.google.com/maps/place/Ganbara" target="_blank">Ver en Google Maps</a>
                    </Square>
                </Link>
            </DataSpace>
            <Inputs>
                <Title>Sube nuestos restaurantes favoritos</Title>
                <input type="text" placeholder="Nombre del restaurante" />
                <input type="text" placeholder="Tipo de comida" />
                <input type="text" placeholder="Comentario" />
                <input type="text" placeholder="Precio aproximado" />
                <input type="text" placeholder="Calificación" />
                <input type="text" placeholder="Mejores platillos (separalos por comas)" />
                <input type="text" placeholder="Ciudad" />
                <input type="text" placeholder="Fecha de visita" />
                <input type="text" placeholder="Link de Google" />
                <button>Enviar</button>
            </Inputs>

            <Footer />
        </Container>
    )
}

export default Restaurantes