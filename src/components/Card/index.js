import style from "./Card.module.css";

const Card = (props) => {
  const { item } = props;

  return (
    <div className={style.box}>
      <div className={style.content}>
        <div className={style.title}>{item.status}</div>
        <h2 className={style.total}>{item.total}</h2>
      </div>
    </div>
  );
};

export default Card;
