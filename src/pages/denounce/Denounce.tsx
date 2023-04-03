import { Button, Title } from "../../elements/index"
import Textarea from "../../elements/textarea/Textarea"
import { DenounceForm, DenounceStyle, Info } from "./DenounceStyle"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TextArea from "../../elements/textarea/Textarea";


const Denounce = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (form.current) {
            emailjs.sendForm('service_xhgd2at', 'template_9jr74ev', form.current, 'wz3DnBPyrWrKO0bTF')
                .then((result) => {
                    alert('Su mensaje ah sido enviado');
                    console.log(result.text);
                }, (error) => {
                    alert('Lo sentimos, ha habido un error. Vuela a intentarlo');
                    console.log(error.text);
                });
        };
    }
    return (
        <>
            <DenounceStyle>
                <Info>
                    <h2>Canal ético</h2>
                    <p>Ponemos a disposición este espacio para realizar consultas y denuncias, de manera <span>confidencial y anónima</span>, respecto a conductas como <span>maltrato, acoso, discriminación u otras</span> que vayan en desmedro de colaboradores(as) o personas externas a Enlace Urbano, siempre y cuando estén relacionadas al trabajo de la organización.</p>

                    <p>Contáctanos a través de este formulario, que será revisado de acuerdo a nuestros protocolos por el comité de ética interno.</p>


                </Info>
                <DenounceForm ref={form} onSubmit={sendEmail}>
                    <Title label={"Denuncia"}></Title>
               <TextArea name="message" placeholder={"Escribe aquí tu denuncia anónima y confidencial."}/>
                    <Button type="submit" label={"Enviar"}></Button>
                </DenounceForm>
            </DenounceStyle>

        </>
    )

}
export default Denounce