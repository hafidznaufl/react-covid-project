import Global from "../components/Global Section/Global";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";

function Main() {
  return (
    <main>
      <Hero />
      <Global />
      <Table />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default Home;
