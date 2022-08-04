import styled from "styled-components";
import { Row, Col } from "antd";
import { FiTruck } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiSecurePaymentLine } from "react-icons/ri";

const StyledDiv = styled.div`
  .main-row {
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    padding: 5% 0px;
    min-height: 170px;
    align-items: center;

    .main-div {
      display: flex;
      align-items: center;
      justify-content: center;
      .icons {
        font-size: 50px;
        color: #6859a6;
        margin-right: 16px;
        transition: all 0.3s ease;
      }

      .text {
        h5 {
          font-weight: 600;
          margin: 0;
          transition: 0.2s ease;
        }
        p {
          margin: 0;
          color: #777;
        }
      }

      &:hover {
        .text {
          h5 {
            color: #6859a6;
            transition: 0.2s ease;
          }
        }
        .icons {
          transform: scale(1.1);
          animation: pulse 1s ease-in-out;
          transition: all 0.3s ease;
        }
      }
    }
  }
`;

const Service1 = () => {
  return (
    <StyledDiv>
      <Row className="main-row">
        <Col span={6} style={{ borderRight: "2px solid #e4e4e4" }}>
          <div className="main-div">
            <FiTruck className="icons" />
            <div className="text">
              <h5>FREE SHIPPING</h5>
              <p>Free Shipping World Wide</p>
            </div>
          </div>
        </Col>

        <Col span={6} style={{ borderRight: "2px solid #e4e4e4" }}>
          <div className="main-div">
            <AiOutlineFieldTime className="icons" />
            <div className="text">
              <h5>24 X 7 SERVICE</h5>
              <p>Online Service For New Customer</p>
            </div>
          </div>
        </Col>

        <Col span={6} style={{ borderRight: "2px solid #e4e4e4" }}>
          <div className="main-div">
            <HiOutlineSpeakerphone className="icons" />
            <div className="text">
              <h5>FESTIVAL OFFER</h5>
              <p>New Online Special Festival Offer</p>
            </div>
          </div>
        </Col>

        <Col span={6}>
          <div className="main-div">
            <RiSecurePaymentLine className="icons" />
            <div className="text">
              <h5>ONLINE PAYMENT</h5>
              <p>Online Payment Feature</p>
            </div>
          </div>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Service1;
