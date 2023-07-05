import CardGlobal from "../CardGlobal";
import StyledGlobalRegions from "./GlobalRegions.styled";

const GlobalRegions = ({ data }) => {
  return (
    <StyledGlobalRegions>
      <div className="title">
        <h1>Situation</h1>
        <h1>By Regions</h1>
        <p>
          Baca Pilihan <b>Covid</b>
        </p>
      </div>
      <div className="info">
        {data.map((item, index) => (
          <CardGlobal key={index} item={item} />
        ))}
      </div>
    </StyledGlobalRegions>
  );
};
export default GlobalRegions;
