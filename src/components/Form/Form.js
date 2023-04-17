import Pattern from "../../assets/Pattern";
import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.left}>
          <Pattern />
        </div>
        <div className={style.right}></div>
      </div>
    </div>
  );
};

export default Form;
