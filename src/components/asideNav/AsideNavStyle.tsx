import styled from "styled-components";

export const AsideNavStyle = styled.nav`
position: fixed;
display: flex;
flex-direction: column;
gap: 0.5em;
right: 0;
bottom: 40%;
background-color: var(--color-blue);
border-radius: 5px 0 0 5px  ;
padding: 0.5em;
z-index: 1;

svg {
padding: 0.2em;
 width: 30px;
 height: 30px;
 color: var(--color-white);
}
svg:hover {
    transition: 0.2s;
    color: #00B899;
}
@media screen and (max-width: 800px) {
    bottom: 0;
}

`  