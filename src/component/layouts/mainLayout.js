import Header from "../header/headerWrapper.js";
import Footer from "../footer/footerWrapper.js";
import SignupModal from "../modals/signupModal.js";
// import ScrollToTop from "../scrollToTop/index";
import CookieBanner from "../cookieBanner/index.js";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../redux/constants/index.js";
import { useEffect } from "react";
import { decrypt } from "../../helper/encryptionDecyption.js";
import Cookies from "js-cookie";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      const data = Cookies.get("_LL_DATA_CAP");
      dispatch({ type: User.UPDATE_INFO, payload: JSON.parse(data) });
    }
  }, [isLoggedIn]);

  return (
    <div>
      <SignupModal />

      <Header />
      {children}
      {/* <CookieBanner /> */}
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default Layout;
