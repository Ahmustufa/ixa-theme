import Slider from "react-slick";
import styled from "styled-components";

const StyledDiv = styled.div`
  .main-div {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center;
    h6 {
      margin-top: 14px;
      text-transform: capitalize;
    }
    .circle {
      margin: 0 auto;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 100%;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
      cursor: pointer;
      img {
        transition: 0.5s ease;
      }
      &:hover {
        background-color: #fa869b;
        transition: 0.5s ease;
        img {
          transition: 0.5s ease;
          filter: brightness(0) invert(1);
        }
      }
    }
  }
`;

const Category1 = (props) => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <StyledDiv style={{ padding: "5% 0" }} className="col-11 m-auto">
      <Slider {...settings}>
        {props.insideData.map((data, index) => (
          <div className="main-div">
            <div key={index}>
              <div className="circle">
                <img src={data.image} />
              </div>
              <h6>{data.title}</h6>
            </div>
          </div>
        ))}
      </Slider>
    </StyledDiv>
  );
};

export default Category1;
