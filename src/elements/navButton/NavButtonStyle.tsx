import styled from "styled-components";

export const NavButtonStyle = styled.button<{ color: string }>`
background-color: ${props => props.color};
height: 80px;
width: 192px;
border: none;
border-radius: 5px;
font-size: 18px;
color: white;

&:focus{
    transition: 0.2s;
    background-color:  #579288;
}

&:hover {
background: #95fae9;
}

@media screen and (max-width: 768px) {
height: 60px;
width: 50%;
font-size: 16px;
}
`


