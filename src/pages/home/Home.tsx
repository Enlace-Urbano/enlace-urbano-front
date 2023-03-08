import { HomeStyle } from './HomeStyle'
import { Link } from 'react-router-dom'
import { Nav } from '../../components/index'
import { Hero } from '../../elements/index'



const Home = () =>  {

    return (
    <>
    <HomeStyle>
    <Nav/>
    <Hero/>
    </HomeStyle>
        
    </>
    )
    
}
export default Home

