import styled from "styled-components";

export const HeroStyle = styled.div`
display: flex;
align-items: center;
justify-content:center ;
position: relative;
width: 100%;
height: 100vh;
z-index: -1;

div {
    position: absolute;
    padding: 1em;
 

}

h1{
    margin-left: 1em;
    font-size: 64px;
    font-family: 'Calistoga';
    color: var(--color-white);
}

video{
    filter: brightness(0.5);
    height: 100vh;
    width: 100%;
    object-fit: cover;
}

@media screen and (max-width: 800px) {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 80%;
    }

    h1{ 
        font-size: 32px;
        font-weight: bold;
    }

    video {
        height: 100vh;
        width:100vw;
    }
}
`
