import { HomeStyle } from './HomeStyle'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Form, Nav } from '../../components/index'
import { Hero } from '../../elements/index'



const Home = () =>  {

    return (
    <>
    <HomeStyle>
    <Nav/>
        <h1>Home </h1>
    <Footer/>
    <Hero/>
    <Form/>
    </HomeStyle>
        
    </>
    )
    
}
export default Home

