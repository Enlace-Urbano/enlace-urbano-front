import styled from "styled-components";


export const ContactStyle = styled.section`
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;
` 

export const Info = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
background-color: var(--color-blue);
color: var(--color-white);
padding: 10em;
width: 50vw;
height: 100vh;
text-decoration:none;
gap: 1em;

span {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
}

h2 {
    font-weight: 900;
}

& div {
    display: flex;
    align-items: center;
    gap: .5em;
}
` 