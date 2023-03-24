import { Button, Title } from "../../elements"
import Textarea from "../../elements/textarea/Textarea"
import { DenounceForm, DenounceStyle, Info } from "./DenounceStyle"


const Denounce = () => {
    return (
        <>
            <DenounceStyle>
                <Info>
                    <h2>Canal ético</h2>
                    <p>Ponemos a disposición este espacio para realizar consultas y denuncias, de manera <span>confidencial y anónima</span>, respecto a conductas como <span>maltrato, acoso, discriminación u otras</span> que vayan en desmedro de colaboradores(as) o personas externas a Enlace Urbano, siempre y cuando estén relacionadas al trabajo de la organización.</p>

                    <p>Contáctanos a través de este formulario, que será revisado de acuerdo a nuestros protocolos por el comité de ética interno.</p>


                </Info>
                <DenounceForm>
                    <Title label={"Denuncia"}></Title>
               <Textarea placeholder={"Escribe aquí tu denuncia anónima y confidencial."}/>
                    <Button label={"Enviar"}></Button>
                </DenounceForm>
            </DenounceStyle>
        
        </>
    )

}
export default Denounce