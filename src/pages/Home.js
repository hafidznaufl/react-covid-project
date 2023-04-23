import { useState } from "react";
import Form from "../components/Form/Form";
import Global from "../components/Global Section/Global";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import Footer from "../components/Footer/Footer"
import data from "../utils/constants/provinces"

function Main() {

  const [provinces, setProvinces] = useState(data.provinces)

  return (
    <main>
      <Hero />
      <Global />
      <Table provinces={provinces} setProvinces={setProvinces}/>
      <Form provinces={provinces} setProvinces={setProvinces}/>
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
