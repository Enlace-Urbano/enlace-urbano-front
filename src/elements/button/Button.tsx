import { ButtonStyle } from './ButtonStyle'

interface ButtonProps {
    label: string;
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => (
    <>
        <ButtonStyle> {label} </ButtonStyle>
    </>
)

export default Button