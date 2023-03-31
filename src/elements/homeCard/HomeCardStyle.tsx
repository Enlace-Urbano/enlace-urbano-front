import styled from "styled-components";

export const HomeCardContainer = styled.div<{ align: string }>`
width: 100%;
display:flex;
justify-content: ${props => props.align};

img{
    width: 100%;
    height: 100vh;
    filter: brightness(0.4);
    object-fit: cover;
    z-index: -1;
}

@media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
} 
`

export const HomeCardStyle = styled.div<{ bgcolor: string, color: string }>`
width: 50vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
position: absolute;
color: var(--color-white);
padding: 6em;
gap: 2em;
z-index: 2;

div{
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: ${props => props.color};
    background-color: ${props => props.bgcolor};
    z-index: -1;
}

h1{
    font-family: "Calistoga";
    font-size: 55px;
}

p{
    font-family: "Lato";
    font-size: 18px;
}

@media screen and (max-width: 800px) {
    align-items: center;
    text-align: center;
    width: 100%;
    
    h1{
        font-size: 32px;
    }
    
    p{
        font-size: 18px;
    }

    div{
        display: none;
    }
}
`