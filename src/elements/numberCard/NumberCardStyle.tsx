import styled from "styled-components";

export const NumberCardStyle = styled.div<{ color: string }>`
height: 305px;
display: flex;
text-align: center;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: ${props => props.color};

&:focus{
    transition: 0.2s; 
}

@media screen and (max-width: 768px) {
    height: 194px;
}
`
export const Card = styled.div`
color: white ;

h1 {
    font-family: 'Calistoga';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 72px;
}

h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    padding: 0 3em;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 24px;
    }

    h3 {
        font-size: 16px;
        line-height: 20px;
        padding: 0 1em;
    }
}
`



