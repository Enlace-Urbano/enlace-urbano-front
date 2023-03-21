import styled from "styled-components";

export const BannerStyle = styled.div`
  text-align: center;
  color: var(--color-white);
  background-color: var(--color-blue);
  width: 100%;
  height: 80vh;
  padding: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  h1 {
    font-family: "Calistoga";
    font-size: 64px;
    font-weight: 400;
    width: 52%;
  }
  h2 {
    align-self: flex-end;
    font-family: "Calistoga";
    font-size: 64px;
    font-weight: 400;
    width: 52%;
  }
`;
