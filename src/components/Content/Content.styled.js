import styled from "styled-components";

const StyledContent = styled.div`
  max-width: 1536px;
  margin: 8rem auto;
  padding: 0px 16px;

  .content {
    display: flex;
    flex-direction: column;
  }

  .title h1 {
    font-weight: 800;
    color: var(--pacific-cyan);
    background-image: linear-gradient(60deg, #00b4d8 0%, #0077b6 78%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .title p,
  .title b {
    margin-top: 0.5rem;
    background-color: transparent;
    color: #000; /* Ubah warna teks jika diperlukan */
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 180px;
    border-radius: 20px;
    margin: auto;

    .content {
      background-color: transparent;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-basis: 50%;
    }

    .title {
      flex-basis: 50%;
      text-align: start;
    }
  }

  @media (min-width: 992px) {
    /* Tidak ada yang perlu diperbaiki di sini karena belum ada styling untuk Navbar */
  }
`;

export default StyledContent;
