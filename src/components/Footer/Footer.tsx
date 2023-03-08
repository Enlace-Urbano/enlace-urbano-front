import Link from 'react-router-dom'
import { IoLogoInstagram, IoLogoLinkedin,IoMailSharp } from 'react-icons/io5';
import { ImPhone,  } from 'react-icons/im';

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <span>
      <Link to="/"><p>Involúcrate</p></Link>
      <Link to="/"><p>Dona ahora</p></Link>
      <Link to="/"><IoLogoLinkedin/></Link>
      <Link to="/"><IoLogoInstagram/></Link>
      </span>
      <span>
      <Link to="/">Equipo</Link>
      <Link to="/">Nosotros</Link>
      <Link to="/">¿Qué hacemos?</Link>
      <Link to="/">Proyectos</Link>
      </span>
      <span>
      <h3>Contacto</h3>
      <div> <ImPhone/><p>+556465455664</p></div>
      <div><IoMailSharp/><p>enlace@urbano.org</p></div>
      </span>
    </footer>
  )
}

export default Footer