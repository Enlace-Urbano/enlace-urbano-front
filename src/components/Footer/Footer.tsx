import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { FooterStyle } from "./FooterStyle";

type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterStyle>
      <span>
        <Link to="/Involucrate">
          <p>Involúcrate</p>
        </Link>
        <Link to="/Donate">
          <p>Dona ahora</p>
        </Link>
        <div>
          <Link to="/Linkedin">
            <IoLogoLinkedin />
          </Link>
          <Link to="/Instagram">
            <IoLogoInstagram />
          </Link>
        </div>
      </span>
      <span>
        <Link to="/Team">Equipo</Link>
        <Link to="/Nosotros">Nosotros</Link>
        <Link to="/About">¿Qué hacemos?</Link>
        <Link to="/Proyectos">Proyectos</Link>
      </span>
      <span>
        <h3>Contacto</h3>
        <div>
          <ImPhone />
          <p>+556465455664</p>
        </div>
        <div>
          <IoMail/>
          <p>enlace@urbano.org</p>
        </div>
      </span>
    </FooterStyle>
  );
};

export default Footer;
