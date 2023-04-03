import styled from "styled-components";

export const StatisticsStyle = styled.section` 
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
left: 20vw;
width: 80vw;
height: 100;
top: 5vh;
color: var(--color-black);

input {
width: 6rem;
height: 60px;
border: none;
border-bottom: 2px solid var(--color-highlights);
outline: transparent;
font-weight: 400;
font-size: 16px;
padding-left: 1.5em;
background-color: transparent;
color: gray;

&:invalid{
    transition: 0.2s;
    border-bottom: 2px solid red}


&:focus{
    transition: 0.2s;
    border-bottom: 2px solid black;
}
}

button{
margin-left: 6rem;
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

}
`

export const StatisticsContainer = styled.div`   
margin: 8rem;
`

