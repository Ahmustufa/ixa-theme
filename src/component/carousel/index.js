import { Row, Col } from "antd";
import styled from "styled-components";
import { useRef, useState } from "react";

const ImageCarousel = (props) => {
  const { direction, images, id } = props;
  const [state, setState] = useState({ image: images[0] });

  return (
    <StyledCarousel>
      <Row gutter={[24, 24]}>
        <Col xs={direction === "bottom" ? 24 : 18} order={direction === "right" ? 2 : 1}>
          <img
            id={id}
            key={id}
            src={state.image}
            alt={`preview_image_${id}`}
            className="preview-image img-fluid"
          />
        </Col>

        <Col
          className={direction === "bottom" ? "d-flex" : ""}
          xs={direction === "bottom" ? 24 : 6}
          order={direction === "right" ? 1 : 2}
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setState({ image });
              }}
              role="button"
              className="w-100"
            >
              <img
                width={"100%"}
                src={image}
                alt={`image-${index}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Col>
      </Row>
    </StyledCarousel>
  );
};

ImageCarousel.defaultProps = {
  direction: "bottom",
};

export default ImageCarousel;

const StyledCarousel = styled.div`
  .carousel-image {
    /* width: 100px; */
    height: auto;
    object-size: cover;
    border: 1px solid #727272;
    border-radius: 2px;
    margin: 8px;
    cursor: pointer;
  }
`;
