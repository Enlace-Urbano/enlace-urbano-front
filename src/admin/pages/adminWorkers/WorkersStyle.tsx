import styled from "styled-components";

export const WorkersStyle = styled.section`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
left: 20%;
width: 80%;
top: 5vh;
color: var(--color-black);

`

export const WorkersForm = styled.form`
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

Button {
    margin-top: 1rem;
}
@media screen and (max-width: 768px) {
width: 20em;

}

`

export const InputWorker = styled.input`
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
}

@media screen and (max-width: 768px) {
width: 272px;
}
`

export const WorkersListContainer = styled.div`
margin-top: 6rem;
height: 100vh;
`  