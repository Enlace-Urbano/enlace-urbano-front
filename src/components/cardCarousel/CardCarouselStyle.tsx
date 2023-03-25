import styled from "styled-components";

export const Carousel = styled.div`
display: flex;
gap: 2rem;
flex-flow: row nowrap;
overflow-x: auto;
-ms-overflow-style: none;
scrollbar-width: none;
margin: 0 auto 0 auto;
width: 90vw;
height: fit-content;

::-webkit-scrollbar {
    display: none;
    -webkit-overflow-scrolling: touch;
}
`