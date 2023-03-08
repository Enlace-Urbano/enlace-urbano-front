import { Menu, Navigation, NavStyle, TopNav } from './NavStyle'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import logoEnlace from '../../assets/logoEnlace.png';
import { NavButton } from '../../components/index';


const Nav = () =>  {

    return (
    <>
    <NavStyle>
        <TopNav>
            <div>
                <a href="https://www.linkedin.com/company/enlace-urbano/"><BsLinkedin/></a>
                <a href="https://www.instagram.com/enlace.urbano/?hl=es"><AiFillInstagram/></a>
            </div>
           <ul>
            <li> ENG </li> 
            | 
            <li> ESP </li>
           </ul>
        </TopNav>
        <Navigation>
            <img src={logoEnlace} alt="Logo" />
            <div className='buttons'>
                <NavButton label={'Involúcrate'} color={'#80DBCC'}  />
                <NavButton label={'Dona ahora'} color={'#00B899'}  />
            </div>
            <span><RxHamburgerMenu/></span>
        </Navigation>
        <Menu>
            <ul>
                <li>Proyectos</li>
                <li>¿Qué hacemos?</li>
                <li>Nosotros</li>
                <li>Equipo</li>
                <li>Contáctanos</li>
            </ul>
            <div className='buttons'>
                <NavButton label={'Involúcrate'} color={'#80DBCC'}  />
                <NavButton label={'Dona ahora'} color={'#00B899'}  />
            </div>
        </Menu>
    </NavStyle>
        
    </>
    )
    
}
export default Nav