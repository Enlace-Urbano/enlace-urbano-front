import styled from "styled-components";

export const InstagramContainerStyle = styled.div`
display: flex;
flex-direction: column;
padding: 4em;

`
export const Container = styled.ul`

display: flex;
align-items: center;
justify-content: center;
ul {
    display: flex;
    list-style: none;
}

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;
width: 100%;
}
`


