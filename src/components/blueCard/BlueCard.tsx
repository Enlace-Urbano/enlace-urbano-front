import { CardContainer } from './BlueCardStyle'

interface CardProps {
    ptag: React.ReactNode
}

const BlueCard: React.FC<CardProps> = (props: CardProps) => {
    return (
        <CardContainer>
            <div>
                {props.ptag}
            </div>
        </CardContainer>
    )
}
export default BlueCard