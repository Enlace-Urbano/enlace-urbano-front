import { HeroStyle } from './HeroStyle'
import videoHero from '../../assets/video/videoHero.mp4'

const Hero = () => {

    return (
        <>
            <HeroStyle>
                <video src={videoHero} autoPlay loop></video>
                <div>
                    <h1> Creemos que cada comunidad tiene el potencial de ser un catalizador de transformación y desarrollo urbano. </h1>
                </div>
            </HeroStyle>
        </>
    )

}
export default Hero

