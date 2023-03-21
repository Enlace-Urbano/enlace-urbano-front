import styled from "styled-components";


export const LoginStyle = styled.section`
display: flex;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
.illustration {
    display: flex;
    align-items: center;
    justify-content: center;
width: 50%;
height: 100%;
background-color: var(--color-green);
}
img {
width: 20em;
}
footer img {
    position: absolute;
    bottom: 0;
    left: 22vw;
    width: 100px;
    padding-bottom: 2em;
}
`

export const LoginForm = styled.div`
display: flex;
justify-content: center;

background-color: var(--color-white);
height: 100vh;
width: 50%;
Button {
    margin: 0 auto;
}
.formContainer {
display: flex;
flex-direction: column;
justify-content: center;
gap: 3em;
}
`
