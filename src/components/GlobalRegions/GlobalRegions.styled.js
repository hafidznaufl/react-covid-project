import styled from "styled-components";

const StyledGlobalRegions = styled.div`
  max-width: 1536px;
  margin: auto;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;

  .title h1 {
    font-weight: 800;
    color: var(--pacific-cyan);
    background-image: -webkit-linear-gradient(60deg, #00b4d8 0%, #0077b6 78%);
    background-clip: text;
    -webkit-background-clip: text;
    -text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .title p,
  .title b {
    margin-top: 0.5rem;
    background-color: transparent;
    color: #000; /* Ubah warna teks jika diperlukan */
  }

  .info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    display: flex;
    margin: 5rem auto;
  }
`;

export default StyledGlobalRegions;
