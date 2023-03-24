import styled from "styled-components";

export const TextareaStyle = styled.textarea`
width: 430px;
height: 10em;
border: 2px solid black;
border-radius: 5px;
outline: transparent;
font-weight: 400;
font-size: 16px;
padding: 1.5em;
text-align: justify;
background-color: transparent;
color: gray;

&:focus{
    transition: 0.2s;
    border: 2px solid var(--color-green);
}

@media screen and (max-width: 768px) {
width: 272px;
}
`