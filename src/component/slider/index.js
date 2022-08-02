import Slider from "react-slick";

const HomeSliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: "100%", backgroundColor: "red" }}>
      <Slider {...settings}>
        <div>
          <img
            width="100%"
            src="https://multikart-react.vercel.app/assets/images/home-banner/8.jpg"
          />
        </div>
        <div>
          <img
            width="100%"
            src="https://multikart-react.vercel.app/assets/images/home-banner/7.jpg"
          />
        </div>
      </Slider>
    </div>
  );
};
export default HomeSliderComponent;
