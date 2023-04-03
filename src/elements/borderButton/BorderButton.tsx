import { Link } from 'react-router-dom'
import { BorderButtonStyle } from './BorderButtonStyle'

interface ButtonProps {
    label: string;
    color: string;
    bgcolor: string;
}

const BorderButton: React.FC<ButtonProps> = ({ label, color, bgcolor }) => {
    return (
        <>

            <BorderButtonStyle color={color} bgcolor={bgcolor}>
                {label}
            </BorderButtonStyle>

        </>
    )
}
export default BorderButton