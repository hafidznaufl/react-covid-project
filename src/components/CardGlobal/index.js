import style from "./CardGlobal.module.css";

const CardGlobal = ({ item }) => {
  return (
    <div className={style.box}>
      <h3 className={style.title}>{item.name}</h3>
      <div className={style.content}>
        {Object.keys(item.numbers).map((key) => (
          <div className={style.value} key={key}>
            <div className={style.status}>{key}</div>
            <h2 className={style.total}>{item.numbers[key]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGlobal;
