import { AsideNavStyle } from './AsideNavStyle'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook, IoLogoVimeo } from "react-icons/io5";
import { AiFillInstagram } from 'react-icons/ai'

const AsideNav = () => {

    return (
        <>
            <AsideNavStyle>
                <a href="https://www.linkedin.com/company/enlace-urbano/"><IoLogoLinkedin /></a>
                <a href="https://www.instagram.com/enlace.urbano/?hl=es"><AiFillInstagram /></a>
            </AsideNavStyle>
        </>
    )
    
}
export default AsideNav