import styled from "styled-components";


export const FormStyle = styled.section`
background-color: white;
border-radius: 5px;
width: 656px;
height: 535px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
width: 402px;
height: 535px;
}
` 


export const FormContainer = styled.div`
display: flex;
gap: 24px;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin: 3em;
@media screen and (max-width: 768px) {
width: 272px;
gap:24px;
}

` 

