import { useSelector } from "react-redux";
import ProductListing from "../../src/component/productListing";

const ShopLeftSidebar = (props) => {
  const { items } = useSelector((state) => state.products);

  const productCarouselData = [
    {
      _id: 1,
      image: "/images/shoes/featured/1.webp",
      title: "Metal Decor Combat Boots",
      brandName: "Caperion",
      price: 599,
      link: "#",
    },
    {
      _id: 2,
      image: "/images/shoes/featured/2.webp",
      title: "Knit Chunky Sock Boots",
      brandName: "CUCCOO",
      price: 1199,
      link: "#",
    },
    {
      _id: 3,
      image: "/images/shoes/featured/3.webp",
      title: "Knit Chunky Heel",
      brandName: "Vutte wixo",
      price: 1099,
      link: "#",
    },
    {
      _id: 4,
      image: "/images/shoes/featured/4.webp",
      title: "Minimalist Flatform Pumps",
      brandName: "Caperion",
      price: 599,
      link: "#",
    },
    {
      _id: 5,
      image: "/images/shoes/featured/5.webp",
      title: "Point Toe Stiletto Heeled",
      brandName: "Caperion",
      price: 599,
      link: "#",
    },
    {
      _id: 6,
      image: "/images/shoes/featured/6.webp",
      title: "Mesh Panel Lace Up Trainers",
      brandName: "CUCCOO",
      price: 1199,
      link: "#",
    },
  ];

  return (
    <>
      <ProductListing products={productCarouselData} />
    </>
  );
};

export default ShopLeftSidebar;
