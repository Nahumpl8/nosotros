import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
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

const TopSpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const BottomSpace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    gap: 10px;
    font-size: 1.5rem;
    width: 100%;
    font-weight: bold;
    border-top: 2px dashed black;

`

const NameCupon = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: black;
`

const To = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const Of = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const Description = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
    & span {
        font-weight: bold;
        font-size: 1.8rem;
        text-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
`

const Caducidad = styled.p`
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
    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
    }
`

const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #5F7560;
    height: 100px;
    display: flex;
    align-items: start;
    justify-content: start;

`

const Button = styled.button`
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #5F7560;
    background-color: #5F7560;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
`

const Label = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
    color: #5F7560;
`

const Select = styled.select`
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #5F7560;
`

const SquareMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #C0A080;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`

const Fecha = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: black;
`

const Posdata = styled.p`
    font-size: 1.5rem;
    margin-top: 20px;
    text-align: center;
    color: black;
    & span {
        font-weight: bold;
        font-size: 1.8rem;
        text-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
`


function Mensajes() {


    return (
        <Container>
            <Header />
            <SectionSchedule>
                <Subtitle>
                    <p>Nuestros</p>
                    <p>Mensajes<span> 💬</span></p>
                </Subtitle>
                <Schedule>
                    <Top>
                        <p>"Verte feliz es mi más grande deseo, daría lo que fuera por ver cada segundo tu sonrisa en tu rostro, siempre lucharé por hacerte sentir la mujer más afortunada del universo entero ❤️"</p>
                        <p><span>- Nahum</span></p>
                    </Top>
                </Schedule>
            </SectionSchedule>
            <DataSpace>
                <SquareMessage>
                    <TopSpace>
                        <NameCupon>Carta de Navidad</NameCupon>
                        <To>Para: Claudia</To>
                        <Of>De: Nahum</Of>
                        <Description>
                            "Este es el primer mensaje que escribo en nuestra nueva página 😍, sé que estas epocas ya no te causan la misma emoción que antes mi niña, se que navidad se ha vuelto un día normal pero yo quise hacer que esta fuera especial con este detalle ❤️, tal vez cuando ya tengamos nuestros hijos sea mejor jiji pero por lo mientras para mi lo importante es estar a tu lado, a lado de mi familia, de mi hogar, de ti y de Winnie 🥰. Para mi no hay mejor regalo que verte feliz, enamodada de mi y que te sientas afortunada de estar en esta vida juntos!"

                            Quiero que sepas que eres el amor de mi vida, que junto a ti quiero pasar el resto de mis días, que quiero verte crecer, que quiero verte feliz, que quiero verte realizada, que quiero verte enamorada, muero por saber lo que nos depara este año que estoy seguro creceremos muchísimo, cumpliremos muchas de nuestras metas y nuestros sueños pero sobre todo será nuestro primer año de esposos juntoooos!!! 😍😍😍

                            Gracias por amarme como lo haces, eres la persona más increíble de este universo y eres un ejemplo para mi pesona, gracias por siempre apoyarme, impulsarme y hacerme sentir especial, te juro que nunca te fallaré mi niña hermosa!

                            Te amo con todo mi corazón,

                            <Posdata>
                                <span>Feliz navidad mi esposa hermosa ❤️❤️❤️</span>

                            </Posdata>
                        </Description>
                    </TopSpace>
                    <BottomSpace>
                        <Fecha>24 de Diciembre del 2024</Fecha>
                    </BottomSpace>
                </SquareMessage>
                <SquareMessage>
                    <TopSpace>
                        <NameCupon>Regalo de Navidad</NameCupon>
                        <To>Para: Claudia</To>
                        <Of>De: Nahum</Of>
                        <Description>
                            Bueno este es otro de tus regalos de Navidad, la verdad es que me costo demasiado y fue muy complicado, no quedo como me hubiera gustado pero espero que se parezca un poco al original 🥺

                            <p>
                                Sé que es algo muy importante para ti y por eso quise hacerlo, no sé si adivines que es pero es algo que perdiste en la boda y espero que podamos tenerlo de recuerdo por mucho mucho tiempo más mi niña hermosa ❤️
                            </p>
                            <p>
                                Es algo sencillo pero es con todo mi amor, para mi no hay nada más importante que tú y verte feliz, siempre lucharé por nosotros, por nuestro amor y por estar cada segundo juntos ❤️
                            </p>

                            <Posdata>
                                <span>Te amo mi niña hermosa ❤️</span>

                            </Posdata>
                        </Description>
                    </TopSpace>
                    <BottomSpace>
                        <Fecha>24 de Diciembre del 2024</Fecha>
                    </BottomSpace>
                </SquareMessage>
            </DataSpace>
            <Inputs>
                <Title>
                    ¿Quieres decirle algo a tu espos@? ❤️
                </Title>
                <Label>Nombre de quien escribe</Label>
                <Select>
                    <option value="">Selecciona tu nombre</option>
                    <option value="Nahum">Nahum</option>
                    <option value="Claudia">Claudia</option>
                </Select>
                <Label>Nombre de quien recibe</Label>
                <Select>
                    <option value="">Selecciona el nombre</option>
                    <option value="Nahum">Nahum</option>
                    <option value="Claudia">Claudia</option>
                </Select>
                <Label>Escribe tu mensaje</Label>
                <Input
                    type='text'
                    placeholder="Tu mensaje"
                />
                <Button>Enviar</Button>
            </Inputs>
            <Footer />
        </Container>
    )
}

export default Mensajes