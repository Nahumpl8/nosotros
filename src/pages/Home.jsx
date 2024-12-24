import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Deals from '../components/Deals'
import Clinic from '../components/Clinic'
import SeccionMensaje from '../components/SeccionMensaje'
import Secciones from '../components/Secciones'
import Footer from '../components/Footer'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    & p:nth-child(1) {
        font-size: 2rem;
        font-weight: bold;
        color: #FCCEAA;
    }

    @media (max-width: 768px) {
        text-align: center;
        align-items: center;
        & p:nth-child(1) {
            font-size: 1.5rem;
        }
    } 

`







function Home() {
    return (
        <Container>
            <Header />
            <SectionSchedule>
                <Subtitle>
                    <p>Claudia &</p>
                    <p>Nahum</p>
                </Subtitle>
                <Schedule>
                    <Top>
                        <p>"Hace 7 años que nos conocimos y desde ese momento algo dentro de nosotros se sintió especial, ha sido una aventura llena de grandes aprendizajes, crecimiento pero sobretodo mucho amor, es como vivir en una luna de miel eterna"</p>
                        <p><span>- Nahum</span></p>
                    </Top>
                </Schedule>
            </SectionSchedule>
            <Deals />
            <Clinic />
            <SeccionMensaje />
            <Secciones />
            <Footer />
        </Container>
    )
}

export default Home