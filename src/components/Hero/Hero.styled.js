import styled from "styled-components";

const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    padding: 16px;
    color: var(--black);

  .title {
    font-weight: 800;
    font-size: 50px;
  }

  .title__diff {
    font-weight: 800;
    font-size: 50px;
    color: var(--pacific-cyan);
    background-image: -webkit-linear-gradient(60deg, #00b4d8 0%, #0077b6 78%);
    background-clip: text;
    -webkit-background-clip: text;
    -text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .content {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 4.5vh;
    height: 730px;
  }

  .content__button {
    border: 2px solid var(--black);
    padding: 15px 24px;
    width: 100%;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    margin-top: 2rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;
  }

  .content__button:active {
    transform: translateY(4px);
  }

  .hero__content {
    width: 100%;
  }

  .hero__left p {
    margin-top: 1rem;
  }



  @media (min-width: 768px) {
      margin-bottom: 330px;

    .content {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      margin-top: 10vh;
      height: 70px;
      margin-bottom: 430px;
    }

    .content__button {
      width: 150px;
    }

    .content__button:hover {
      width: 250px;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    }

    .content__button:active {
      transform: translateY(8px);
      box-shadow: none;
    }

    .content p {
      width: 60%;
    }

    .hero__left {
      flex-basis: 60%;
      margin-top: 1.5rem;
    }

    .hero__right {
      display: flex;
      flex-basis: 60%;
    }

    .pattern {
      border-radius: 20px;
      margin-top: 0;
      height: 400px;
    }
  }

  @media (min-width: 992px) {
    /* 
   * Nothing TODO HERE.
   * We haven't styling Navbar.
   */
  }
`;

export default StyledHero;
