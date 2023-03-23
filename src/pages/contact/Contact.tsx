import { Form } from "../../components/index"
import { ContactStyle, Info } from "./ContactStyle"
import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";

const Contact = () => {
    return (
        <>
            <ContactStyle>

                <Info>
                    <h2>Contáctanos</h2>
                    <p>Si quieres hablar con nuestro equipo, conversar sobre lo que
hacemos, si te gustaría trabajar con nosotros o tienes una idea
innovadora, puedes ubicarnos acá:</p>
                    <span>  <div>
                        <ImPhone />
                        <p>+556465455664</p>
                    </div>
                    <div>
                        <IoMail />
                        <p>enlace@urbano.org</p>
                    </div>
                    <p>Carlos Antúnez 2025, Oficina 404. Providencia, Región Metropolitana.</p>
                    </span>
                   
                </Info>
                <Form />
            </ContactStyle>
        </>
    )

}
export default Contact