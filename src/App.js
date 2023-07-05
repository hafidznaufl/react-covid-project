import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Province from "./pages/Province";
import Indonesia from "./pages/Indonesia";
import About from "./pages/About";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/indonesia" element={<Indonesia />}></Route>
          <Route path="/province" element={<Province />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
