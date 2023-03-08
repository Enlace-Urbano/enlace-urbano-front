import { HomeStyle } from './HomeStyle'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Nav } from '../../elements/index'



const Home = () =>  {

    return (
    <>
    <HomeStyle>
    <Nav/>
        <h1>Home </h1>

    </HomeStyle>
        
    </>
    )
    
}
export default Home

