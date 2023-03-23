import { BgImage, MainCardStyle } from './MainCardStyle'

interface CardProps {
    color: string
    h1label: string
    plabel: string
    lettercolor: string
    direction: string
    bgimage: string
}

const MainCard: React.FC<CardProps> = ({ h1label, plabel, lettercolor, color, direction, bgimage }) => (
    <>
        <MainCardStyle lettercolor={lettercolor} color={color} direction={direction}>
            <div>
                <h1>{h1label}</h1>
                <p>{plabel}</p>
            </div>

            <BgImage bgimage={bgimage}>
            </BgImage>
        </MainCardStyle>
    </>
)

export default MainCard