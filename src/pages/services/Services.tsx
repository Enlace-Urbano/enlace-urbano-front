import { Fragment } from "react"
import { MainCard } from "../../components"
import TextCard from "../../components/textCard/TextCard"
import group6 from "../../assets/images/group6.jpg"
import group1 from "../../assets/images/group1.jpg"
import iquique from "../../assets/images/iquique.jpg"
import hospicio from "../../assets/images/altohospicio1.jpg"

const Services = () => {
    return (
        <>
            <TextCard ptag={
                <Fragment>
                    Desde fines de 2021, hemos trabajado con cerca de <span>10.000 familias</span> desarrollando programas de <span> mejoramiento urbano y acompañamiento social. </span>
                    <br />
                    Con altos niveles de adherencia y cohesión  de las comunidades en las regiones donde estamos presentes:
                    <br />
                    <span>Arica y Parinacota, Tarapacá, Atacama, Coquimbo, Metropolitana, Araucanía, Los Ríos.</span>
                </Fragment>
            } marginT={0} marginB={0} bgcolor={"var(--color-green)"} />

            <MainCard color={"var(--color-white)"} h1label={"Consultoría y ejecución de proyectos de habitabilidad con foco social."} plabel={"Mejorar la calidad de vida en nuestros territorios y comunidades,vinculando a todos los actores que pueden hacerlo posible."} lettercolor={"var(--color-black)"} direction={"row"} bgimage={group6} padding={7} />

            <MainCard color={"var(--color-green)"} h1label={"Planificación, diseño, construcción e intervención urbana"} plabel={"Crear y promover soluciones de habitabilidad desde y para lascomunidades, por medio del diseño estratégico y el urbanismoprogresivo, construyendo espacios inclusivos, dinámicos y colaborativos"} lettercolor={"var(--color-white)"} direction={"row-reverse"} bgimage={hospicio} padding={7} />

            <MainCard color={"var(--color-white)"} h1label={"Vinculación con agentes de cambio: Estado, privados y la comunidad"} plabel={"Mejorar la calidad de vida en nuestros territorios y comunidades,vinculando a todos los actores que pueden hacerlo posible."} lettercolor={"var(--color-black)"} direction={"row"} bgimage={group1} padding={7} />

            <MainCard color={"var(--color-green)"} h1label={"Recuperación de espacios públicos y comunitarios"} plabel={"Crear y promover soluciones de habitabilidad desde y para lascomunidades, por medio del diseño estratégico y el urbanismoprogresivo, construyendo espacios inclusivos, dinámicos y colaborativos"} lettercolor={"var(--color-white)"} direction={"row-reverse"} bgimage={iquique} padding={7} />
        </>
    )
}
export default Services