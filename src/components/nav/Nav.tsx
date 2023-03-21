import { Menu, Navigation, NavStyle } from './NavStyle'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import logoWhite from '../../assets/logoWhite.svg';
import { Dropdown, NavButton } from '../../elements/index';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Nav = () =>  {

    const hideNav = useRef(null);
    useEffect(()=>{
        const el = hideNav.current
        gsap.fromTo(
            el, 
            {
            y: 0,
            end: 99999,
        },{
            y: -70,
            duration: 0.5,
            scrollTrigger: {
                trigger: el,
                toggleActions: "none play reverse play"
            }
        })
    },[])

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelect = (value: string) => {
      setIsDropdownOpen(false);
    };
    return (
    <>
    <NavStyle ref={hideNav}>
        
        {/* <TopNav>
            <div>
                <a href="https://www.linkedin.com/company/enlace-urbano/"><BsLinkedin/></a>
                <a href="https://www.instagram.com/enlace.urbano/?hl=es"><AiFillInstagram/></a>
            </div>
           <ul>
            <li> ENG </li> 
            | 
            <li> ESP </li>
           </ul>
        </TopNav> */}
        <Navigation>
        <Link to="/" ><img src={logoWhite} alt="Logo" /></Link>

            <Menu>
                <ul>
                    <Link to="/" ><li style={{textDecoration: 'none', color: 'var(--color-white)' }}>Inicio</li></Link>
                    <Link to="/nosotros" ><li style={{textDecoration: 'none', color: 'var(--color-white)' }}>Nosotros</li></Link>
                    <Link to="/proyectos" ><li style={{textDecoration: 'none', color: 'var(--color-white)' }}>Proyectos</li></Link>
                    <Link to="/nuestrodia" ><li style={{textDecoration: 'none', color: 'var(--color-white)' }}>Nuestro día a día</li></Link>
                    <Link to="/servicios" ><li style={{textDecoration: 'none', color: 'var(--color-white)' }}>Servicios</li></Link>
                </ul>
                {/* <div className='buttons'>
                    <NavButton label={'Involúcrate'} color={'#00B899'}  />
                </div> */}
            </Menu>

            <div className='buttons'>
            <Link to="/contactanos" >
                <NavButton label={'Contáctanos'} color={'#00B899'}  />
            </Link> 
            </div>
            <span><RxHamburgerMenu onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
           
            </span>
        </Navigation>
        
       
    {isDropdownOpen && (
        <Dropdown
          options={[
            { label: 'Inicio', value: '/' },
            { label: 'Nosotros', value: '/nosotros' },
            { label: 'Proyectos', value: '/proyectos' },
            { label: 'Servicios', value: '/servicios' },
            { label: '¿Qué hacemos?', value: '/nuestrodia' },
            { label: 'Contáctanos', value: '/contáctanos' },
          ]}
          onSelect={handleSelect}
        />
            )}
    </NavStyle>
    </>
    )
    
}
export default Nav