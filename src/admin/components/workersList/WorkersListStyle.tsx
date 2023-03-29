import styled from "styled-components";

export const WorkersListStyle = styled.div`
color: var(--color-black);
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
gap:2rem;
`

export const WorkersUl = styled.ul`
display: flex;
gap: 4rem;
padding: 4rem;
flex-wrap: wrap;

li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    padding: 1rem;
    border-radius: 5px;
}

li:hover {
    transition: 0.2s;
    background-color:var(--color-lightblue);

}


img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;

}

h4{
    font-weight: 700;
}

`

export const WorkersName = styled.div`
    width: min-content;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 800;
    color: var(--color-white);
    background-color: var(--color-green);
    padding: 0 0.5rem 0 0.5rem;
    letter-spacing: 0.1rem;
    border-radius: 5px;
    `
