import CardGlobal from "../CardGlobal";
import style from "./GlobalRegions.module.css";

const GlobalRegions = ({ data }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Situation</h1>
        <h1>By Regions</h1>
        <p>
          Baca Pilihan <b>Covid</b>
        </p>
      </div>
      <div className={style.content}>
        {data.map((item, index) => (
          <CardGlobal key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default GlobalRegions;
