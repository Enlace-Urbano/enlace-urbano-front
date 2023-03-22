import styled from "styled-components";


export const HeroStyle = styled.section`
display: flex;
align-items: center;
height: 100vh;
position: relative;



div {
    position: absolute;
    padding: 1em;
    width: 70%;
    height: 100vh;
    margin-top: 35%;
    z-index: -1;

}
h1{
    margin-left: 1em;
    font-size: 64px;
    font-family: 'Calistoga';
    color: var(--color-white);
}
video {
    filter: brightness(0.5);
    z-index: -1;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  

}

@media screen and (max-width: 800px) {
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;


div {
    width: 100%;
    height: 100vh;
    margin-top: 30em;
    padding: 2em;
  

}

h1{ 
    font-size: 32px;
    font-weight: bold;
}

video {
    height: 100%;
    width:100%;
    object-fit: cover;

}
}
`
