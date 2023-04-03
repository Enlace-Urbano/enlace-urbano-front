import styled from "styled-components";

export const NotFoundStyle = styled.section`
width: 100%;
height: calc(100vh - 307px);
background-color: var(--color-green);
color: var(--color-white);
display: flex;
flex-flow: column nowrap;
justify-content: center;
padding: 4rem;

h1{
    font-size: 5rem;
    font-family: 'Calistoga', sans-serif;
    line-height: 4rem;
}

p{
    font-size: 2rem;
    margin-top: 2rem;
}
`