import styled from "styled-components";

const StyledForm = styled.div`
  padding: 0 16px;
  margin: 2rem auto;

  .content {
    display: flex;
    flex-direction: column;
  }

  .left {
    display: none;
  }

  /* Form title */
  .title {
    margin-bottom: 30px;
  }

  .title h1 {
    text-align: start;
    color: var(--pacific-cyan);
    background-image: -webkit-linear-gradient(60deg, #00b4d8 0%, #0077b6 78%);
    background-clip: text;
    -webkit-background-clip: text;
    -text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  /* Form labels */
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  /* Form inputs */
  input[type="number"],
  select {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 1rem;
    color: #333;
    background-color: var(--pure-white);
  }

  input[type="number"],
  select {
    outline: none;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  .button__submit {
    background-color: var(--honolulu-blue);
    border: none;
    color: white;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .button__submit:hover {
    opacity: 0.6;
  }

  .button__submit:active {
    transform: translateY(4px);
  }

  .button__reset {
    border: 2px solid var(--honolulu-blue);
    color: var(--honolulu-blue);
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  .button__reset:hover {
    opacity: 0.6;
  }

  .button__reset:active {
    transform: translateY(4px);
  }

  @media (min-width: 764px) {
    max-width: 1536px;
    margin: 10rem auto;

    .content {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 600px;
    }

    .left {
      flex-basis: 50%;
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      padding: 16px 0 0 64px;
    }
  }
`;

export default StyledForm;
