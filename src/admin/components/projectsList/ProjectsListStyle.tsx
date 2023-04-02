import styled from "styled-components";

interface ProjectsCardProps {
  isReversed: boolean;
}

export const ProjectsCard = styled.li<ProjectsCardProps>`
  background-color: ${({ isReversed }) => isReversed ? 'var(--color-blue)' : 'var(--color-green)'};
  color: white;
  width: 100%;
  height:50vw;
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed ? 'row-reverse' : 'row'};
  
  img {
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 50vw;
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 70vh;
    margin:0 auto;
  }
`;
export const Box = styled.div`
  width: 50%;
  height: 100%;
`

export const TextContainer = styled.div`
  width: 50vw;
    height: 50vh;
    height: min-content;

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











// import styled from "styled-components";

// export const ProjectsListStyle = styled.li``;

// export const ProjectsCard = styled.li<{ color: string, lettercolor: string, direction: string }>`
// color: ${props => props.lettercolor};
// background-color: ${props => props.color};
// width: 100%;
// display: flex;
// flex-direction: ${props => props.direction};
// justify-items: space-between;
// align-items: center;

//   img {
//     width: 50vw;
//     height: 50vw;
//     object-fit: cover;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//   }

//   @media screen and (max-width: 768px) {
//     width: 100%;
//     height: 70vh;
//   }
// `;

// export const TextContainer = styled.div`
// padding: 15%;
//   h1 {
//     font-family: "Calistoga";
//     font-size: 48px;
//     margin-bottom: 3rem;
//   }

//   p {
//     font-family: "Lato";
//     font-size: 1.3rem;
//   }

//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     width: 50vw;
//     height: 50vh;
//     height: min-content;
//     padding: 10%;
//     display: flex;
//     flex-flow: column nowrap;
//     justify-content: center;
//     align-content: center;

//     h1 {
//       font-size: 1.5rem;
//     }

//     p {
//       font-size: 16px;
//     }
//   }
// `;
