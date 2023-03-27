import styled from "styled-components";

export const Carousel = styled.div`
width: 90vw;
max-width: 1200px;
height: fit-content;
margin: 0 auto 0 auto;
display: flex;
gap: 6rem;
flex-flow: row nowrap;
overflow-x: scroll;

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-green);
    border-radius: 5px;
}


@media screen and (max-width: 768px){
    gap: 2rem;

    ::-webkit-scrollbar:horizontal {
        height: 8px;
    }
}
`