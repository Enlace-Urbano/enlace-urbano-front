import styled from "styled-components";

export const MainCardStyle = styled.div<{ color: string , lettercolor: string }>`
background-color: ${props => props.color};
width: 50dvw;
height:100dvh;
color: ${props => props.lettercolor};
padding-left: 4em;
display: flex;
justify-content: center;
flex-direction: column;

h1{
    font-family: "Calistoga";
    font-size: 5em;

}
p{
    font-family: "Lato";
    font-size: 1.5em;
    
}

`
export const MainCardContainer=styled.div`
width:100dvh;
display:flex;
img{
    max-width: 100%;
    height: auto;
}
`