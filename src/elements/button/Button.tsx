import { ButtonStyle } from './ButtonStyle'

interface ButtonProps {
    label: string;
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, type }) => (
    <>
        <ButtonStyle> {label} </ButtonStyle>
    </>
)

export default Button