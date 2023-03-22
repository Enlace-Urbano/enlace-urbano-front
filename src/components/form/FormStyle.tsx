import styled from "styled-components";


export const FormStyle = styled.section`
background-color: var(--color-white);
border-radius: 5px;
width: 656px;
height: 535px;
display: flex;
margin: 0 auto;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
width: 20em;
height: 500px;

}
` 


export const FormContainer = styled.div`
display: flex;
gap: 24px;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-bottom: 3em;
@media screen and (max-width: 768px) {
}

` 

