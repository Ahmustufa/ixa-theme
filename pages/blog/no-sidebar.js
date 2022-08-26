import { useEffect, useState } from "react";
import { Row, Col, Collapse, Pagination } from "antd";
import styled from "styled-components";
import Breadcrumb from "src/component/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import BlogListingCard from "../../src/component/blogListing/blogListingCard";
import BlogCard2 from "src/component/cards/blogCard2";
import { bagsBlogs } from "src/mock/bagsProducts";
import { clothBlogs, clothProducts } from "src/mock/clothProducts";

let pageSize = 8;

const NoSidebar = (props) => {
  const [page, setPage] = useState({
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (page) => {
    setPage({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };

  useEffect(() => {
    setPage({
      current: 1,
      minIndex: (1 - 1) * pageSize,
      maxIndex: 1 * pageSize,
    });
  }, []);

  return (
    <StyledPage>
      <Breadcrumb title="BLOG" link="BLOG / WITHOUT SIDEBAR" className="my-5" />

      <div style={{ padding: 80 }} className="detail-section">
        <Row gutter={[0, 40]} className="">
          {[...clothProducts, ...bagsBlogs].map(
            (item, index) =>
              index >= page.minIndex &&
              index < page.maxIndex && (
                <Col lg={6} sm={24} xs={24}>
                  <BlogCard2 key={index} {...item} />
                </Col>
              )
          )}
        </Row>
        <Pagination
          pageSize={pageSize}
          className="mt-5"
          defaultCurrent={1}
          current={page.current}
          onChange={(e) => handleChange(e)}
          total={[...clothProducts, ...bagsBlogs].length}
        />
      </div>
    </StyledPage>
  );
};

export default NoSidebar;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
