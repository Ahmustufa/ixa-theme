import Link from "next/link";
import styled from "styled-components";
import { Row, Col } from "antd";
import { AiFillHeart, AiFillWechat } from "react-icons/ai";
import moment from "moment";
import { image1 } from "../../../images";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../redux/actions";

const BlogListingCard = (props) => {
  const { id, title, image } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });

  return (
    <StyledCard>
      <Row gutter={[30, 30]}>
        <Col lg={12} sm={24} xs={24} className="w-100">
          <Link href={`/blog/${id}`} className="w-100">
            <div
              className="product-image img-fluid"
              style={{
                backgroundImage: `url(${image})`,
              }}
            ></div>
          </Link>
        </Col>

        <Col
          lg={12}
          sm={24}
          xs={24}
          className="d-flex flex-column justify-content-center"
        >
          <div className="createdAt">{moment(new Date()).format("ddd DD/MM/YYYY")}</div>
          <div className="product">
            <Link href={`/blog/${id}`}>{title}</Link>
          </div>

          <ul className="blog-created-date ">
            <li>Posted By : Admin Admin</li>
            <li>
              {" "}
              <AiFillHeart className="mr-1" size={16} />5 Hits
            </li>
            <li>
              <AiFillWechat className="mr-1" size={18} /> 10 Comment
            </li>
          </ul>

          <p className="mb-0 card-text">
            Consequences that are extremely painful. Nor again is there anyone who loves
            or pursues or desires to obtain pain of itself, because it is pain, but
            because occasionally circumstances occur in which toil and pain can procure
            him some great pleasure.
          </p>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default BlogListingCard;

const StyledCard = styled.div`
  margin-bottom: 30px;
  .product-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 280px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .createdAt {
    color: #ff4c3b;
    line-height: 1;
    margin-bottom: 10px;
    font-weight: 400;
  }

  .card-text {
    font-size: 14px;
    color: #777777;
    margin-top: 10px;
    line-height: 20px;
    letter-spacing: 0.03em;
  }
  .product a {
    color: #222222;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.03em;
    margin-top: 10px;
    margin-bottom: 0;
    transition: all 0.5s ease;
    :hover {
      color: #ff4c3b;
      transition: all 0.5s ease;
      text-decoration: none;
    }
  }

  .blog-created-date {
    list-style-type: none;
    margin-top: 10px;
    margin-bottom: 0px;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    li {
      color: #777777;
    }
    li:nth-child(n + 2) {
      margin-left: 10px;
      border-left: 1px solid #dddddd;
      padding-left: 10px;
    }
  }

  @media (max-width: 1024px) {
    .blog-created-date {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      li:nth-child(n + 2) {
        margin-left: 0px;
        border-left: none;
        padding-left: 0px;
      }
    }
  }
`;
