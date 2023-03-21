import { HeroStyle } from './HeroStyle'
import videoHero from '../../assets/videoHero.mp4'

const Hero = () =>  {

    return (
    <>
    <HeroStyle>
        <video src={videoHero} autoPlay loop></video>
        <div>
            <h1> Innovación social para una mejor habitabilidad y calidad de vida de las comunidades.</h1>
        </div>
    </HeroStyle>    
    </>
    )
    
}
export default Hero

