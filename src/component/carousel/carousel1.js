import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ButtonWrapper } from "src/component/buttons";

const Carousel1 = (props) => {
  const { data } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const index = (currentImageIndex + 1) % data.length;
      setCurrentImageIndex(index);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [currentImageIndex]);

  return (
    <StyledCarousel>
      <div
        className="btn previous"
        onClick={() => {
          const index = Math.abs(currentImageIndex - 1) % data.length;
          setCurrentImageIndex(index);
        }}
      >
        <FiChevronLeft className="icon" />
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="carousel"
          style={{
            right: currentImageIndex === index ? "0" : "100%",
          }}
        >
          <div className="content" style={{ alignItems: item.placement }}>
            <h4 className="sub-heading">{item.subHeading}</h4>
            <h2 className="heading">{item.heading}</h2>
            <ButtonWrapper style={{ width: 250 }}>SHOP NOW</ButtonWrapper>
          </div>
          <img key={index} src={item.image} alt={`imag`} className="image" />
        </div>
      ))}

      <div
        className="btn next"
        onClick={() => {
          const index = (currentImageIndex + 1) % data.length;
          setCurrentImageIndex(index);
        }}
      >
        <FiChevronRight className="icon" />
      </div>
    </StyledCarousel>
  );
};

Carousel1.defaultProps = {
  data: [
    {
      image: "https://multikart-react.vercel.app/assets/images/home-banner/6.jpg",
      subHeading: "Welcome To Fashion",
      heading: "Leather Bags",
      link: "#",
      placement: "center",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/home-banner/7.jpg",
      subHeading: "Welcome To Fashion",
      heading: "Women Bags",
      link: "#",
      placement: "center",
    },
    {
      image: "https://multikart-react.vercel.app/assets/images/home-banner/8.jpg",
      subHeading: "Welcome To Fashion",
      heading: "Men Bags",
      link: "#",
      placement: "center",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0555/1000/7999/files/rtw-creation-14-august-azadi-sale-desktop.jpg",
      subHeading: "Get FREE shipping when you buy any two!",
      heading: "AZADI SALE",
      link: "#",
      placement: "end",
    },
  ],
};

export default Carousel1;

const StyledCarousel = styled.div`
  overflow: hidden;
  position: relative;

  height: 600px;
  width: 100%;

  .carousel {
    position: absolute;
    inset: 0;
    transition: all 0.3s;
    overflow: hidden;
  }

  .content {
    position: absolute;
    inset: 0;
    left: 15%;
    right: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 200;
  }

  .image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 100;
  }

  .btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
    z-index: 300;
  }

  .icon {
    font-size: 24px;
    color: #000;
  }

  .previous {
    left: -64px;
  }
  .next {
    right: -64px;
  }

  :hover {
    .previous {
      left: 64px;
    }
    .next {
      right: 64px;
    }
  }

  .sub-heading {
    font-size: 20px;
    color: #727272;
  }
  .heading {
    font-size: 64px;
    color: #222;
    text-transform: uppercase;
    margin: 12px 0;
    font-weight: 700;
  }
`;
