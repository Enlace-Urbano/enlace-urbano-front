import { HomeStyle } from './HomeStyle'
import { Link } from 'react-router-dom'
import { Form, Nav } from '../../components/index'
import { Hero } from '../../elements/index'



const Home = () =>  {

    return (
    <>
    <HomeStyle>
    <Nav/>
    <Hero/>
    <Form/>
    </HomeStyle>
        
    </>
    )
    
}
export default Home

