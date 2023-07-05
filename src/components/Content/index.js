import style from "./Content.module.css";
import Card from "../Card";

const Content = (props) => {
  const { data } = props;

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Data</h1>
        <h1>Indonesia</h1>
        <p>
          <b>Data Covid</b> berdasarkan Indonesia
        </p>
      </div>
      <div className={style.content}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
