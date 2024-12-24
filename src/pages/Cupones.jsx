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

const Cupon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${props => props.color};
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
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


function Cupones() {
    //si el of dice Nahum el background es azul claro, si dice Claudia es rosa claro

    const [nombre, setNombre] = useState('')

    useEffect(() => {
        setNombre('Nahum')
    }, [])




    return (
        <Container>
            <Header />
            <SectionSchedule>
                <Subtitle>
                    <p>Nuestros</p>
                    <p>Cupones<span> 🤩</span></p>
                </Subtitle>
                <Schedule>
                    <Top>
                        <p>"Verte feliz es mi más grande deseo, daría lo que fuera por ver cada segundo tu sonrisa en tu rostro, siempre lucharé por hacerte sentir la mujer más afortunada del universo entero ❤️"</p>
                        <p><span>- Nahum</span></p>
                    </Top>
                </Schedule>
            </SectionSchedule>
            <DataSpace>
                <Cupon color={nombre === 'Nahum' ? '#B2DFFC' : '#FCC0D0'}>
                    <TopSpace>
                        <NameCupon>
                            Ir a Six Flags
                        </NameCupon>
                        <To>
                            Para: Mi niña hermosa 😍
                        </To>
                        <Of>
                            De: {nombre}
                        </Of>
                        <Description>
                            Vamos a Six Flags cuando tu quieras mi amor, tu elige el día 😍
                        </Description>
                    </TopSpace>
                    <BottomSpace>
                        <Caducidad>
                            Caduca: 31/12/2025
                        </Caducidad>
                    </BottomSpace>
                </Cupon>
                <Cupon color={nombre === 'Nahum' ? '#B2DFFC' : '#FCC0D0'}>
                    <TopSpace>
                        <NameCupon>
                            Masaje en spa de Nahum
                        </NameCupon>
                        <To>
                            Para: La mujer más hermosa del mundo 😍
                        </To>
                        <Of>
                            De: {nombre}
                        </Of>
                        <Description>
                            Un masaje en el spa de Nahum, solo para ti mi amor 😍
                        </Description>
                    </TopSpace>
                    <BottomSpace>
                        <Caducidad>
                            Caduca: 31/1/2025
                        </Caducidad>
                    </BottomSpace>
                </Cupon>
            </DataSpace>
            <Inputs>
                <Title>
                    ¿Quieres subir un cupón para tu espos@? ❤️
                </Title>
                <Input placeholder="Nombre del cupón"></Input>
                <Input placeholder="Para quién es"></Input>
                <Input placeholder="De quién es"></Input>
                <Input placeholder="Descripción"></Input>
                <Input placeholder="Fecha de caducidad (dd/mm/aaaa)"></Input>
                <Button>Enviar</Button>
            </Inputs>
            <Footer />
        </Container>
    )
}

export default Cupones