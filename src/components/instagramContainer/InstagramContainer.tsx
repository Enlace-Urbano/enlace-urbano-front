import InstagramCard from "../InstagramCard/InstagramCard";
import { Container, InstagramContainerStyle } from "./InstagramContainerStyle";

type Props = {};

const InstagramContainer = (props: Props) => {
  return (
    <>
      <InstagramContainerStyle>
        <Container>
          <InstagramCard />
        </Container>
      </InstagramContainerStyle>
    </>
  );
};
export default InstagramContainer;
