import { NavButtonStyle } from './NavButtonStyle'

interface ButtonProps {
    label: string;
    color: string
}

const NavButton: React.FC<ButtonProps> = ({ label, color }) => (
    <NavButtonStyle color={color} >
        {label}
    </NavButtonStyle>
)

export default NavButton