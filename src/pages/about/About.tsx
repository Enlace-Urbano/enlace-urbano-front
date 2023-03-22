import { Nav } from "../../components"
import { AboutContainer, Heading, Purpose } from "./AboutStyle"


const About = () => {
    return (
        <AboutContainer>
            <Nav />
            <Heading>
                <h1>“Respaldamos las <br />identidades culturales que
                    <br />
                    <span>definen el territorio.”</span>
                </h1>
            </Heading>

            <Purpose>
                <div className="title">
                    <h1>Nuestro propósito</h1>
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <h2>Misión</h2>
                            <p>Mejorar la calidad de vida en nuestros territorios y comunidades, vinculando a todos los actores que lo pueden hacer posible.</p>
                        </li>
                        <li>
                            <h2>Visión</h2>
                            <p>Mejorar la calidad de vida en nuestros territorios y comunidades, vinculando a todos los actores que lo pueden hacer posible.</p>
                        </li>
                        <li>
                            <h2>Propósito</h2>
                            <p>Mejorar la calidad de vida en nuestros territorios y comunidades, vinculando a todos los actores que lo pueden hacer posible.</p>
                        </li>
                    </ul>
                </div>
            </Purpose>
        </AboutContainer>
    )

}
export default About