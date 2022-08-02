import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/mie.scss";
import "styles/globals.scss";
import "src/component/header/header.style.scss";
import "src/component/header/header2.style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../src/component/layouts/mainLayout";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/ConfigStore";
import { PersistGate } from "redux-persist/integration/react";
import Router from "next/router";
import PageChange from "../src/component/PageChange";
import ReactDOM from "react-dom";
// import CookieBanner from "../src/component/cookieBanner";
import { useEffect } from "react";
import * as ga from "react-ga";
import { useRouter } from "next/router";
import AuthModal from "../src/component/modals/authModal";
import SideCart from "../src/component/sidebar/sideCart";

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(<PageChange path={url} />, document.getElementById("page-transition"));
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  /**
   * Addng a div element with id page transition to show loading screen when switching between pages
   */
  if (typeof window !== "undefined") {
    const myDiv = document.createElement("div");
    myDiv.id = "page-transition";
    const body = document.querySelector("body");
    body.appendChild(myDiv);
  }

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          {/* <CookieBanner /> */}
          <AuthModal />
          <SideCart />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
