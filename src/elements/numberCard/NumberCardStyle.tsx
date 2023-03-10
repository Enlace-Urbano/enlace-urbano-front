import styled from "styled-components";

export const NumberCardStyle = styled.div<{ color: string }>`
width: 413px;
height: 305px;
display: flex;
text-align: center;
flex-direction: column;
align-items: center;
justify-content: center;;
background-color: ${props => props.color};



&:focus{
    transition: 0.2s;
    
}

@media screen and (max-width: 768px) {
width: 272px;
}
`
export const CardContainer = styled.div<{ color: string }>`
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
}
` 

    

