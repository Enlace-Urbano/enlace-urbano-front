import ProjectsList from "../../components/projectsList/ProjectsList"
import { ProjectCardStyle, ProjectHero, ProjectMapStyle } from "./ProjectsStyle"


const Projects = () => {
    return (
        <>
            <ProjectHero >
                <ProjectMapStyle />
                <ProjectCardStyle >
                    <div>
                        <h1>Enlace Urbano hoy</h1>
                        <p>Desde fines de 2021 y hasta ahora,
                            hemos trabajado con cerca de 10.000
                            familias, desarrollando programas de
                            mejoramiento urbano y
                            acompañamiento social, con altos
                            niveles de adherencia y cohesión por
                            parte de las comunidades donde
                            estamos presentes.
                            <br />
                            <br />
                            Estamos en 7 regiones: Arica y
                            Parinacota, Tarapacá, Atacama,
                            Coquimbo, Metropolitana,
                            Araucanía, Los Ríos.
                        </p>
                    </div>
                </ProjectCardStyle >
            </ProjectHero >
            <ProjectsList />
        </>
    )
}
export default Projects