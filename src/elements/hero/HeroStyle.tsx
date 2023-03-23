import styled from "styled-components";


export const HeroStyle = styled.div`
display: flex;
align-items: center;
position: relative;
height: 100dvh;
width: 98.9dvw;
z-index: -1;

div {
    position: absolute;
    padding: 1em;
    width: 70%;
    height: 100vh;
    margin-top: 35%;

}
h1{
    margin-left: 1em;
    font-size: 64px;
    font-family: 'Calistoga';
    color: var(--color-white);
}
video {
    filter: brightness(0.5);
    height: 100vh;
    width: 100%;
    object-fit: cover;
  

}

@media screen and (max-width: 800px) {
height: 100vh;
width: 98%;
display: flex;
justify-content: center;
align-items: center;


div {
    width: 80%;
    height: 100dvh;
    margin-top: 30em;
}

h1{ 
    font-size: 32px;
    font-weight: bold;
}

video {
    height: 100dvh;
    width:98vw;
}
}
`
