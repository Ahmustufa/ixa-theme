import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Collapse, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;

  .ant-collapse-header {
    border: 1px solid #ececec;

    padding: 16px 36px 16px 16px;

    font-size: 18px;
    color: rgb(78, 78, 78);
    font-weight: 500;
    cursor: pointer;
  }

  .ant-collapse-content {
    border: 1px solid #ececec !important;
    p {
      font-size: 14px;
      color: #4c4a4a;
      font-weight: 500;
      line-height: 24px;
      margin: 0px;
    }
  }

  .ant-collapse-item-active {
    .ant-collapse-header {
      color: #001a33 !important;
    }
  }

  .ant-collapse-borderless
    > .ant-collapse-item
    > .ant-collapse-content
    > .ant-collapse-content-box {
    padding: 16px;
  }

  .ant-collapse-borderless > .ant-collapse-item {
    border-bottom: 0px;
    margin-bottom: 24px;
    background-color: #fff;
  }

  .ant-collapse-borderless {
    background-color: #fff;
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    .ant-collapse-content {
      p {
        font-size: 14x;
      }
    }
    .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
  }
`;

const Faq = () => {
  const { Panel } = Collapse;
  return (
    <StyledDiv>
      {/* <Heading title="FAQ's - Frequently asked questions"></Heading> */}

      <Row gutter={[40, 10]}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          {faqs1.map((faq, index) => (
            <Collapse
              key={index}
              accordion={false}
              bordered={false}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  style={{ color: "#001A33", fontSize: 16 }}
                  rotate={isActive ? 135 : 0}
                />
              )}
            >
              <Panel header={`${faq.question}`} key={index}>
                <p>{faq.answer}</p>
              </Panel>
            </Collapse>
          ))}
        </Col>

        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          {faqs2.map((faq, index) => (
            <Collapse
              key={index}
              accordion={false}
              bordered={false}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <PlusOutlined
                  style={{ color: "#001A33", fontSize: 16 }}
                  rotate={isActive ? 135 : 0}
                />
              )}
            >
              <Panel header={`${faq.question}`} key={index}>
                <p>{faq.answer}</p>
              </Panel>
            </Collapse>
          ))}
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default Faq;

const faqs1 = [
  {
    question: "How can I access my website and see the progress?",
    answer:
      "We appreciate it when our clients want to see the updates and progress themselves. You’ll be provided with login credentials to access secure Client portal and watch the progress. We would love getting your feedback and suggestions.",
  },
  {
    question: "Can you Revamp my existing website?",
    answer:
      "We certainly can do that! Proceeding towards websites redesigns sensitively is very important to understand your reasons for revamping it. We make sure we understand you well and play our role in modifying it according to your requirements.",
  },
  {
    question: "How effective is my website for my business growth?",
    answer:
      "In this digital age, websites give you the credibility and strengthen your existence globally as well as locally. Having a website establishes your brand and provides you with the opportunity to build long-term online relationships with your clients. At LogiLogos we make sure that your website, logo or App stands at par with the global standards and represent you in the best way.",
  },
  {
    question: "How can I get revisions in my website during the development stage?",
    answer:
      "Your input during the development phase is the most crucial factor for us. We would love getting your input during your website development process. For that your dedicated Account Manager will keep in touch with you and make sure that the website design and content is according to your needs and wants. We strive for this communication to be swift to provide you just the right look and functionality in the shortest possible time.",
  },
  {
    question: "When do I get complete ownership for my website?",
    answer:
      "When your website is completely developed and accepted by you. You will be given the credentials to access it and a Project delivery sign off document will ensure the full ownership transferred to you.",
  },
];

const faqs2 = [
  {
    question: "How long will you take to design & develop a website?",
    answer:
      "The duration of the project completely depends on the needs of our clients. Two of the most important factors that decide the pace of the project are your availability of giving timely feedback and your business requirements i.e. features in the website.",
  },
  {
    question: "Do you provide professional content writing services as well?",
    answer:
      "Yes we do! At an additional cost, our professional and innovative content writing team will compose the befitting content that will define and strengthen your business’ online presence.",
  },
  {
    question: "How Costly is the entire website project?",
    answer: (
      <p>
        {`LogiLogos’ pricing plan is simple and transparent. The total expense depends upon the complexity of the project based on your business requirements and the services you choose. You can view our`}{" "}
        <Link href="/pricing">
          <a>pricing plan here.</a>
        </Link>
      </p>
    ),
  },
  {
    question: "How would I use my website as an Owner / Admin?",
    answer:
      "You will be given full access to the Admin area of your website and will be given enough training to become familiarized and use it effectively.",
  },
  {
    question: "What is a domain and Web Hosting?",
    answer:
      "A domain is a name you want users to enter in the internet browser to access your website like name of a building. Web hosting is an online service allowing to produce your website files onto the internet like the actual building. With that being said, everyone who has access to the internet would be having an access to your website through the hosting server. Each website plan that we offer comes with free domain and hosting for 1 year.",
  },
];
