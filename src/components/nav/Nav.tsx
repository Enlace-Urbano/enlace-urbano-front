import { Menu, Navigation, NavStyle, TopNav } from './NavStyle'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import logoBlack from '../../assets/logoBlack.svg';
import { Dropdown, NavButton } from '../../elements/index';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Nav = () =>  {

    const hideNav = useRef(null);
    useEffect(()=>{
        const el = hideNav.current
        gsap.fromTo(el, {
            y: 0,
        },{
            y: -50,
            duration: 0.01,
            scrollTrigger: {
                trigger: el,
                toggleActions: "pause none reverse pause"
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
        <TopNav >
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
            <img src={logoBlack} alt="Logo" />
            <div className='buttons'>
                <NavButton label={'Involúcrate'} color={'var(--color-green)'}  />
            </div>
            <span><RxHamburgerMenu onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
           
            </span>
        </Navigation>
        
        <Menu>
            <ul>
                <li>Inicio</li>
                <li>Proyectos</li>
                <li>¿Qué hacemos?</li>
                <li>Nosotros</li>
                <li>Contáctanos</li>
            </ul>
            <div className='buttons'>
                <NavButton label={'Involúcrate'} color={'var(--color-green)'}  />
            </div>
        </Menu>
    {isDropdownOpen && (
        <Dropdown
          options={[
            { label: 'Inicio', value: '#' },
            { label: 'Proyectos', value: '#' },
            { label: '¿Qué hacemos?', value: '#' },
            { label: 'Nosotros', value: '#' },
            { label: 'Contáctanos', value: '#' },
          ]}
          onSelect={handleSelect}
        />
            )}
    </NavStyle>
    </>
    )
    
}
export default Nav