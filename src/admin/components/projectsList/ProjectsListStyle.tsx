import styled from "styled-components";
export const ProjectsListStyle = styled.li``;

export const ProjectsCard = styled.li`
  background-color: var(--color-green);
  color: var(--color-white);
  width: 100%;
  display: flex;
  justify-items: space-between;
  align-items: center;

  img {
    width: 50vw;
    height: 50vw;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70vh;
  }
`;

export const TextContainer = styled.div`
padding: 15%;
  h1 {
    font-family: "Calistoga";
    font-size: 48px;
    margin-bottom: 3rem;
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
`;
