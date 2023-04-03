import InstagramCard from "../instagramCard/InstagramCard";
import { Container, InstagramContainerStyle } from "./InstagramContainerStyle";

const InstagramContainer = () => {
  return (
    <InstagramContainerStyle>
      <Container>
        <InstagramCard />
      </Container>
    </InstagramContainerStyle>
  )
}
export default InstagramContainer;
