import Header from "../header/headerWrapper.js";
import Footer from "../footer/footerWrapper.js";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { message } from "antd";
import { useFetch } from "../../hooks/useFetch";
import { Queries, errorHandler } from "../../api/config";
import { storeAllProducts } from "../../redux/actions";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const [getAllProducts, loading] = useFetch(Queries.getAllProducts);

  useEffect(() => {
    getAllProducts()
      .then(({ data }) => {
        console.log("Products data: ", data);
        dispatch(storeAllProducts(data));
      })
      .catch((err) => message.error(errorHandler(err)));
  }, []);

  return (
    <div>
      <div style={{ height: Router.pathname === "/" ? 0 : 88 }}>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
