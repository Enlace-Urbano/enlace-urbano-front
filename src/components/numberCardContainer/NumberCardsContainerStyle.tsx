import styled from "styled-components";

export const Grid = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 1em;


@media screen and (max-width: 768px) {
display: grid;
grid-template-columns: 1fr 1fr;



}

`  