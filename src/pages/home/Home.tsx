import { HomeStyle } from './HomeStyle'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Form, Nav } from '../../components/index'
import { Hero } from '../../elements/index'
import NumberCardsContainer from '../../components/numberCardContainer/NumberCardContainer'



const Home = () =>  {

    return (
    <>
    <HomeStyle>
    <Nav/>
    <Hero/>

    <NumberCardsContainer/>
   
    <Form/>
    </HomeStyle>
    <Footer/>
        
    </>
    )
    
}
export default Home

