import styled from "styled-components";

interface ProjectsCardProps {
  isReversed: boolean;
}

export const ProjectsCard = styled.li<ProjectsCardProps>`
width: 100%;
height:50vw;
background-color: ${({ isReversed }) => isReversed ? 'var(--color-blue)' : 'var(--color-green)'};
color: white;
display: flex;
align-items: center;
flex-direction: ${({ isReversed }) => isReversed ? 'row-reverse' : 'row'};

img {
  width: 100%;
  min-height: 50vw;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (max-width: 768px) {
  height: 70vh;
}
`

export const Box = styled.div`
  width: 50%;
  height: 100%;
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: fit-content;
height: 50vw;
padding: 15%;

h1 {
  font-family: "Calistoga";
  font-size: 48px;
  margin-bottom: .5rem;
}

p {
  font-family: "Lato";
  font-size: 1.3rem;
}

@media screen and (max-width: 768px) {
  flex-direction: column;
  width: 50vw;
  height: 50vh;
  height: min-content;
  padding: 10%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 16px;
  }
}
`