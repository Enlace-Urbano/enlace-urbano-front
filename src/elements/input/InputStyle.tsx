import styled from "styled-components";

export const InputStyle = styled.input`
width: 430px;
height: 60px;
border: none;
border-bottom: 2px solid black;
outline: transparent;
font-weight: 400;
font-size: 16px;
padding-left: 1.5em;
background-color: transparent;
color: gray;

&:focus{
    transition: 0.2s;
    border-bottom: 2px solid var(--color-highlights);
}

@media screen and (max-width: 768px) {
width: 272px;
}
`