import { Row, Col } from "antd";
import styled from "styled-components";
import { SwipeButton } from "../buttons";
import Slider from "react-slick";

const StyledSection = styled.section`
  height: 100vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  text-align: center;

  .video-container {
    height: 100vh;
    width: -webkit-fill-available;
    width: -moz-available;
    position: absolute;
    z-index: -1;

    :before {
      content: "";
      width: inherit;
      height: inherit;
      position: absolute;
      top: 0px;
      left: 0px;
      background: rgba(0, 0, 0, 0.67);
    }
    #bg-video {
      width: -webkit-fill-available;
      width: -moz-available;
      height: 100vh;
      object-fit: cover;
    }
  }

  .hero-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #fff;
    text-align: center;

    .main-heading {
      color: #fff;
      font-weight: 700;
      // font-family: "Open Sans Condensed", sans-serif;
      font-size: 48px;
    }

    .main-heading::after {
      content: "";
      display: block;
      height: 6px;
      width: 70%;
      margin: 20px auto;
      background-color: #ffa234;
      border-radius: 4px;
    }

    .sub-heading {
      color: #fff;
      font-size: 22px;
      font-weight: 600;
      width: 60%;
      margin: auto;
    }
  }

  .brand-logos {
    border-top: 1px solid gray;
    color: #fff;
    padding: 20px 0;
    width: 84%;

    .brand-images-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
`;

const HeroSection = (props) => {
  const { background, type, children } = props;
  let settings_3 = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSection className="hero-section">
      <div className="video-container">
        {type === "image" ? (
          <img id="bg-video" src={background} atl="background_image" />
        ) : (
          <video controls={false} autoPlay loop muted id="bg-video">
            <source src="/images/Banner_Video.mp4" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="hero-content">
        {children ? (
          children
        ) : (
          <div>
            <h1 className="main-heading">
              We’re Your One-Stop Solution for Efficient Web Design
            </h1>
            <h2 className="my-4 sub-heading">
              Searching for guaranteed ways to grow your business online? Getting yourself
              a professional website by the experts at LogiLogos is what you need.
            </h2>

            {/* <SwipeButton after="LETS GET STARTED">TALK TO OUR EXPERTS</SwipeButton> */}
          </div>
        )}
      </div>

      <div className="brand-logos">
        <Row className="col-lg-10 col-12 mx-auto" gutter={[0, 16]}>
          {/* <Col xl={12} md={12} sm={24} xs={24}>
            <p
              style={{
                // fontFamily: "Open Sans Condensed",
                fontSize: 20,
                fontWeight: 600,
                margin: 0,
              }}
            ></p>
          </Col> */}

          <Col span={24}>
            <div>
              {/* <img src="/images/abbot.png" alt="abbott logo" className="brand-images" />
              <img src="/images/pfizer.png" alt="pfizer logo" className="brand-images" />
              <img src="/images/cisco.png" alt="cisco logo" className="brand-images" /> */}
              <Slider {...settings_3}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div>
                    <img
                      src={`/images/Trusted_Brands_${item}.png`}
                      alt={`Trusted_Brands_${item}`}
                      key={item}
                      className="brand-image m-auto"
                      height={item >= 3 && item <= 6 ? 48 : 24}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </div>
    </StyledSection>
  );
};

export default HeroSection;
