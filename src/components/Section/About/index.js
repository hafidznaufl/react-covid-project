import frontendImage from "../../../assets/images/frontend.jpg";
import StyledAbout from "./About.styled";

const AboutSection = () => {
  return (
    <StyledAbout>
      <div className="section">
        <img src={frontendImage} alt="frontend" />
        <p>Rakha Zahran - Aufa Billah - Hafidz Naufal</p>
        <br />
        <p>"Terimakasih ka aufa atas bimbingannya, Semoga dilancarkan rezekinya"
        </p>
      </div>
    </StyledAbout>
  );
};
export default AboutSection;
