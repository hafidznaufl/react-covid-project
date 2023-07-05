import Card from "../Card";
import StyledContent from "./Content.styled";

const Content = (props) => {
  const { data } = props;

  return (
    <StyledContent>
      <div className="title">
        <h1>Data</h1>
        <h1>Indonesia</h1>
        <p>
          <b>Data Covid</b> berdasarkan Indonesia
        </p>
      </div>
      <div className="content">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </StyledContent>
  );
};

export default Content;