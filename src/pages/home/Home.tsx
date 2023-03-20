import { FormContainer, HomeStyle, TextContainer } from './HomeStyle'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Form, InstagramContainer, Nav, MainCard } from '../../components/index'
import { Hero } from '../../elements/index'
import NumberCardsContainer from '../../components/numberCardContainer/NumberCardContainer'



const Home = () =>  {

    return (
    <>
    <HomeStyle>
    <Nav/>
    <Hero/>
    <MainCard color={'Orange'} h1label={'Juan Pedro'} plabel={'alsdkfjaslkdfjlasdjflsadjflsadjflkj'}/>
    <NumberCardsContainer/>
   <TextContainer>
    <h1>¿Qué hacemos?</h1>
    <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
   </TextContainer>
   <InstagramContainer />
   <FormContainer>
   <Form/>
   </FormContainer>
  
    </HomeStyle>
    <Footer/>
        
    </>
    )
    
}
export default Home

