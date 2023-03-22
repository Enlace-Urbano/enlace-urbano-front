import { MainCardStyle, MainCardContainer} from './MainCardStyle'
import  pic1  from '../../assets/pic1.png'

interface CardProps  {
    color: string
    h1label: string
    plabel:string
    lettercolor:string
  }

 const MainCard: React.FC<CardProps> = ({h1label, plabel, lettercolor ,color = '#007bff' }) => ( 
   
        <>
        <MainCardContainer>
        <MainCardStyle lettercolor={lettercolor} color={color} > 
        <h1>{h1label}</h1>
        <p>{plabel}</p>
        </MainCardStyle>
        <img src={pic1} alt="Nada por ahora" />
        </MainCardContainer>
        </>
    )
    

export default MainCard