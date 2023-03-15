import styled from "styled-components";
import hero from './../../assets/hero.png'


export const HeroStyle = styled.section`
margin: 160px 0  0 0;
background-image: url(${hero});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
height: 70vh;
width: 100%;
display: flex;
align-items: center;
box-shadow: inset 0px 4px 27px 333px rgba(0, 0, 0, 0.3);
div {
    padding: 0.5em;
    width: 50%;
    padding: 1em;
}
h1{
    margin-left: 1em;
    font-size: 64px;
    font-family: 'Calistoga';
    color: #ffffff;
}

@media screen and (max-width: 800px) {
height: 502px;
justify-content: center;
margin-top: 200px;

h1{
    margin: 0 auto;
    font-size: 32px;
    font-weight: bold;
}
}
`      
