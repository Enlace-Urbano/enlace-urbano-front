import styled from "styled-components";

export const Button = styled.button`
display: flex;
flex-flow: row-reverse nowrap;
gap: .5rem;
align-items: center;
position: absolute;
bottom: 0;
margin-bottom: 1rem;
font-size: 1rem;
border: none;
background-color: transparent;
color: var(--color-black);
z-index: 5;
cursor: pointer;

img{
    width: 1rem;
    height: 1rem;
}
`