import styled from "styled-components";

interface ProjectsCardProps {
  isReversed: boolean;
}

export const ProjectsCard = styled.li<ProjectsCardProps>`
width: 80%;
margin: 3rem auto;
height:40vw;
background-color: ${({ isReversed }) => isReversed ? 'var(--color-blue)' : 'var(--color-green)'};
color: white;
display: flex;
flex-direction: ${({ isReversed }) => isReversed ? 'row-reverse' : 'row'};

img {
  width: 100%;
  min-height: 40vw;
  object-fit: cover;
}


button{
margin: 3rem auto;
width: 177px;
height: 50px;
background-color: var(--color-black);
color: var(--color-white);
border: none;
border-radius: 5px;
font-size: 18px;



&:hover {
background:  #5d9289;
font-weight: bold;
border-radius: 5px;
}

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
  height: 100;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 15%;
height: 100%;

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