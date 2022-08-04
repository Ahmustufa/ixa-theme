import { Row, Col } from "antd";
import styled from "styled-components";
import Breadcrumb from "src/component/breadcrumb";
import { ButtonWrapper } from "src/component/buttons";

const StyledDiv = styled.div`
  .main-div {
    padding: 5%;
    .card-div {
      text-align: center;
      margin: 18px;

      .image-container {
        position: relative;
        margin: auto;
        overflow: hidden;
        img {
          transition: 0.5s ease;
          transform: scale(1);
          display: block;
        }
      }
      h3 {
        font-weight: 800;
      }
      p {
        color: #777;
      }

      &:hover {
        .image-container img {
          transform: scale(1.03);
          transition: all 0.4s ease;
        }
      }
    }
  }
`;

const CollectionPage = () => {
  const cardData = [
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/1-6e0d9dd6b7dce5366c9e4083f64849b9.jpg",
      stock: "20 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/3-220c8788eaed6274f1e67ac6359f37f5.jpg",
      stock: "18 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/5-0b508979d8ab0401751f8de8a959d366.jpg",
      stock: "28 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/6-69ba6fa3234c464b8e0f0e1b1da8c8b1.jpg",
      stock: "21 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/7-6392470f9d4e06ac5e0742eac26f46f7.jpg",
      stock: "17 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/8-e74712ace1e073f53f3d07e7e06f6625.jpg",
      stock: "27 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/9-1e7c3554c55dcb68ff680bb713bcdab8.jpg",
      stock: "03 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
    {
      title: "FASHION",
      image:
        "https://multikart-react.vercel.app/_next/static/images/11-5f2761d6c66bc6ff2ed24a1663826b0a.jpg",
      stock: "13 Products",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
    },
  ];
  return (
    <StyledDiv>
      <Breadcrumb
        style={{ margin: "20px 0px" }}
        title="ELEMENTS"
        link="HOME / ELEMENTS / COLLECTION"
      />
      <div className="w-100">
        <Row className="main-div">
          {cardData.map((data, index) => (
            <Col key={index} span={6}>
              <div className="card-div">
                <div className="image-container">
                  <img width="100%" src={data.image} />
                </div>
                <p style={{ marginTop: 12 }}>({data.stock})</p>
                <h3>{data.title}</h3>
                <p>{data.description}</p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ButtonWrapper style={{ width: 180 }}>Shop Now</ButtonWrapper>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </StyledDiv>
  );
};

export default CollectionPage;
