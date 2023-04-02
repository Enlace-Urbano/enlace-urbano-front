import styled from "styled-components";

export const AdminProjectsStyle=styled.section` 
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
left: 20vw;
width: 80vw;
top: 5vh;
color: var(--color-black);
`   


export const AdminForm=styled.form` 
border: 2px solid black;
border-radius: 5px;
display: flex;
padding: 2rem;
width: fit-content;
height: fit-content;
gap: 2rem;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 6rem;
`

export const EditProjects=styled.div `
margin-top: 6rem;
padding: 3rem;
`
export const InputProject = styled.input`
width: 20rem;
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
}`