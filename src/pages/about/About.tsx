import { MainCard, NumberCardContainer } from "../../components"
import { AboutContainer } from "./AboutStyle"
import portrait from '../../assets/portrait1.jpg'
import group2 from '../../assets/group2.jpg'
import hospicio from '../../assets/alto-hospicio2.jpg'
import group4 from '../../assets/group4.jpg'
import BlueCard from "../../components/blueCard/BlueCard"
import React from "react"


const About = () => {
    return (
        <AboutContainer>
            <MainCard color={"var(--color-white)"} h1label={"Propósito"} plabel={"Mejorar la calidad de vida en nuestros territorios y comunidades,vinculando a todos los actores que pueden hacerlo posible."} lettercolor={"var(--color-black)"} direction={"row"} bgimage={portrait} />

            <MainCard color={"var(--color-blue)"} h1label={"Misión"} plabel={"Crear y promover soluciones de habitabilidad desde y para lascomunidades, por medio del diseño estratégico y el urbanismoprogresivo, construyendo espacios inclusivos, dinámicos y colaborativos"} lettercolor={"var(--color-white)"} direction={"row-reverse"} bgimage={hospicio} />

            <MainCard color={"var(--color-green)"} h1label={"Visión"} plabel={"Proyectar ciudades integradas, diseñadas a escala humanasobre la base de un diálogo horizontal, que garanticen entornosintegrados y seguros, donde todas las personas tengan acceso a lavivienda, a servicios básicos y áreas verdes, que sean asequibles ysocialmente sostenibles"} lettercolor={"var(--color-white)"} direction={"row"} bgimage={group2} />

            <BlueCard ptag={
                <React.Fragment>
                    "Hoy más que nunca se necesitan <span>figuras activas</span> en el proceso de transformación, la mejora del espacio público y la redefinición de la habitabilidad."
                </React.Fragment>
            } />

            <h2>Nuestro Impacto</h2>
            <NumberCardContainer />

            <MainCard color={"var(--color-white)"} h1label={"Visión"} plabel={"Hacer ciudad debe traducirse en un equilibrio entre la planificaciónestablecida y las necesidades locales. A través de un formato flexible, conenfoque ecológico basado en la confianza y la participación, buscamosvisibilizar, transformar e impulsar a las comunidades locales, para crearciudades sostenibles por medio de un proceso colaborativo"} lettercolor={"var(--color-black)"} direction={"row"} bgimage={group4} />

        </AboutContainer>
    )
}
export default About