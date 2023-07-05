import StyledFooter from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="content">
        <p>
          Copyright by{" "}
          <b>
            {" "}
            <a href="https://github.com/hafidznaufl">hafidznaufl</a>
          </b>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
