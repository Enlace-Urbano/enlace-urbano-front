import styled from "styled-components";
import chileMap from "../../assets/chileMap.png"


export const ProjectHero = styled.div`
background-color: var(--color-blue);
height: 95vh;
display: flex;
align-items: center;
justify-content: center;

h1{
    font-family: "Calistoga";
    font-size: 48px;
    margin-bottom: 2rem;
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
background-image: url(${chileMap});
background-repeat: no-repeat;
width: 50vw;
height: 85%;
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