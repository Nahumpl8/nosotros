import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fotoYatra from '../assets/fotoYatra.jpg'
import paracaidas from '../assets/paracaidas.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
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
        letter-spacing: 0.03em;
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

const Seccion = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    font-size: 1.5rem;
    font-weight: bold;
    @media (max-width: 768px) {
        width: 100%;
        gap: 10px;
        font-size: 1rem;
        text-align: center;
        align-items: center;
    }

`

const Rigth = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        gap: 10px;
        font-size: 1rem;
        text-align: center;
        align-items: center;
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
    @media (max-width: 768px) { 
        font-size: 3.4rem;
        gap: 5px;
        text-align: start;
        width: 100%;
        line-height: 1.5;
    }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    text-align: justify;
    gap: 20px;
    font-size: 1.5rem;
    font-weight: bold;
`

const Image = styled.img`
    width: 50%;
    height: 50%;
    object-fit: cover;
    border-radius: 20px;
    @media (max-width: 768px) {
        width: 80%;
        height: 50%;
        object-fit: cover;
        border-radius: 20px;
    }
`



function Historia() {
  return (
    <Container>
      <Header />
      <SectionSchedule>
        <Subtitle>
          <p>Nuestra</p>
          <p>historia</p>
        </Subtitle>
        <Schedule>
          <Top>
            <p>"Conocer al amor de mi vida se volvió en el momento más importante de mi vida pues ella me ha apoyado a ser quien soy y seguiré luchando por ser mejor pero sobre todo por darle la felicidad que ella me da todos los días de mi vida"</p>
            <p><span>- Nahum</span></p>
          </Top>
        </Schedule>
      </SectionSchedule>


      <Seccion>
        <Left>
          <Title>
            <p>Cápitulo I</p>
          </Title>
          <Description>
            <p>Un día soleado en Pachuca, Hgo. Claudia y Nahum se conocieron en un concierto de Sebastián Yatra. Desde ese día, sus vidas cambiaron para siempre.</p>
            <p>
              Hubo una conexión intensa desde esa noche, algo dentro de ellos mismos les decía que estaban destinados a estar juntos. A pesar de que ese día la madre de Claudia la regaño como nunca por haber llegado tarde a casa, ella sabía que valió la pena. Nahum, por otro lado, no podía creer que una chica tan hermosa como Claudia le hubiera dado la oportunidad de conocerla, su mejor amigo le preguntaba si alguna vez había sentido algo así por alguien más y él respondió que no, que Claudia era especial y que sentía que ella era la indicada.
            </p>
          </Description>
        </Left>
        <Rigth>
          <Image src={fotoYatra} alt="foto de yatra" />
        </Rigth>
      </Seccion>

      <Seccion>
        <Left>
          <Title>
            <p>Cápitulo II</p>
          </Title>
          <Description>
            <p>Llego el gran día que cambiaría sus vidas para siempre, el 20 de enero del 2018, un gran día para ser su primer día siendo novios.</p>
            <p>
              Claro que no fue fácil, pasaron muchos momentos dificiles antes de este día, Nahum, un hombre inseguro y con miedo a enamorarse, Claudia buscando un hombre que le diera la certeza de que no volvería a perder el tiempo. Pero lograron superarlo y ahora era momento de hacer más formal su amor.
            </p>
          </Description>
        </Left>
        <Rigth>
          <Image src={paracaidas} alt="praracaidas pic" />
        </Rigth>
      </Seccion>


      
      


      <Footer />
    </Container>
  )
}

export default Historia