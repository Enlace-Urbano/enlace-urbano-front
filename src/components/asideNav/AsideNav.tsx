import { AsideNavStyle } from './AsideNavStyle'
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from 'react-icons/ai'

const AsideNav = () => {

    return (
        <>
            <AsideNavStyle>
                <a href="https://www.linkedin.com/company/enlace-urbano/" target="blank"><IoLogoLinkedin /></a>
                <a href="https://www.instagram.com/enlace.urbano/?hl=es" target="blank"><AiFillInstagram /></a>
            </AsideNavStyle>
        </>
    )

}
export default AsideNav