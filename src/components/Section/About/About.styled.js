import styled from "styled-components";

const StyledAbout = styled.div`
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    position: absolute;
    top: 20px;
    left: 35%;
    padding: 16px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  p {
    margin-top: 10px;
    font-weight: 600;
  }

  img {
    border-radius: 20px;
    width: 550px;
    margin-top: 10px;
  }

  @media (max-width: 764px) {
    .section {
      left: 0;
      right: 0;
      padding: 16px;
      border-radius: 20px;
      margin: 10rem 10px;
    }

    img {
      width: 380px;
    }
  }
`;

export default StyledAbout;
