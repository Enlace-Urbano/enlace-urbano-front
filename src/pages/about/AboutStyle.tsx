import styled from "styled-components";

export const AboutContainer = styled.section`
h1{
    font-size: 4rem;
    font-family: 'Calistoga';
}
`

export const Heading = styled.section`
width: 100%;
height: 55vh;
margin-top: 240px;
background-color:var(--color-blue);
padding: 3.5rem;

h1{
    color: white;
}

span{
    font-size: 4rem;
    font-family: 'Calistoga';
    background-color: white;
    color: var(--color-blue);
}

@media screen and (max-width: 800px) {
height: 502px;
justify-content: center;
margin-top: 200px;
padding:0;

    h1, span{
        margin: 0 auto;
        font-size: 32px;
        font-weight: bold;
    }
}
`


export const Purpose = styled.section`
max-width: 1100px;
height: 80vh;
margin: 0 auto;
display: grid;
grid-template-columns: .8fr 1.2fr;
align-items: center;

.list{
    

    h2, p{
        font-size: 18px;
        padding-right: 5rem;
    }

    h2{
        margin-top: 2rem;
    }
}
`
