import StyledCardGlobal from "./CardGlobal.styled";

const CardGlobal = ({ item }) => {
  return (
    <StyledCardGlobal>
      <h3 className="title">{item.name}</h3>
      <div className="content">
        {Object.keys(item.numbers).map((key) => (
          <div className="value" key={key}>
            <div className="status">{key}</div>
            <h2 className="total">{item.numbers[key]}</h2>
          </div>
        ))}
      </div>
    </StyledCardGlobal>
  );
};

export default CardGlobal;
