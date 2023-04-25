import style from "./Global.module.css";
import { data } from "../../utils/constants/indonesia";
import { useState } from "react";
import Card from "../Card/Card";

const Global = () => {
  const [obj, setObj] = useState(data.indonesia);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Data</h1>
        <h1>Indonesia</h1>
        <p>
          <b>Data Covid</b> berdasarkan Indonesia
        </p>
      </div>
      <div className={style.info}>
        {obj.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Global;