import StyledCard from "./Card.styled";

const Card = (props) => {
  const { item } = props;

  return (
    <StyledCard>
      <div className="content-box">
        <div className="title">{item.status}</div>
        <h2 className="total">{item.total}</h2>
      </div>
    </StyledCard>
  );
};

export default Card;
