import { Menu, Navigation, NavStyle, TopNav } from './NavStyle'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import logoEnlace from '../../assets/logoEnlace.png';
import { Dropdown, NavButton } from '../../elements/index';
import { useState } from 'react';


const Nav = () =>  {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSelect = (value: string) => {
      setIsDropdownOpen(false);
    };
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
                <NavButton label={'Involúcrate'} color={'#00B899'}  />
            </div>
            <span><RxHamburgerMenu onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
           
            </span>
        </Navigation>
        
        <Menu>
            <ul>
                <li>Proyectos</li>
                <li>¿Qué hacemos?</li>
                <li>Nosotros</li>
                <li>Contáctanos</li>
            </ul>
            <div className='buttons'>
                <NavButton label={'Involúcrate'} color={'#00B899'}  />
            </div>
        </Menu>
    {isDropdownOpen && (
        <Dropdown
          options={[
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