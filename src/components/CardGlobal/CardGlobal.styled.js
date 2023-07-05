import styled from "styled-components";

const StyledCardGlobal = styled.div`
  margin: 20px 0px;
  padding: 16px 24px;
  background-color: var(--pure-white);
  width: 480px;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  .title {
    margin-bottom: 0.375rem;
    font-weight: 700;
    color: var(--pacific-blue);
    background-image: -webkit-linear-gradient(60deg, #00b4d8 0%, #0077b6 78%);
    background-clip: text;
    -webkit-background-clip: text;
    -text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .content,
  .status,
  .total,
  .value {
    background-color: transparent;
  }

  .content {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
  }

  .status {
    margin: 20px 0px 0px 0px;
    font-weight: 600;
    color: var(--grey);
  }

  .total {
    color: var(--black);
    margin-top: 5px;
  }
`;

export default StyledCardGlobal
