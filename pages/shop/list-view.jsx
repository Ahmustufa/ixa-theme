import { useSelector } from "react-redux";
import ProductListing from "../../src/component/productListing";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);
  return (
    <>
      <ProductListing products={items} />
    </>
  );
};

export default ShopLeftSidebar;
