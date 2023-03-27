import styled from "styled-components";

export const HomeCardContainer=styled.div<{ align: string}>`
display:flex;
justify-content: ${props => props.align};
width: 98.9dvw;
margin: 0;


img{
    width: 100%;
    height: 100vh;
    filter: brightness(0.4);
    object-fit: cover;
    z-index: -2;
}
&:hover {
    transition: 0.2s;
    filter: brightness(1);

}

@media screen and (max-width: 800px) {
justify-content: center;
width: 99%;

}
 
`
export const HomeCardStyle = styled.div<{ color: string , lettercolor: string }>`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
position: absolute;
width: 50vw;
height:100vh;
color: var(--color-white);
padding: 6em;
z-index: -1;
gap: 2em;

&:hover{
    background-color: ${props => props.color};
    color: ${props => props.lettercolor};
}



h1{
    font-family: "Calistoga";
    font-size: 64px;
}

p{
    font-family: "Lato";
    font-size: 18px;
}
@media screen and (max-width: 800px) {
align-items: center;
text-align: center;
width: 100%;
}

h1{
    font-size: 32px;
}

p{
    font-size: 18px;
}

`