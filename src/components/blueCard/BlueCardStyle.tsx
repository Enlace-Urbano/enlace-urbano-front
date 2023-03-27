import styled from "styled-components";

export const CardContainer = styled.div<{ marginT: number, marginB: number, padding: number }>`
    width: 100%;
    height: 30rem;
    margin-top: ${props => props.marginT}rem;
    margin-bottom: ${props => props.marginB}rem;
    padding: ${props => props.padding}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-blue);
    color: var(--color-white);
    font-size: 3rem;
    text-align: center;
    
    div{
        font-family: "Calistoga";
    }
    
    span{
        width: min-content;
        white-space: nowrap;
        font-family: "Calistoga";
        color: var(--color-blue);
        background-color: var(--color-white);
    }

    @media screen and (max-width: 768px){
        height: 80vh;
        font-size: 2rem;
    }
`