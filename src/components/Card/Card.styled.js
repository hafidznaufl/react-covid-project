import styled from "styled-components";

const StyledCard = styled.div`
  background-color: var(--pure-white);
  border: 2px solid var(--black);
  width: 100%;
  height: 120px;
  padding: 16px 24px;
  font-size: larger;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 16px 0px 0px 0px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  .content-box {
    background-color: transparent;
    flex-direction: column;
  }

  .total {
    background-color: transparent;
    text-align: center;
    color: var(--black);
  }

  .title {
    margin-bottom: 0.375rem;
    font-weight: 600;
    color: var(--pacific-blue);
    background-image: linear-gradient(60deg, #00b4d8 0%, #0077b6 78%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  a {
    text-decoration: none;
    background-color: transparent;
  }

  @media (min-width: 764px) {
    width: 235px;
    height: 120px;
    margin: 0px 10px;
    transition: all 0.3s ease;
    background-color: var(--pure-white);
    border: none;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 32px;
    font-size: large;
    align-items: flex-start;

    &:hover {
      transform: translateY(-20px);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
      background-color: var(--pure-white);
    }
  }
`;

export default StyledCard;
