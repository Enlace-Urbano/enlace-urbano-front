import { InputHTMLAttributes } from 'react';
import { CardContainer, NumberCardStyle } from './NumberCardStyle'

interface NumberCardProps  {
    label: string;
    number: number;
    color: string;
  }



  const NumberCard: React.FC<NumberCardProps> = ({ label, number,  color = 'black' }) => ( 
   
    <>

    
    <NumberCardStyle color={color} >
        <CardContainer color={color}>
        <h1>{number} </h1> 
        <h3>{label} </h3>
        </CardContainer>
       
    </NumberCardStyle>
    </>
)

export default NumberCard