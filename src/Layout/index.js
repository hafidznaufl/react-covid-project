import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={style.layout}>{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
