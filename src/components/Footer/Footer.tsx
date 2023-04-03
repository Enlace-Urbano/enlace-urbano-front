import { Link } from "react-router-dom";
import { ImPhone } from "react-icons/im";
import logoBlack from '../../assets/svg/logoBlack.svg';
import { FooterBottom, FooterStyle, Social, SocialContainer } from "./FooterStyle";
import { IoLogoLinkedin, IoLogoFacebook, IoMail, IoLogoVimeo } from "react-icons/io5";
import { AiFillInstagram } from 'react-icons/ai'

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <FooterStyle>
        <span>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/nuestrodia">
            <p>Nuestro día a día</p>
          </Link>
          <Link to="/nosotros">
            Nosotros
          </Link>
        </span>
        <span>
          <Link to="/contactanos">Contáctanos</Link>
          <Link to="/canaletico">Canal ético</Link>
          <Social>
            <p>Sígenos en redes sociales</p>
            <SocialContainer>
              <a href="https://www.linkedin.com/company/enlace-urbano/"><IoLogoLinkedin /></a>
              <a href="https://www.instagram.com/enlace.urbano/?hl=es"><AiFillInstagram /></a>
              <a href="https://www.facebook.com/people/enlaceurbano/100086536375505/"><IoLogoFacebook /></a>
              <a href="https://vimeo.com/enlaceurbano"><IoLogoVimeo /></a>
            </SocialContainer>
          </Social>
        </span>
        <span>
          <h3>Contacto</h3>
          <div>
            <ImPhone />
            <p>+556465455664</p>
          </div>
          <div>
            <IoMail />
            <a>hola@enlace-urbano.org </a>
          </div>
          <p>ENLACE URBANO ONG <br />
            Carlos Antúnez 2025, Oficina 404.  <br />
            Providencia, Región Metropolitana.</p>
        </span>
      </FooterStyle>
      <FooterBottom>
        <img src={logoBlack} alt="Logo" />
        <div>
          <p> © Copyright Enlace Urbano 2023</p>
        </div>
      </FooterBottom>
    </>
  );
};
export default Footer;
