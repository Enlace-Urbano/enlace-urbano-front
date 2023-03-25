import React from 'react'
import { ActionCardStyle } from './ActionCardStyle'

interface Props {
    title: string
    subtitle: string
    paragraph: string
}

const ActionCard: React.FC<Props> = ({ title, subtitle, paragraph }) => {
    return (
        <ActionCardStyle>
            <h1><span>{title}</span></h1>
            <h2>{subtitle}</h2>
            <p>{paragraph}</p>
        </ActionCardStyle>
    )
}

export default ActionCard