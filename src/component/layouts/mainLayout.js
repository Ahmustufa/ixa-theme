import Header from "../header/headerWrapper.js";
import Footer from "../footer/footerWrapper.js";
import Router from "next/router";

const Layout = ({ children }) => {
  return (
    <div>
      <div
        style={{
          height: Router.pathname === "/" ? 0 : 88,
          display: Router.pathname.includes("/email-template") ? "none" : "initial",
        }}
      >
        <Header />
      </div>
      {children}
      <div
        style={{
          display: Router.pathname.includes("/email-template") ? "none" : "initial",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
