import { Menu, Navigation, NavStyle } from './NavStyle'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx';
import logoWhite from '../../assets/svg/logoWhite.svg';
import { Dropdown, NavButton } from '../../elements/index';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
    const hideNav = useRef(null)
    useEffect(() => {
        const el = hideNav.current
        gsap.fromTo(el, {
            y: 0,
        }, {
            y: -70,
            duration: 0.5,
            scrollTrigger: {
                trigger: el,
                toggleActions: 'none play reverse play',
            },
        })

        let prevScrollPosition = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            if (prevScrollPosition > currentScrollPosition) {
                gsap.to(el, {
                    y: 0,
                    duration: 0.5
                })
            } else {
                gsap.to(el, {
                    y: -70,
                    duration: 0.5,
                    delay: .3,
                })
            }
            prevScrollPosition = currentScrollPosition;
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleSelect = (value: string) => {
        setIsDropdownOpen(false)
    }

    return (
        <>
            <NavStyle ref={hideNav}>
                <Navigation>
                    <Link to="/" ><img src={logoWhite} alt="Logo" /></Link>

                    <Menu>
                        <ul>
                            <Link to="/" ><li style={{ textDecoration: 'none', color: 'var(--color-white)' }}>Inicio</li></Link>
                            <Link to="/nosotros" ><li style={{ textDecoration: 'none', color: 'var(--color-white)' }}>Nosotros</li></Link>
                            <Link to="/proyectos" ><li style={{ textDecoration: 'none', color: 'var(--color-white)' }}>Proyectos</li></Link>
                            <Link to="/nuestrodia" ><li style={{ textDecoration: 'none', color: 'var(--color-white)' }}>Nuestro día a día</li></Link>
                            <Link to="/servicios" ><li style={{ textDecoration: 'none', color: 'var(--color-white)' }}>Servicios</li></Link>
                        </ul>
                    </Menu>

                    <div className='buttons'>
                        <Link to="/contactanos" >
                            <NavButton label={'Contáctanos'} color={'var(--color-green)'} />
                        </Link>
                    </div>
                    <span>
                        <RxHamburgerMenu onClick={() => setIsDropdownOpen(!isDropdownOpen)} />
                    </span>
                </Navigation>

                {isDropdownOpen && (
                    <Dropdown
                        options={[
                            { label: 'Inicio', value: '/' },
                            { label: 'Nosotros', value: '/nosotros' },
                            { label: 'Proyectos', value: '/proyectos' },
                            { label: 'Nuestro día a día', value: '/nuestrodia' },
                            { label: 'Servicios', value: '/servicios' },
                        ]}
                        onSelect={handleSelect}
                    />
                )}
            </NavStyle>
        </>
    )
}
export default Nav