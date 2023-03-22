import { HomeCardContainer, HomeCardStyle } from './HomeCardStyle'
import pic1 from '../../assets/pic1.png'
import { BorderButton } from '../index'

interface CardProps {
    color: string
    h1label: string
    plabel: string
    lettercolor: string
    img: string
}

const HomeCard: React.FC<CardProps> = ({ h1label, plabel, lettercolor, color, img }) => (
    <>
        <HomeCardContainer>
            <img src={img} alt="foto" />

            <HomeCardStyle lettercolor={lettercolor} color={color} >
                <h1>{h1label}</h1>
                <p>{plabel}</p>
                <BorderButton label={'Ver más'} />
            </HomeCardStyle>
        </HomeCardContainer>
    </>
)

export default HomeCard