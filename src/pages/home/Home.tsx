import { FormContainer, HomeStyle, TextContainer } from './HomeStyle'
import { Form, InstagramContainer } from '../../components/index'
import { Hero } from '../../elements/index'
import NumberCardsContainer from '../../components/numberCardContainer/NumberCardContainer'
import quienes from '../../assets/quienes-somos.png'
import HomeCard from '../../elements/homeCard/HomeCard'


const Home = () => {

    return (
        <>
            <HomeStyle>
                <Hero />
                <HomeCard color={'var(--color-white)'} h1label={'¿Quiénes somos?'} plabel={'Enlace Urbano nace por una inquietud común: El explosivo aumento deasentamientos informales, una de las manifestaciones más rotundas yelocuentes de la pobreza multi-escalar y la desigualdad en Chile y Latinoamérica'} lettercolor={'var(--color-black)'} img={quienes} />
                <NumberCardsContainer />
                <TextContainer>
                    <h1>¿Qué hacemos?</h1>
                    <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                </TextContainer>

                <InstagramContainer />

                <FormContainer>
                    <Form />
                </FormContainer>

            </HomeStyle>
        </>
    )
}
export default Home