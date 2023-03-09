import { ButtonStyle} from './ButtonStyle'

interface ButtonProps  {
    label: string;
  }

 const Button: React.FC<ButtonProps> = ({ label }) => ( 
   
        <>
        <ButtonStyle > {label} </ButtonStyle>
        </>
    )
    

export default Button