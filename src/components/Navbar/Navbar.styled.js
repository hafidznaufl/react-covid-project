import styled from "styled-components";

const StyledNavbar = styled.div`
  padding: 1rem;
  color: var(--black);
  overflow: hidden;

  a {
    text-decoration: none;
    color: var(--black);
  }

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .navbar__brand {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 900;
  }

  .navbar__list {
    display: none;
    flex-direction: column;
    list-style: none;
    transition: all 0.3s ease-out;
  }

  .navbar__list__open {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 1rem;
    padding: 8px 24px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    border-radius: 10px;
  }

  a,
  .navbar__item {
    margin-bottom: 1rem;
    font-weight: 600;
    cursor: pointer;
  }

  a:hover {
    color: var(--honolulu-blue);
  }

  .navbar__content {
    text-align: right;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      width: 100vw;

    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1504px;
      margin: auto;
    }

    .navbar__brand {
      margin-bottom: 0;
    }

    .navbar__list {
      display: flex;
      flex-direction: row;
    }

    .navbar__item {
      margin: 0 1rem;
    }

    .navbar__toggle {
      display: none;
    }

    .navbar__content {
      text-align: center;
      position: relative;
      top: 0;
      right: 0;
    }

    .navbar__list__open {
      padding: 0px;
      margin: 0px;
      box-shadow: none;
      display: flex;
      flex-direction: row;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* 
   * Nothing TODO HERE.
   * We haven't styling Navbar.
   */
  }
`;

export default StyledNavbar;
