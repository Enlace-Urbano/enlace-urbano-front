import { InputHTMLAttributes } from 'react';
import { InputStyle } from './InputStyle'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}


const Input: React.FC<InputProps> = ({ placeholder, type, value, name, required}) => {
  return (
    <>
      <InputStyle placeholder={placeholder} type={type} value={value} name={name} required/>
    </>
  )

}
export default Input
