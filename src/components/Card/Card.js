import style from "./Card.module.css";

const Card = (props) => {
  const { item } = props;

  return (
    <>
      <a href={item.detail}>
        <div className={style.box}>
          <div className={style.content}>
            <div className={style.title}>{item.status}</div>
            <h1 className={style.total}>{item.total}</h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
