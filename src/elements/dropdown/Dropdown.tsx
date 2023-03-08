import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import {DropdownStyle, Line} from './DropdownStyle';

interface DropdownProps {
    options: { label: string; value: string }[];
    onSelect: (value: string) => void;
  }
  

const Dropdown = ({ options, onSelect }: DropdownProps)=>  {

    return (
    <>
  <DropdownStyle>

  <ul>
    {options.map(({ label, value }) => (
      <li key={value} onClick={() => onSelect(value)}>
        {label}
      </li>
    ))}
  </ul>

            <Line/>
            <div>
                <a href="https://www.linkedin.com/company/enlace-urbano/"><BsLinkedin/></a>
                <a href="https://www.instagram.com/enlace.urbano/?hl=es"><AiFillInstagram/></a>
            </div>
  </DropdownStyle>  
    </>
    )
    
}
export default Dropdown

