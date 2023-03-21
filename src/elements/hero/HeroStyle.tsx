import styled from "styled-components";


export const HeroStyle = styled.section`
display: flex;
align-items: center;
height: 85vh;
margin-bottom: 7.1em;



div {
    position: absolute;
    padding: 0.5em;
    width: 70%;
    margin-top: 15%;
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
