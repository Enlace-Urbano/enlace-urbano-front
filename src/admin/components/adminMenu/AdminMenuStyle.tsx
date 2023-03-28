import styled from "styled-components";

export const AdminMenuStyle = styled.nav`
height:100dvh;
width:20vw;
min-width: 130px;
background-color: var(--color-lightgreen);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-decoration: none;
color: var(--color-black);
position: fixed;
top: 0;
left: 0;
z-index: 1;
h3 {
    font-family: 'calistoga';
    font-size: 20px;
    font-weight:500;
    margin-bottom: 1rem;
}
p {
    padding: 15px;
    text-align: center;
    width: 20dvw;
}
p:hover {
    transition: 0.2s;
    background-color: var(--color-green);
    color: var(--color-white);
    font-weight: bold;
}

p:focus{
    color:  #579288;
}
`