import styled from "styled-components";

export const InstagramContainerStyle = styled.div`
display: flex;
flex-direction: column;
padding: 4em;

`
export const Container = styled.ul`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0;
margin: 0 auto;
list-style: none;

@media screen and (max-width: 768px) {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;
width: 100%;
}
`


