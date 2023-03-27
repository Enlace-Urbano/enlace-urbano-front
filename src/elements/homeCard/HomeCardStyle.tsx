import styled from "styled-components";

export const HomeCardContainer=styled.div`
width:100vw;
display:flex;
margin-top: 0 auto;


img{
    width: 100%;
    height: 100vh;
    filter: brightness(0.4);
    object-fit: cover;
    z-index: -1;
}
&:hover {
    transition: 0.2s;
    filter: brightness(1);

}


 
`
export const HomeCardStyle = styled.div<{ color: string , lettercolor: string }>`
position: absolute;
width: 50dvw;
height:100vh;
color: var(--color-white);
padding: 6em;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
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

`
