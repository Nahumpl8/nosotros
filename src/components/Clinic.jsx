import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px 80px;
    width: 100%;
    height: 100vh;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 20px 20px 0px 0px;
    margin-top: -20px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        height: 100%;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 30%;
    height: 100%;
    gap: 20px;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    @media (max-width: 768px) {
        width: 100%;
        & img {
            width: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    font-size: 5.4rem;
    font-weight: bold;
    & p:nth-child(1) {
        letter-spacing: 0.03em;
        color: #5F7560;
    }
    & p:nth-child(2) {
        color: #C0A080;
        letter-spacing: 0.3em;
        margin-top: -20px;
    }
        @media (max-width: 768px) {
        font-size: 3.4rem;
        gap: 5px;
        text-align: start;
        width: 100%;
        line-height: 1.5;
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



const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    height: 100%;
    gap: 20px 0px;
    & img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        border-radius: 20px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`


const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 1.6rem;
    color: #000;
    & p {
        text-align: justify;
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1.4rem;
        gap: 10px;
        text-align: center;
    }

`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    width: 30%;
    height: 100%;
    gap: 20px;
    & img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 20px;
    }
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }
    }
`


const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 50px;
    text-align: center;
    background-color: #5F7560;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    & p {
        color: #fff;
    }
    @media (max-width: 768px) {
        width: 60%;
        font-size: 1.5rem;
    }
`


function Clinic() {
    return (
        <Container>
            <Left>
                <Title>
                    <p>Nuestra</p>
                    <p>HISTORIA</p>
                </Title>
                <img src={"https://onedaywedding-production.up.railway.app/images/NahunClau_Preboda-7.webp"} alt="foto claudia y nahum" />
            </Left>
            <Center>
                <img src={"https://onedaywedding-production.up.railway.app/images/claudiaynahum-boda-02.webp"} alt="foto claudia y nahum" />
                <Text>
                    <p>Conocernos ha sido el regalos más grande que nos ha dado la vida pero vivir cada segundo a lado del otro es la bendición más grande que Dios nos ha dado.</p>
                    <p>Nuestra historia de amor se remota al año 2017, un 11 de Noviembre, cuando Claudia y yo nos conocimos en Pachuca, Hgo.</p>
                </Text>
            </Center>
            <Right>
                <img src={"https://onedaywedding-production.up.railway.app/images/NahunClau_Preboda-28.webp"} alt="foto claudia y nahum" />
                <Link to="/historia" style={{ textDecoration: 'none', color: '#f8f8f8', backgroundColor: '#5F7560', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '1.5rem'}}>
                        <p>Ver la historia completa</p>
                </Link>
                <Text>
                    <p>
                        Tres meses despues de conocernos, decidimos ser novios y desde entonces hemos vivido una historia de amor llena de aventuras, aprendizajes y crecimiento.
                    </p>
                    <p>Cabe recalcar que el 20 de Enero del 2018, cuando fuimos novios es un momento especial para recordar, aventarnos del paracaídas para pedirle ser mi novia ha sido los regalos más bonitos para mi, pueden ver algunas fotos de ese día <span>aquí.</span></p>
                </Text>
            </Right>
        </Container>
    )
}

export default Clinic