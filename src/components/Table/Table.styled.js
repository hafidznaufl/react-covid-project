const { default: styled } = require("styled-components");

const StyledTable = styled.div`
    padding: 16px 16px;
    border-radius: 20px;

  .content,
  .title,
  h1,
  p {
    background-color: transparent;
  }

  .title h1 {
    font-weight: 800;
    color: #00b4d8;
    background-image: -webkit-linear-gradient(30deg, #00b4d8 0%, #0077b6 78%);
    background-clip: text;
    -webkit-background-clip: text;
    -text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .table {
    max-width: 400px;
    max-height: 450px;
    overflow-x: scroll;
  }

  .title {
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .title h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .title p {
    font-size: 16px;
    font-weight: 400;
  }

  .table table {
    width: 100%;
    border-collapse: collapse;
  }

  .table th,
  .table td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid #f1f1f1;
  }

  .table th {
    font-size: 16px;
    font-weight: 700;
    position: sticky;
  }

  .table td {
    font-size: 14px;
    font-weight: 400;
  }

  .table td:first-child {
    font-weight: 700;
  }

  .table tr:last-child td {
    border-bottom: none;
  }

  @media (min-width: 764px) {
      max-width: 1536px;
      margin: 0 auto 0px auto;
      padding: 32px 16px 16px 16px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
      background-color: var(--pure-white);
      position: relative;

    .title {
      margin-bottom: 30px;
    }

    .table {
      max-height: 400px;
      max-width: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      border-radius: 20px;
      overflow-y: scroll;
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1);
    }

    .table::-webkit-scrollbar {
      width: 8px;
    }

    .table::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.02);
    }

    .table::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    .table::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }

    .table::-webkit-scrollbar-thumb:active {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export default StyledTable;
