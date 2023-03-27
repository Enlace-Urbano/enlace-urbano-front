import styled from "styled-components";
import pic1 from './../../assets/pic1.png'


export const HomeStyle = styled.section`
`  

export const FormContainer = styled.section`
background-image: url(${pic1});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
padding: 5em;
@media screen and (max-width: 768px) {
 padding: 2em;
}
`  


export const TextContainer = styled.section`
padding: 15em;
display: flex;
align-items: center;
justify-content: center;
gap: 8em;
h1 {
    font-family: 'Caligola';
    font-size: 64px;
}
p { 
    font-size: 18px;
    width: 466px;
}
@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 3em;
gap: 2em;
h1 {
    margin-top: 2em;
    font-size: 36px;
}
p { 
    font-size: 18px;
    width: 271px;
    margin-bottom: 4em;
}
}
`


