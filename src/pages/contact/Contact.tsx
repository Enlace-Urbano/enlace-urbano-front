import { Form } from "../../components/index"
import { ContactForm, ContactStyle, Info } from "./ContactStyle"
import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { Banner, Button, Input, Title } from "../../elements/index";
import Textarea from "../../elements/textarea/Textarea";

const Contact = () => {
    return (
        <>
            <Banner label={"Reconocemos el enlace indisoluble entre el individuo y su entorno, tanto físico como social."} label2={""}></Banner>
            <ContactStyle>
                <Info>
                    <h2>Sé parte del cambio ¡involúcrate!
</h2>
                    <p>Si quieres hablar con nuestro equipo, conversar sobre lo que
                        hacemos, si te gustaría trabajar con nosotros o tienes una idea
                        innovadora, puedes ubicarnos acá:</p>
                    <span>  
                        <a>
                        <ImPhone />
                        <p>+556465455664</p>
                        </a>
                        <a>
                            <IoMail />
                            <p>enlace@urbano.org</p>
                        </a>
                        <p>Carlos Antúnez 2025, Oficina 404. Providencia, Región Metropolitana.</p>
                    </span>

                </Info>
                <ContactForm>
                    <Title label={"Contáctanos"}></Title>
                    <Input  placeholder='Nombre'/>     
                    <Input  placeholder='Correo electrónico'/>
               <Textarea placeholder={"Escribe aquí tu mensaje."}/>
                    <Button label={"Enviar"}></Button>
                </ContactForm>

            </ContactStyle>
        </>
    )

}
export default Contact