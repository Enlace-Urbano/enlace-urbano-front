import ActionCard from '../../elements/actionCard/ActionCard'
import { Carousel } from './CardCarouselStyle'

const CardCarousel = () => {
    return (
        <Carousel>
            <ActionCard title={'Enfoque Metodológico'} subtitle={'Modo Ecológico'} paragraph={'Metodología flexible, comprensión del territorio y el individuo dentro de un ecosistema.'} />

            <ActionCard title={'Radiografía del Territorio'} subtitle={'Técnico y Comunitario'} paragraph={' Levantamiento de información con enfoque técnico + observación + percepción de los vecinos.'} />

            <ActionCard title={'Diagnóstico Multidisciplinario'} subtitle={'Enfoque Mixto y Multiescalable'} paragraph={'Enfoque mixto que conjuga análisis cuantitativo y cualitativo. Generación y clasificación de datos sociales.'} />

            <ActionCard title={'Estrategias Colaborativas'} subtitle={'Plan de acción'} paragraph={'Líneasde trabajo definidas con la comunidad.'} />

        </Carousel>
    )
}

export default CardCarousel