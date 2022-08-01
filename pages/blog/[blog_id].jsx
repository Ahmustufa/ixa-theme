import { Row, Col, Collapse, Divider, message } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";
import { PrimaryButton } from "../../src/component/buttons";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ReviewListing from "../../src/component/reviews/reviewListing";
import { useState } from "react";
import axios from "axios";
import { addItemToCart, openCart } from "../../src/redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../src/redux/actions";
import { Mutations, errorHandler, useFetch } from "../../src/api/config";
import Link from "next/link";
import { blogBanner, image2, image3 } from "../../images";

const { Panel } = Collapse;

const BlogDetail = (props) => {
  const { title, colors, reviews } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const { isLoggedIn, data: userData } = useSelector((state) => state.user);
  const { visible, items } = useSelector((state) => state.cart);

  const [state, setState] = useState({ color: "", size: "" });

  return (
    <StyledPage>
      <div className="pagination-sec mt-5">
        <Row className="d-flex justify-content-end align-items-center">
          <Col lg={6} sm={24} xs={24}>
            <h5 className="m-0 text-dark">BLOG DETAILS</h5>
          </Col>
          <Col
            lg={18}
            sm={24}
            xs={24}
            className="d-flex justify-content-sm-start justify-content-lg-end"
          >
            <Link href="">
              <p className="m-0 mx-1"> HOME / </p>
            </Link>{" "}
            <Link href="">
              <p className="m-0 mx-1"> BLOG </p>
            </Link>{" "}
            <span> / TITLE</span>
          </Col>
        </Row>
      </div>
      <div style={{ padding: 80 }} className="detail-section">
        <img src={blogBanner} width="100%" />
        <h4 className="my-3">
          ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED.
        </h4>
        <ul className="blog-created-date d-flex flex-wrap justify-content-start align-items-center">
          <li>25 January 2018</li>
          <li>Posted By : Admin Admin</li>
          <li>5 Hits</li>
          <li>10 Comment</li>
        </ul>
        <Divider style={{ background: "#dddddd", marginTop: 0, marginBottom: 15 }} />
        <p>
          Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue
          id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus
          ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida,
          lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce molestie
          ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et dapibus odio
          condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris
          luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu dignissim quam,
          a gravida nunc nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin
          accumsan orci ac nunc fermentum vehicula.
        </p>
        <p>
          Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue
          id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus
          ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida,
          lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce molestie
          ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et dapibus odio
          condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris
          luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu dignissim quam,
          a gravida nunc nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin
          accumsan orci ac nunc fermentum vehicula.
        </p>
        <p>
          Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis augue
          id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus. Vivamus
          ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus gravida,
          lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce molestie
          ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et dapibus odio
          condimentum id. Quisque malesuada mauris sit amet dui feugiat, ut pretium mauris
          luctus. Ut aliquam, tellus nec molestie condimentum, tellus arcu dignissim quam,
          a gravida nunc nulla vel magna. Sed pulvinar tortor et euismod blandit. Proin
          accumsan orci ac nunc fermentum vehicula.
        </p>
        <Row gutter={[30]}>
          <Col lg={12} sm={24} xs={24}>
            <img src={image2} width="100%" className="mb-3" />
            <ul className="list-style">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <li key={item}>Aenean in mi eu elit mollis tincidunt.</li>
              ))}
            </ul>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <img src={image2} width="100%" className="mb-3" />
            <p>
              Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
              augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus.
              Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus
              gravida, lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce
              molestie ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et
              dapibus odio condimentum id. Quisque malesuada mauris sit amet dui feugiat,
              ut pretium mauris luctus. Ut aliquam, tellus nec molestie condimentum,
              tellus arcu dignissim quam, a gravida nunc nulla vel magna. Sed pulvinar
              tortor et euismod blandit. Proin accumsan orci ac nunc fermentum vehicula.
            </p>
            <p>
              Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
              augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus.
              Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus
              gravida, lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce
              molestie ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et
              dapibus odio condimentum id. Quisque malesuada mauris sit amet dui feugiat,
              ut pretium mauris luctus. Ut aliquam, tellus nec molestie condimentum,
              tellus arcu dignissim quam, a gravida nunc nulla vel magna. Sed pulvinar
              tortor et euismod blandit. Proin accumsan orci ac nunc fermentum vehicula.
            </p>
            <p>
              Fusce scelerisque augue a viverra semper. Etiam nisi nibh, vestibulum quis
              augue id, imperdiet fringilla dolor. Nulla sed nisl vel nisi cursus finibus.
              Vivamus ut augue nec justo viverra laoreet. Nunc efficitur, arcu ac cursus
              gravida, lorem elit commodo urna, id viverra libero tellus non ipsum. Fusce
              molestie ultrices nibh feugiat pretium. Donec pulvinar arcu metus, et
              dapibus odio condimentum id. Quisque malesuada mauris sit amet dui feugiat,
              ut pretium mauris luctus. Ut aliquam, tellus nec molestie condimentum,
              tellus arcu dignissim quam, a gravida nunc nulla vel magna. Sed pulvinar
              tortor et euismod blandit. Proin accumsan orci ac nunc fermentum vehicula.
            </p>
          </Col>
        </Row>
        <Divider style={{ background: "#dddddd" }} />
        <div className="review-section">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Row key={item} className="review">
                <Col
                  lg={2}
                  sm={24}
                  xs={24}
                  className="d-flex justify-content-sm-center justify-content-lg-start align-items-sm-end  align-items-lg-start"
                >
                  <img
                    src="https://angular.pixelstrap.com/multikart/assets/images/review/2.jpg"
                    width={"60%"}
                    className="rounded-circle"
                  />
                </Col>
                <Col lg={22} sm={24} xs={24} className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <h6 className="mb-0">MARK JECNO </h6>
                    <p className="mb-0 ml-4">( 12 Jannuary 2018 At 1:30AM )</p>
                  </div>
                  <p className="mb-0 mt-3">
                    Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit
                    amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu
                    laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec
                    felis dui. Integer tristique odio mi, in volutpat metus posuere eu.
                    Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id
                    elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam
                    vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis
                    erat tempor quis. Vestibulum eu vestibulum ex.
                  </p>
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
    </StyledPage>
  );
};

export default BlogDetail;

const StyledPage = styled.div`
  .pagination-sec {
    background: #f8f8f8;
    padding: 30px 80px;
    p {
      color: #555555;
      font-weight: 600;
    }
    p:hover {
      cursor: pointer;
      color: #000;
    }
    span {
      color: #6c757d;
    }
  }
  .detail-section {
    .blog-created-date {
      list-style-type: none;
      padding-left: 0px;
      li {
        color: #777777;
      }
      li:nth-child(n + 2) {
        margin-left: 10px;
        border-left: 1px solid #dddddd;
        padding-left: 10px;
      }
    }
    p {
      font-size: 14px;
      color: #777777;
      line-height: 24px;
      letter-spacing: 0.03em;
    }
  }
  .list-style {
    list-style-type: decimal;
    list-style-position: inside;
    line-height: 2.5;
    font-size: 15px;
    padding-left: 0;
    li {
      display: list-item;
      font-weight: 700;
    }
  }
  .review {
    border-bottom: 1px solid #dddddd;
    padding: 60px 0px;
  }
  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
