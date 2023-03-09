import { TitleStyle} from './TitleStyle'

interface TitleProps  {
    label: string;
  }

  

  const Title: React.FC<TitleProps> = ({ label }) => ( 
   
    <>
    <TitleStyle>
        <h1>{label} </h1> 
    </TitleStyle>
    </>
)


export default Title