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
  // height: 100vh;
  min-height: 50vw;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  flex-direction: column;
}
`

export const Box = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
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
  height: min-content;
  padding: 5%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;;
  }
}
`