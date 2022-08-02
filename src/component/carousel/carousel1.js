import { useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel1 = (props) => {
  const { images } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <StyledCarousel>
      <div
        className="btn previous"
        onClick={() => {
          const index = Math.abs(currentImageIndex - 1) % 4;
          setCurrentImageIndex(index);
        }}
      >
        <FiChevronLeft className="icon" />
      </div>

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`imag`}
          className="image"
          style={{
            right: currentImageIndex === index ? "0" : "100%",
          }}
        />
      ))}

      <div
        className="btn next"
        onClick={() => {
          const index = (currentImageIndex + 1) % 4;
          setCurrentImageIndex(index);
        }}
      >
        <FiChevronRight className="icon" />
      </div>
    </StyledCarousel>
  );
};

Carousel1.defaultProps = {
  images: [
    "https://multikart-react.vercel.app/assets/images/home-banner/6.jpg",
    "https://multikart-react.vercel.app/assets/images/home-banner/7.jpg",
    "https://multikart-react.vercel.app/assets/images/home-banner/8.jpg",
    "https://multikart-react.vercel.app/assets/images/home-banner/9.jpg",
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
  }

  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
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
`;
