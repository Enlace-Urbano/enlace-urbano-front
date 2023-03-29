import styled from "styled-components";

export const StadisticsStyle = styled.section` 
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
left: 20vw;
width: 80vw;
top: 5vh;
color: var(--color-black);
`

export const Container = styled.div`
width: 80vw;

h3{
font-size: 18px;
margin-left: 6rem;
font-weight: bold; 
}

`
export const StadisticsContainer = styled.div`
p {
    margin-bottom: 1rem;
}
`

export const CardSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 3rem;



`