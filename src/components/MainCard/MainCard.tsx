import { CardButton, MainCardContainer, MainCardStyle} from './MainCardStyle'
import  pic1  from '../../assets/pic1.png'
import { Button } from '../../elements/index'

interface CardProps  {
    color: string
    h1label: string
    plabel:string
    lettercolor:string
    src:string
  }

 const MainCard: React.FC<CardProps> = ({h1label, plabel, lettercolor , color , src}) => ( 
   
        <>
        <MainCardContainer>

        <MainCardStyle lettercolor={lettercolor} color={color} > 
        <h1>{h1label}</h1>
        <p>{plabel}</p>
        <CardButton > Ver más </CardButton>
        </MainCardStyle>
        <img src= {src} alt="foto" />
        </MainCardContainer>

        </>
    )
    

export default MainCard