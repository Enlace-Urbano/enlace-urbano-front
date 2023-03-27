import styled from "styled-components";


export const DenounceStyle = styled.section`
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;

@media screen and (max-width: 768px) {
flex-direction: column;
}
` 

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
background-color: var(--color-green);
color: var(--color-white);
padding: 10em;
width: 50vw;
height: 100vh;
font-weight: 400;
gap: 1em;

span {
   font-weight: 900;
}

h2 {
    font-weight: 900;
}

@media screen and (max-width: 768px) {
width: 100vw;
padding: 3em;
}

` 
export const DenounceForm = styled.form`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap: 3em;
width: 50vw;
height: 100vh;
@media screen and (max-width: 768px) {
width: 80vw;
}

` 

