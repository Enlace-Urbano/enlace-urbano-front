import styled from "styled-components";

export const CardContainer = styled.div<{ marginT: number, marginB: number, bgcolor: string }>`
    width: 100%;
    min-height: 70vh;
    margin-top: ${props => props.marginT}rem;
    margin-bottom: ${props => props.marginB}rem;
    display: flex;
    align-items: center;
    background-color: ${props => props.bgcolor};
    color: var(--color-white);
    font-size: 2rem;
    text-align: left;
    
    div{
        width: 100%;
        font-family: "Calistoga";
        padding: 5rem;
    }
    
    span{
        width: min-content;
        font-family: "Calistoga";
        color: var(--color-blue);
    }

    @media screen and (max-width: 768px){
        height: 100vh;
        font-size: 1.5rem;

        div{
            padding: 1rem;
        }
    }
`