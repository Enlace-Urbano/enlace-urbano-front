import { CardContainer } from './BlueCardStyle'

interface CardProps {
    ptag: React.ReactNode
    marginT: number
    marginB: number
    padding: number
}

const BlueCard: React.FC<CardProps> = (props: CardProps) => {
    return (
        <CardContainer marginT={props.marginT} marginB={props.marginB} padding={props.padding}>
            <div>
                {props.ptag}
            </div>
        </CardContainer>
    )
}
export default BlueCard