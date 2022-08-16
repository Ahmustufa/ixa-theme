import Link from "next/link";
import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Rate, Row, Col } from "antd";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSync,
} from "react-icons/ai";

const ProductCardWithIcons = (props) => {
  const { _id, title, brandName, price, images, listView } = props;

  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  return (
    <StyledCard>
      <Row justify="space-between">
        <Col
          xs={24}
          sm={24}
          md={listView ? 8 : 24}
          lg={listView ? 6 : 24}
          xl={listView ? 4 : 24}
        >
          <Link href={`/product/${_id}`}>
            <div
              className="image-container"
              style={{ backgroundImage: `url(${images[0]})` }}
            ></div>
          </Link>
          <div className="new-item">NEW</div>

          <div className="icon-section">
            <div className="icon icon-1">
              <AiOutlineShoppingCart size={20} title={"Add to cart"} />
            </div>
            <div className="icon icon-2">
              <AiOutlineHeart size={20} title={"Add to wishlist"} />
            </div>
            <div className="icon icon-3">
              <AiOutlineSearch size={20} title={"Quick view"} />
            </div>
            <div className="icon icon-4">
              <AiOutlineSync size={20} title={"Compare"} />
            </div>
          </div>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={listView ? 15 : 24}
          lg={listView ? 17 : 24}
          xl={listView ? 19 : 24}
        >
          <div className="item-details">
            <div className="product mt-2">{title}</div>
            <div className="company mt-2">{brandName}</div>
            <Rate defaultValue={4} disabled style={{ color: "#ffa200", fontSize: 13 }} />

            <div className="price">
              {formatedPrice.format(price)}{" "}
              <small style={{ color: "#858585", textDecoration: "line-through" }}>
                PKR {price * 1.5}
              </small>
            </div>

            {listView ? (
              <div className="description">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters.
              </div>
            ) : null}
          </div>
        </Col>
      </Row>
    </StyledCard>
  );
};

ProductCardWithIcons.defaultProps = {
  brandName: "Spotlight on Style",
};

export default ProductCardWithIcons;

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  margin-left: 5%;
  margin-right: 5%;

  .image-container {
    border-radius: 4px;
    text-align: center;
    width: 100%;
    padding-top: 130%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .icon-section {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 8px;
  }

  .icon {
    position: absolute;
    left: -48px;
    cursor: pointer;
    background-color: #fde4e4;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #f2f2f2;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.09);
    transition: all 0.6s;
    :hover {
      background-color: #ff0000a8;
      color: #fff;
    }
  }

  .icon-1 {
    top: 8px;
    transition-delay: 0.1s;
  }
  .icon-2 {
    top: 48px;
    transition-delay: 0.2s;
  }
  .icon-3 {
    top: 88px;
    transition-delay: 0.3s;
  }
  .icon-4 {
    top: 128px;
    transition-delay: 0.4s;
  }

  :hover {
    .icon-1,
    .icon-2,
    .icon-3,
    .icon-4 {
      left: 0px;
    }
  }

  .item-details {
    overflow: hidden;
    position: relative;
  }

  .company {
    font-size: 14px;
    color: #abb8c3;
    font-weight: 600;
  }

  .product {
    font-size: 18px;
    font-weight: 400;
    color: #000;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #54595f;
  }

  .new-item {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f54c3b;
    color: #fff;
    line-height: 36px;
    text-align: center;
    font-size: 10px;
    cursor: context-menu;
  }

  .description {
    color: #727272;
    font-size: 13px;
    margin-top: 12px;
  }

  @media only screen and (max-width: 1200px) {
    .item-details {
      left: 96%;
    }
  }

  @media only screen and (max-width: 576px) {
    margin: 0 12px;
  }
`;
