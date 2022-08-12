import Link from "next/link";
import styled from "styled-components";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import moment from "moment";
import { image1 } from "../../../images";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishlist, removeWishlistItem } from "../../redux/actions";
import { cardBackground1 } from "../../../images";

const BlogCard = (props) => {
  const { id, title, images } = props;
  const dispatch = useDispatch();
  const { items: wishlist } = useSelector((state) => state.wishlist);
  const formatedPrice = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "PKR",
  });
  console.log("props blog card", props);
  return (
    <StyledCard>
      <Link href={`/blog/${id}`}>
        <div className="product-image" style={{ backgroundImage: `url(${images[0]})` }}>
          <span></span>
        </div>
      </Link>

      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="createdAt">{moment(new Date()).format("ddd DD/MM/YYYY")}</div>
        <div className="product">
          <Link href={`/blog/${id}`}>{title}</Link>
        </div>
        <div
          style={{
            margin: "5px 25%",
            height: 3,
            width: "20%",
            backgroundColor: "#ff4c3b",
            borderRadius: 50,
          }}
        ></div>
        <p style={{ color: "#777777", marginTop: 10 }}>
          by:<span>John Dio, 2 Comment</span>
        </p>
      </div>
    </StyledCard>
  );
};

export default BlogCard;

const StyledCard = styled.div`
  margin: 0 24px;
  .product-image {
    background-size: cover;
    background-position: center;
    height: 250px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    z-index: 999;
    overflow: hidden;
    :hover {
      transition: 0.5s ease;
    }

    ::before {
      background: #ff4c3b;
      width: 25%;
      position: absolute;
      content: "";
      opacity: 0;
      transition: all 0.3s steps(4);
      z-index: 1;
      bottom: 100%;
      top: 0;
    }
    ::after {
      background: #ff4c3b;
      width: 25%;
      position: absolute;
      content: "";
      opacity: 0;
      transition: all 0.3s steps(4);
      z-index: 1;
      bottom: 100%;
      top: 0;
    }

    span::before {
      background: #ff4c3b;
      width: 25%;
      position: absolute;
      content: "";
      opacity: 0;
      transition: all 0.3s steps(4);
      z-index: 1;
      bottom: 100%;
      top: 0;
    }
    span::after {
      background: #ff4c3b;
      width: 25%;
      position: absolute;
      content: "";
      opacity: 0;
      transition: all 0.3s steps(4);
      z-index: 1;
      bottom: 100%;
      top: 0;
    }

    ::before {
      left: 0;
      transition-delay: 0s;
    }
    :hover::before {
      bottom: 0;
      opacity: 0.5;
    }
    ::after {
      left: 25%;
      transition-delay: 0.025s;
    }
    :hover::after {
      bottom: 0;
      opacity: 0.5;
    }

    span::before {
      left: 50%;
      transition-delay: 0.05s;
    }
    :hover span::before {
      bottom: 0;
      opacity: 0.5;
    }
    span::after {
      left: 75%;
      transition-delay: 0.15s;
    }
    :hover span::after {
      bottom: 0;
      opacity: 0.5;
    }
  }
  .createdAt {
    color: #ff4c3b;
    margin-top: 25px;
    line-height: 1;
  }

  .product a {
    color: #222222;
    font-size: 18px;
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

  .product {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
    color: #000;
    margin: 12px 0;
  }

  .price {
    font-size: 16px;
    font-weight: 600;
    color: #54595f;
  }

  .new_item_tag {
    width: 40px;
    height: 40px;
    background: #f54c3b;
    p {
      font-size: 10px;
      margin-bottom: 0;
      color: #fff;
    }
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
