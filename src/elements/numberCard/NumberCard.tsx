import { Card, NumberCardStyle } from './NumberCardStyle'

interface NumberCardProps {
  label: string;
  number: number;
  color: string;
}

const NumberCard: React.FC<NumberCardProps> = ({ label, number, color = 'black' }) => (
  <>
    <NumberCardStyle color={color}>
      <Card>
        <h1>{number} </h1>
        <h3>{label} </h3>
      </Card>

    </NumberCardStyle>
  </>
)
export default NumberCard


