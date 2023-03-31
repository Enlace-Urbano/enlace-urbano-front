import { HomeStyle } from './HomeStyle'
import { Hero } from '../../elements/Index'
import quienes from '../../assets/quienes.png'
import HomeCard from '../../elements/homeCard/HomeCard'


const Home = () => {

    return (
        <>
            <HomeStyle>
                <Hero />
                <HomeCard bgcolor={'var(--color-black)'} h1label={'¿Quiénes somos?'} plabel={'Enlace Urbano nace por una inquietud común: El explosivo aumento deasentamientos informales, una de las manifestaciones más rotundas yelocuentes de la pobreza multi-escalar y la desigualdad en Chile y Latinoamérica'} color={'var(--color-black)'} img={quienes} align={'flex-start'} />

                <HomeCard bgcolor={'var(--color-green)'} h1label={'Proyectos'} plabel={'La planificación urbana mejora la experiencia del habitar a una escala personal,priorizando la identidad social, física y cultural que definen un territorio y respaldan su constante evolución.'} color={''} img={quienes} align={'flex-end'} />

                <HomeCard bgcolor={'var(--color-blue)'} h1label={'Servicios'} plabel={'Nos centramos en crear barrios y ciudades sostenibles, por medio de un procesode diagnóstico y urbanización colaborativa, desde y para las comunidades.'} color={''} img={quienes} align={'flex-start'} />

                <HomeCard bgcolor={'var(--color-white)'} h1label={'Habla con nostoros'} plabel={'ENLACE URBANO ONG         hola@enlace-urbano.org         Carlos Antúnez 2025, Oficina 404.     Providencia, Región Metropolitana.'} color={''} img={quienes} align={'flex-end'} />
            </HomeStyle>
        </>
    )
}
export default Home