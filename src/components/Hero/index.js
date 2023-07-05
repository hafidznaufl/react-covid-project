import Pattern from "../../assets/Pattern";
import { FiArrowRight } from "react-icons/fi";
import StyledHero from "./Hero.styled";

const Hero = () => {
  return (
    <StyledHero>
      <section className="content">
        <div className="hero__left">
          <h1 className="title__diff">Covid</h1>
          <h1 className="title__diff">Data Research</h1>
          <h1 className="title">Indonesia</h1>
          <p>
            <b>Lorem ipsum </b>
            dolor sit amet consectetur adipisicing elit. Quisquam facilis
            exercitationem <b>error</b>, repudiandae corporis voluptatibus.
          </p>
          <div className="content__button">
            Vaccine <FiArrowRight viewBox="0 0 24 24" />
          </div>
        </div>
        <div className="hero__right">
          <Pattern />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
