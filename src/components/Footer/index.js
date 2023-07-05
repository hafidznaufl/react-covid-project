import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p>
          Copyright by{" "}
          <b>
            {" "}
            <a href="https://github.com/hafidznaufl">hafidznaufl</a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Footer;
