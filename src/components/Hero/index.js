import Pattern from "../../assets/Pattern";
import style from "./Hero.module.css";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className={style.container}>
      <section className={style.content}>
        <div className={style.hero__left}>
          <h1 className={style.title__diff}>Covid</h1>
          <h1 className={style.title__diff}>Data Research</h1>
          <h1 className={style.title}>Indonesia</h1>
          <p>
            <b>Lorem ipsum </b>
            dolor sit amet consectetur adipisicing elit. Quisquam facilis
            exercitationem  <b>error</b>, repudiandae corporis voluptatibus.
          </p>
          <div className={style.content__button}>
            Vaccine <FiArrowRight viewBox="0 0 24 24" />
          </div>
        </div>
        <div className={style.hero__right}>
          <Pattern />
        </div>
      </section>
    </div>
  );
};

export default Hero;
