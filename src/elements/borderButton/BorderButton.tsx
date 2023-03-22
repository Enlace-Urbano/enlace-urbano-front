import { BorderButtonStyle} from './BorderButtonStyle'

interface ButtonProps  {
    label: string;
  }

 const BorderButton: React.FC<ButtonProps> = ({ label }) => ( 
   
        <>
        <BorderButtonStyle > {label} </BorderButtonStyle>
        </>
    )
    

export default BorderButton