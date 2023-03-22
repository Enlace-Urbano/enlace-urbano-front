import styled from "styled-components";

export const ButtonStyle = styled.button`
background-color: var(--color-black);
color: var(--color-white);
height: 60px;
width: 177px;
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

@media screen and (max-width: 768px) {
height: 60px;
width: 50%;
font-size: 16px;
}
`


