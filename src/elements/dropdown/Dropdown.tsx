import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DropdownStyle, Line } from './DropdownStyle';

interface DropdownProps {
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
}

const Dropdown = ({ options, onSelect }: DropdownProps) => {
  return (
    <>
      <DropdownStyle>
        <ul>
          {options.map(({ label, value }, index) => (
            <li key={index}>
              <Link to={value} style={{ textDecoration: 'none', color: 'var(--color-black)' }} onClick={() => onSelect(value)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="svg-container">
          <Line />
          <div>
            <a href="https://www.linkedin.com/company/enlace-urbano/"><BsLinkedin /></a>
            <a href="https://www.instagram.com/enlace.urbano/?hl=es"><AiFillInstagram /></a>
          </div>
        </div>
      </DropdownStyle>
    </>
  );
};

export default Dropdown;
