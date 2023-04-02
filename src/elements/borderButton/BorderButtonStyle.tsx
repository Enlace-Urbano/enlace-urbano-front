import styled from "styled-components";

export const BorderButtonStyle = styled.button<{ color: string, bgcolor: string }>`
width: 177px;
height: 60px;
color: ${props => props.color};
background-color: ${props => props.bgcolor};
border: 3px solid var(--color-white);
border-radius: 5px;
font-size: 18px;
cursor: pointer;

@media screen and (max-width: 768px) {
    height: 60px;
    width: 50%;
    font-size: 16px;
}
`