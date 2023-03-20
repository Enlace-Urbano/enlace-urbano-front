import { MainCardStyle} from './MainCardStyle'

interface CardProps  {
    color: string
    h1label: string
    plabel:string
  }

 const MainCard: React.FC<CardProps> = ({h1label, plabel, color = '#007bff' }) => ( 
   
        <>
        <MainCardStyle color={color} > 
        <h1>{h1label}</h1>
        <p>{plabel}</p>
        </MainCardStyle>
        </>
    )
    

export default MainCard