import ProductVerticalCarousel from "../productListing/productVerticalCarousel";
import SidebarFiltration from "./sidebarFiltration";

const ShopSidebar = (props) => {
  return (
    <div>
      <SidebarFiltration />
      <ProductVerticalCarousel />
    </div>
  );
};

export default ShopSidebar;
