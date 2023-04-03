import styled from "styled-components"

export const EverydayStyle = styled.section``

export const TextContainer = styled.section`
width: 100%;
height: 40vh;
color: var(--color-black);
padding: 0 0 0 5rem;
display: flex;
flex-flow: column nowrap;
align-items: start;
justify-content: center;
gap: .5rem;

h1 {
  font-family: "Calistoga";
  font-size: 48px;
  font-weight: 400;
}

p {
  font-size: 18px;
  margin-left: 1.5rem;
}

@media screen and (max-width: 950px) {
  p{
    margin: 0;
  }
}

@media screen and (max-width: 768px) {
  width: 100%;
  height: 80vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: .5rem;

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
    margin: 0;
  }
}
`
