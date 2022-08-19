import { Row, Col, Collapse, Divider, message } from "antd";
import styled from "styled-components";
import Link from "next/link";
import RecentBlogs from "src/component/blogListing/recentBlogs";
import PopularBlogs from "src/component/blogListing/popularBlogs";
import BlogListingCard from "src/component/blogListing/blogListingCard";
import Breadcrumb from "src/component/breadcrumb";
import { bagsBlogs } from "src/mock/bagsProducts";

const BagBlogs = (props) => {
  return (
    <StyledPage>
      <Breadcrumb title="BLOG" link="HOME / BAG STORE / BLOGS" className="mt-5" />
      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[30, 30]} className="flex-column-reverse flex-lg-row">
          <Col lg={6} sm={24} xs={24}>
            <RecentBlogs data={bagsBlogs} />
            {/* <PopularBlogs className="mt-5" /> */}
          </Col>
          <Col lg={18} sm={24} xs={24}>
            {bagsBlogs.map((item, index) => {
              return <BlogListingCard key={index} {...item} />;
            })}
          </Col>
        </Row>
      </div>
    </StyledPage>
  );
};

export default BagBlogs;

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

  @media (max-width: 1024px) {
    .detail-section {
      padding: 20px !important;
    }
    .pagination-sec {
      padding: 20px !important;
    }
  }
`;
