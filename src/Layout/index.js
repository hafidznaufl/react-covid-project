import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StyledLayout from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </StyledLayout>
  );
};
export default Layout;
