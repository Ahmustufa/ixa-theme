import Header from "../header/headerWrapper2.js";
import Footer from "../footer/footerWrapper2.js";
import Router from "next/router";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <div style={{ height: Router.pathname === "/" ? 0 : 88 }}> */}
      <Header />
      {/* </div> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
