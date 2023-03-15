import styled from "styled-components";

export const Grid = styled.div`
 width: 100%;
 display: grid;
 padding: 1em;
 grid-template-columns: 1fr 1fr 1fr;
 


@media screen and (max-width: 768px) { 
padding: 0;
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
/* display: flex;
flex-direction: row;;
width: 100%;
align-items: center;
justify-content: center;

.card1{
    width:30vw;
}
.card2{
    width:30vw;
}
.card3{
    width:30vw;
}



} */

`