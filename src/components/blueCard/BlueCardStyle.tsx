import styled from "styled-components";

export const CardContainer = styled.div<{ marginT: number, marginB: number, padding: number }>`
    width: 100%;
    height: 100vh;
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
        border-radius: 5px;
        padding: 0 0.5rem 0 0.5rem ;
    }

    @media screen and (max-width: 768px){
        height: 100vh;
        font-size: 2rem;
    }
`