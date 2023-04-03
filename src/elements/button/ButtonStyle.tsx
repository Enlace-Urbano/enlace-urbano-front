import styled from "styled-components";

export const ButtonStyle = styled.button`
width: 177px;
height: 50px;
background-color: var(--color-black);
color: var(--color-white);
border: none;
border-radius: 5px;
font-size: 18px;

&:focus{
    transition: 0.2s;
    background-color:  #579288;
}

&:hover {
background: var(--color-green);
font-weight: bold;
border-radius: 5px;
}


`


