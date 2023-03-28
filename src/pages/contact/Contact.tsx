import { Form } from "../../components/Index"
import { ContactForm, ContactStyle, Info } from "./ContactStyle"
import { IoMail } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { Banner, Button, Input, Title } from "../../elements/Index";
import Textarea from "../../elements/textarea/Textarea";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (form.current) {
      emailjs.sendForm('service_xhgd2at', 'template_14pt2qq', form.current, 'wz3DnBPyrWrKO0bTF')
        .then((result) => {
            console.log(result.text);
            alert('Su mensaje ah sido enviado');
        }, (error) => {
            console.log(error.text);
            alert('Lo sentimos, ha habido un error. Vuela a intentarlo');
        });
    };
}
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
                <ContactForm ref={form} onSubmit={sendEmail}>
                    <Title label={"Contáctanos"}></Title>
                    <Input type="text" name="user_name" placeholder='Nombre'/>     
                    <Input  type="email" name="user_email" placeholder='Correo electrónico'/>
               <Textarea name="message" placeholder={"Escribe aquí tu mensaje."}/>
                    <Button type="submit" label={"Enviar"}></Button>
                </ContactForm>

            </ContactStyle>
        </>
    )
}
export default Contact