import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    background-color: #5F7560;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        text-align: start;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #758876;
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #758876;
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
    `

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #758876;
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
`

const FooterTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #f8f8f8;
    @media (max-width: 768px) {
        font-size: 18px;
        text-align: start;
        width: 100%;
    }
`

const FooterSubtitle = styled.p`
    font-size: 16px;
    color: #ebe8e8;
    @media (max-width: 768px) {
        font-size: 14px;
        text-align: start;
        width: 100%;
    }
`

const Rigths = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    color: #ebe8e8;
    padding: 20px 0px 0px 0px;
`



function Footer() {
    return (
        <Container>
            <Left>
                <FooterTitle>Nuestra página ❤️</FooterTitle>
                <FooterSubtitle>Con el amor más puro del mundo entero 🥰</FooterSubtitle>
            </Left>
            <Center>
                <FooterTitle>Conoce más de nosotros</FooterTitle>
                <FooterSubtitle>Entra a nuestra historia para recordar nuestro amor ❤️</FooterSubtitle>
            </Center>
            <Right>
                <FooterTitle>Contáctanos</FooterTitle>
                <FooterSubtitle>Envíanos un mensaje por WhatsApp 📲</FooterSubtitle>
            </Right>
            <Rigths>
                <p>© 2024 Nahum y Claudia</p>
            </Rigths>
        </Container>
    )
}

export default Footer