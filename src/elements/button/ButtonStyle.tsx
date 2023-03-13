import styled from "styled-components";

export const ButtonStyle = styled.button`
background-color: black;
color: white;
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
background: #95fae9;
color: black;
border-radius: 5px;

}

@media screen and (max-width: 768px) {
height: 60px;
width: 50%;
font-size: 16px;
}
`


