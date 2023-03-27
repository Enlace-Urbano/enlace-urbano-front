import ActionCard from '../../elements/actionCard/ActionCard'
import { Carousel } from './CardCarouselStyle'

const CardCarousel = () => {
    return (
        <Carousel>
            <ActionCard title={'Enfoque Metodológico'} subtitle={'Modo Ecológico'} paragraph={'Mejorar la calidad de vida en nuestros territorios y comunidades, vinculando a todos los actores que lo pueden hacer posible.'} />

            <ActionCard title={'Radiografía del Territorio'} subtitle={'Técnico y Comunitario'} paragraph={'Levantamiento deinformación conenfoque técnico +observación +percepción de losvecinos.'} />

            <ActionCard title={'Diagnóstico Multidisciplinario'} subtitle={'Enfoque Mixto y Multiescalable'} paragraph={'Enfoque mixtoque conjuga análisiscuantitativo y cualitativo.Generación y clasificación de datos sociales'} />

            <ActionCard title={'Estrategias Colaborativas'} subtitle={'Plan de acción'} paragraph={'Líneasde trabajo definidascon la comunidad.'} />

        </Carousel>
    )
}

export default CardCarousel