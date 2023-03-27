import { InputHTMLAttributes } from "react";
import { TextareaStyle } from "./TextareaStyle"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
  }
const Denounce: React.FC<Props> = ({ placeholder}) => {
    return (
        <>
            <TextareaStyle placeholder={placeholder}>
              
            </TextareaStyle>
        
        </>
    )

}
export default Denounce