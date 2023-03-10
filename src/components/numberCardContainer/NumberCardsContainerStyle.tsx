import styled from "styled-components";

export const Grid = styled.div`
display: flex;
width: 100%;
flex-direction: row;;
align-items: center;
justify-content: center;
padding: 1em;

.card1{
    width:34vw;
}
.card2{
    width:34vw;
}
.card3{
    width:34vw;
}


@media screen and (max-width: 768px) {
display: grid;
grid-template-areas: "col1 col1"
                     "col2 col3";


.card1{
 grid-area: col1;
 width:100vw; 
 
}

.card2{
    grid-area: col2;
    width:50vw; 
}

.card3{
grid-area: col3;
    width:50vw; 
}


}

`  