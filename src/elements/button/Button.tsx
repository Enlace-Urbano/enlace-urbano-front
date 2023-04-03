import { ButtonStyle} from './ButtonStyle'

interface ButtonProps  {
    label: string;
    type?: string;
    onClick?: (event: MouseEvent) => void;
  }

 const refresh = () => window.location.reload()

 const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => ( 
   
        <>
        <ButtonStyle> {label} </ButtonStyle>
        </>
    )
    

export default Button