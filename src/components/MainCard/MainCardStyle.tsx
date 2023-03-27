import styled from "styled-components";

export const MainCardStyle = styled.div<{ color: string, lettercolor: string, direction: string, padding: number, marginT?: string, marginB?: string }>`
background-color: ${props => props.color};
color: ${props => props.lettercolor};
width: 100%;
display: flex;
flex-direction: ${props => props.direction};
justify-items: space-between;
align-items: center;

h1{
    font-family: "Calistoga";
    font-size: 48px;
    margin-bottom: 1.5rem;
}

p{
    font-family: "Lato";
    font-size: 18px;
}

div:nth-of-type(1){
    width: 50vw;
    padding: ${props => props.padding}rem;
    margin-top: ${props => props.marginT}rem;
    margin-bottom: ${props => props.marginB}rem;
}


@media screen and (max-width: 768px){
    flex-direction: column;
    
    
    div:nth-of-type(1){
        width: 100%;
        height: 50vh;
        padding: 10%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-content: center;
    }
    
    h1{
        font-size: 1.5rem;
    }

    p{
        font-size: 16px;
    }
}
`

export const BgImage = styled.div<{ bgimage: string }>`
    width: 50vw;
    height: 55vw;
    background-image: url(${props => props.bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 70vh;
    }
`