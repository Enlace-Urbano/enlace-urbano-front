import styled from "styled-components"

export const EverydayStyle = styled.section``

export const TextContainer = styled.section`
color: var(--color-black);
padding: 10em 0 0 10em;
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
gap: 2em;

h1 {
  font-family: "Calistoga";
  font-size: 48px;
  font-weight: 400;
}

p {
  font-size: 18px;
}

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0
    gap: 2em;

    h1 {
      margin-top: 2em;
      font-size: 36px;
    }

    p {
      font-size: 18px;
      width: 271px;
      margin-bottom: 4em;
    }
  }
`
