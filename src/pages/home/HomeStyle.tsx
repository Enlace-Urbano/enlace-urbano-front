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
`


export const TextContainer = styled.section`
padding: 10em;
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
`  


