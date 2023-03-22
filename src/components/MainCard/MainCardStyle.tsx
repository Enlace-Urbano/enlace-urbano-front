import styled from "styled-components";

export const MainCardContainer=styled.div`
width:100vw;
display:flex;
margin-top: 0 auto;

img{
    width: 50%;
    height: 80vh;
} 
`
export const MainCardStyle = styled.div<{ color: string , lettercolor: string }>`
background-color: ${props => props.color};
width: 50dvw;
height:80dvh;
color: ${props => props.lettercolor};
padding-left: 4em;
display: flex;
justify-content: center;
flex-direction: column;
z-index: -1;
gap: 2em;

h1{
    font-family: "Calistoga";
    font-size: 64px;
}
p{
    font-family: "Lato";
    font-size: 18px;
    width: 80%;
}
`
