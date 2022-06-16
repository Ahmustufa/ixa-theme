import Header from "../header/headerWrapper.js";
import Footer from "../footer/footerWrapper.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
