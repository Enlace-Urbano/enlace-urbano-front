import { CardContainer } from './TextCardStyle'

interface CardProps {
    ptag: React.ReactNode
    marginT: number
    marginB: number
    bgcolor: string
}

const TextCard: React.FC<CardProps> = (props: CardProps) => {
    return (
        <CardContainer marginT={props.marginT} marginB={props.marginB} bgcolor={props.bgcolor}>
            <div>
                {props.ptag}
            </div>
        </CardContainer>
    )
}
export default TextCard