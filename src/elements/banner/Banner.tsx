import { BannerStyle } from "./BannerStyle";

interface BannerProps {
  label: string;
  label2: string;
}

const Banner: React.FC<BannerProps> = ({ label, label2 }) => (
  <>
    <BannerStyle>
      <h1>{label}</h1>
      <h2>{label2}</h2>
    </BannerStyle>
  </>
);

export default Banner;
