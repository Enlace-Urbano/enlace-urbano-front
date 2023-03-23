import styled from "styled-components";

export const MainCardStyle = styled.div<{ color: string, lettercolor: string, direction: string }>`
background-color: ${props => props.color};
width: 100%;
color: ${props => props.lettercolor};
display: flex;
flex-flow: ${props => props.direction};
justify-items: space-between;
align-items: center;

div:nth-of-type(1){
    width: 50vw;
    padding: 2rem;
}

h1{
    font-family: "Calistoga";
    font-size: 48px;
}
p{
    font-family: "Lato";
    font-size: 18px;
}
`

export const BgImage = styled.div<{ bgimage: string }>`
    width: 50vw;
    height: 35rem;
    background-image: url(${props => props.bgimage});
    background-size: cover;
    background-position: center;
`