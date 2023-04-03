import styled from "styled-components";
import chileMap from "../../assets/chileMap.png"

export const ProjectHero = styled.div`
display: flex;
height: 100vh;
background-color: var(--color-blue);

h1{
    font-family: "Calistoga";
    font-size: 48px;
    margin-bottom: .5rem;
}

p{
    font-family: "Lato";
    font-size: 1.3rem;
}

@media screen and (max-width: 768px) {
    h1{
        font-size: 24px;
        margin-bottom: 0.5rem;
    }

    p{
        font-family: "Lato";
        font-size: 1rem;
    }
}
`

export const ProjectMapStyle = styled.div` 
width: 50vw;
height: 85%;
margin-top: 5rem;
background-image: url(${chileMap});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
`

export const ProjectCardStyle = styled.div` 
width: 50vw;
height: 100%;
background-color: var(--color-white);
display: flex;
align-items: center;
justify-content: center;

div {
    margin: 0 auto;
    background-color: var(--color-blue);
    width: 40vw;
    height: fit-content;
    padding: 10%;
    color: var(--color-white);
}
`