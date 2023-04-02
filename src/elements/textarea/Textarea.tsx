import { InputHTMLAttributes } from "react";
import { TextareaStyle } from "./TextareaStyle"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    name: string;
  }
const TextArea: React.FC<Props> = ({ placeholder, name}) => {
    return (
        <>
            <TextareaStyle name={name} placeholder={placeholder}>
              
            </TextareaStyle>
        
        </>
    )

}
export default TextArea