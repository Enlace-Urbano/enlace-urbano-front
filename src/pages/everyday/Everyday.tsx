import InstagramContainer from "../../components/instagramContainer/InstagramContainer";
import Banner from "../../elements/banner/Banner";
import { EverydayStyle, TextContainer } from "./EverydayStyle";

const Everyday = () => {
  return (
    <EverydayStyle>
      <TextContainer>
        <h1>¿Quieres saber más de lo que hacemos?</h1>
        <p>Mira el día a día de Enlace Urbano en nuestras redes sociales.</p>
      </TextContainer>
      <InstagramContainer />
      <Banner label={`"Las ciudades tienen la capacidad de proporcionar algo para todos, sólo porque y sólo cuando son creadas por todos."`} label2={"Jane Jacobs"} />
    </EverydayStyle>
  )
}
export default Everyday
