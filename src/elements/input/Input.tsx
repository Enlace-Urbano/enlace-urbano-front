import { InputHTMLAttributes } from 'react';
import { InputStyle } from './InputStyle'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
  }
  

const Input: React.FC<InputProps> = ({ placeholder, type, value  }) => {
    return (
    <>

    <InputStyle placeholder={placeholder} type={type} value={value} />
    </>
    )
    
}
export default Input
