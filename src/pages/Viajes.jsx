import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import tailandia from '../assets/tailandia.webp'
import paris from '../assets/paris.webp'
import chiapas from '../assets/chiapas.webp'
import madrid from '../assets/madrid.webp'
import roma from '../assets/roma.webp'
import singapur from '../assets/singapur.webp'
import burdeos from '../assets/burdeos.webp'



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        gap: 10px;
    }
`
const SectionSchedule = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
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
    font-size: 12.4rem;
    font-weight: bold;
    & p:nth-child(1) {
        letter-spacing: 0.005em;
    }
    & p:nth-child(2) {
        color: #C0A080;
        letter-spacing: 0.3em;
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
            letter-spacing: 0.3em;
            margin-top: -20px;
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

const SeccionViajes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        gap: 10px;
        padding: 0px;
    }
`

const ViajesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        padding: 10px;
    }
`

const Viaje = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #F0F0F0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    & p {
        font-size: 1.8rem;
        font-weight: bold;
    }
    & span {
        font-size: 1.6rem;
        font-weight: bold;
        color: #C0A080;
    }
    @media (max-width: 768px) {
        gap: 5px;
        padding: 10px;
        & p {
            font-size: 1.6rem;
        }
        & span {
            font-size: 1.4rem;
        }
    }
`

const Inputs = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        padding: 0px;
        align-items: center;
    }
`


const InputsViajes = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    & h1 {
        font-size: 2.4rem;
        font-weight: bold;
    }
    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        padding: 20px;
    }
    & input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #C0A080;
    }
    & button {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #C0A080;
        background-color: #C0A080;
        color: white;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
    }


    @media (max-width: 768px) {
        gap: 10px;
        padding: 0px;
        width: 100%;
        & h1 {
            font-size: 1.8rem;
        }
        & form {
            gap: 10px;
            padding: 10px;
        }
        & input {
            padding: 5px;
        }
        & button {
            padding: 5px;
            width: 100%;
        }
    }
`

const IngresaViaje = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 20px;
    & h1 {
        font-size: 2.4rem;
        font-weight: bold;
    }
    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        padding: 20px;
    }
    & input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #C0A080;
    }
    & button {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #C0A080;
        background-color: #C0A080;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        gap: 10px;
        width: 100%;
        padding: 0px;
        & h1 {
            font-size: 1.8rem;
        }
        & form {
            gap: 10px;
            padding: 10px;
        }
        & input {
            padding: 5px;
        }
        & button {
            padding: 5px;
            width: 100%;
        }
    }
`




function Viajes() {
    return (
        <Container>
            <Header />
            <SectionSchedule>
                <Subtitle>
                    <p>Nuestros</p>
                    <p>viajes<span>✈️</span></p>
                </Subtitle>
                <Schedule>
                    <Top>
                        <p>"Cada viaje contigo es la aventura más hermosa del mundo, conocer a tu lado se ha vuelto mi pasión y muero por saber que nos depara el futuro y los cientos de destinos que conoceremos ❤️"</p>
                        <p><span>- Nahum</span></p>
                    </Top>
                </Schedule>
            </SectionSchedule>
            <SeccionViajes>
                <h1>Revive todos nuestros viajes o crea uno nuevo que hayamos hecho recientemente</h1>
                <ViajesContainer>
                    <Viaje>
                        <img src={tailandia} alt="Tailandia" />
                        <p>Tailandia</p>
                        <span>2024</span>
                    </Viaje>
                    <Viaje>
                        <img src={paris} alt="Paris" />
                        <p>Paris</p>
                        <span>2024</span>
                    </Viaje>
                    <Viaje>
                        <img src={chiapas} alt="Chiapas" />
                        <p>Chiapas</p>
                        <span>2022</span>
                    </Viaje>
                    <Viaje>
                        <img src={madrid} alt="Madrid" />
                        <p>Madrid</p>
                        <span>2023</span>
                    </Viaje>
                    <Viaje>
                        <img src={roma} alt="Roma" />
                        <p>Roma</p>
                        <span>2024</span>
                    </Viaje>
                    <Viaje>
                        <img src={singapur} alt="Singapur" />
                        <p>Singapur</p>
                        <span>2024</span>
                    </Viaje>
                    <Viaje>
                        <img src={burdeos} alt="Burdeos" />
                        <p>Burdeos</p>
                        <span>2024</span>
                    </Viaje>
                </ViajesContainer>
            </SeccionViajes>
            <Inputs>
                <IngresaViaje>
                    <h1>¿A dónde fuimos esta vez? 😍😍😍</h1>
                    <form>
                        <input type="text" placeholder="Nombre del lugar principal" />
                        <input type="text" placeholder="Más lugares para el viaje" />
                        <input type="text" placeholder="Año" />
                        <input type="text" placeholder="Comentarios" />
                        <input type="file" />
                        <input type="file" />
                        <input type="file" />
                        <input type="file" />
                        <input type="file" />
                        <input type="file" />
                        <button>Enviar</button>
                    </form>
                </IngresaViaje>
                <InputsViajes>
                    <h1>¿Quieres que vayamos a algún lugar en especial? 🥰✈️</h1>
                    <form>
                        <input type="text" placeholder="Nombre del lugar principal" />
                        <input type="text" placeholder="Más lugares para el viaje" />
                        <input type="text" placeholder="Año" />
                        <button>Enviar</button>
                    </form>

                </InputsViajes>
            </Inputs>


            <Footer />

        </Container>
    )
}

export default Viajes