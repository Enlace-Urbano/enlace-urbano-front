import { MainCardContainer, MainCardStyle} from './MainCardStyle'
import  pic1  from '../../assets/pic1.png'
import { BorderButton } from '../../elements/index'

interface CardProps  {
    color: string
    h1label: string
    plabel:string
    lettercolor:string
  }

 const MainCard: React.FC<CardProps> = ({h1label, plabel, lettercolor , color }) => ( 
   
        <>
        {/* <MainCardContainer>
        <img src= {src} alt="foto" />
        </MainCardContainer> */}

        <MainCardStyle lettercolor={lettercolor} color={color} > 
        <h1>{h1label}</h1>
        <p>{plabel}</p>
        </MainCardStyle>
        </>
    )
    

export default MainCard