import { useSelector } from "react-redux";
import { shoesProducts } from "src/mock/shoesProducts";
import ProductListing from "../../src/component/productListing";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);

  return (
    <>
      <ProductListing products={shoesProducts} />
    </>
  );
};

export default ShopLeftSidebar;
