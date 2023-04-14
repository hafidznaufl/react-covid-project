import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

function Main() {
  return (
    <main>
      <Hero />
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
