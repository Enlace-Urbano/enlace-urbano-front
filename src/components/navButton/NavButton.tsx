import { NavButtonStyle} from './NavButtonStyle'

interface ButtonProps  {
    label: string;
    color: string
  }

 const NavButton: React.FC<ButtonProps> = ({ label, color = '#007bff' }) => ( 
   
        <>
        <NavButtonStyle color={color} > {label} </NavButtonStyle>
        </>
    )
    

export default NavButton