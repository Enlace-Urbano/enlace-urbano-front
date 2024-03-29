import { HomeCardContainer, HomeCardStyle } from './HomeCardStyle'
import { BorderButton } from '../index'
import { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { Link } from 'react-router-dom';

interface CardProps {
    color: string
    bgcolor: string
    h1label: string
    plabel: string
    img: string
    align: string
    link: string
}

const HomeCard: React.FC<CardProps> = ({ h1label, plabel, color, bgcolor, img, align, link }) => {

    const handleMouse = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = handleMouse.current;

        const handleMouseEnter = () => {
            if (el !== null)
                gsap.to(el.querySelector('.bg-container'), {
                    height: '100vh',
                    duration: 1,
                    ease: 'power3.inOut'
                })
        }

        const handleMouseLeave = () => {
            if (el !== null)
                gsap.to(el.querySelector('.bg-container'), {
                    height: '0',
                    duration: 1,
                    ease: 'power3.inOut'
                })
        }

        el?.addEventListener('mouseenter', handleMouseEnter)
        el?.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            el?.removeEventListener('mouseenter', handleMouseEnter)
            el?.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <>
            <HomeCardContainer align={align}>
                <HomeCardStyle ref={handleMouse} color={color} bgcolor={bgcolor} >
                    <h1>{h1label}</h1>
                    <p>{plabel}</p>
                    <Link to={link}>
                        <BorderButton label={'Ver más'} color={'var(--color-white)'} bgcolor={'transparent'} />
                    </Link>
                    <div className="bg-container"></div>
                </HomeCardStyle>
                <img src={img} alt="foto" />
            </HomeCardContainer>
        </>
    )
}

export default HomeCard