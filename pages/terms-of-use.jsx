import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const StyledDiv = styled.div`
  .gray-portion-div {
    background-color: #fff;
    padding: 120px 10% 40px 10%;
    p {
      font-size: 16px;
      color: rgb(69, 80, 98);
      margin-bottom: 30px;
    }
    h3 {
      color: rgb(69, 80, 98);
    }
    h6 {
      font-weight: 700;
      color: rgb(69, 80, 98);
      margin-bottom: 20px;
    }
    h1 {
      font-weight: 600;
      color: rgb(69, 80, 98);
    }
    ul {
      padding-left: 30px;
      margin-bottom: 30px;
    }
    li {
      font-size: 16px;
      color: rgb(69, 80, 98);
      font-weight: 300;
    }
  }

  @media (max-width: 767px) {
    .top-banner-text {
      text-align: center;
      h6 {
        padding: 0px 0px 4% 0px;
      }
    }
    .banner-image-col {
      justify-content: center;
    }
    .top-banner {
      background-color: #fff;
      img {
        width: 250px;
      }
    }
    .gray-portion-div {
      background-color: #f6f6f6;
      p {
        font-size: 16px;
      }
      h3 {
        font-size: 22px;
      }
      li {
        font-size: 16px;
      }
    }
  }
`;

const TermOfUse = () => {
  return (
    <>
      <Head>
        <title>Terms of use |  iXiaThemes</title>
      </Head>

      <StyledDiv>
        <div className="gray-portion-div">
          <h1 style={{ textAlign: "center", marginBottom: 40 }}>
            Terms and Conditions of Use
          </h1>
          <p>
            {`At  iXiaThemes, we have rendered our terms and conditions in such a manner that
            you won't find it difficult to understand. Agreeing to our terms and
            conditions will help us in providing with the security that we have pledged
            for. It is advised to read terms and conditions properly carefully as to avoid
            perplexity in future.`}
          </p>

          <h3>Revision Policy</h3>
          <p>
            We provide guaranteed unlimited revision. Customers can ask us for unlimited
            free revisions and we will revise their design without any additional charges
            provided that the design and concept remain the same. Revision Turnaround Time
            would be 48 hours.
          </p>

          <h3>Refund Policy</h3>
          <p>
            <span style={{ fontWeight: 700 }}> iXiaThemes.com</span> ensures 100%
            customer satisfaction with our unlimited free Revision Policy which enables
            you to improve on your initial design brief free of charge through your
            account area. <br />
            <br />
            In case of any duplicate charge due to processing error, your complete design
            order amount will be refunded. <br />
            <br />
            In case of any dissatisfaction from any design services provided by
             iXiaThemes.com, you can submit a refund request within 48 hours of your
            initial designs completion. However, it shall be assumed between both parties
            that you are satisfied with your initial designs if a refund request is not
            received within 48 hours of initial designs delivery. For any Special / Combo
            packages, refund will be applicable the same as it is on the single packages.
            <br />
            <br />
            Your refund would be processed as per the chart below:
            <br />
            <br />
            All refund requests will be fulfilled as per the following arrangement:
          </p>
          <ul>
            <li>
              If refund request is made after 48 hours of initial design samples delivery,
              then it won’t be eligible for any refund. It will be assumed that the
              customer is satisfied with design samples provided.
            </li>
            <li>
              No refund request will be entertained if you have placed any revision on the
              design samples provided.
            </li>
          </ul>
          <p>
            All refund requests will be subject to approval or disapproval.
             iXiaThemes.com has the right to disapprove or approve any refund request
            based on any policy violations made by the customer. This would differ from
            project to project.
          </p>

          <h6>How to claim your refund</h6>
          <p>
            To assure your refund request is approved, please make sure you meet the
            following requirements:
          </p>
          <p style={{ marginTop: 20, marginBottom: 20 }}>
            1. Claim your refund specifying your concern by contacting us via any of the
            following three modes:
          </p>
          <ul>
            <li>
              Call Customer support at{" "}
              <Link href="tel:+14086220105">
                <a>+1-408-622-0105</a>
              </Link>
            </li>
            <li>
              Live Chat.
              <a> Click here </a>
              to start chat now
            </li>
            <li>
              <Link href="/contact_us">
                <a>Click here</a>
              </Link>{" "}
              to contact us for a prompt response OR email us support@ iXiaThemes.com
            </li>
          </ul>

          <p style={{ marginTop: 20, marginBottom: 20 }}>
            2. We will try to resolve your concern by virtue of our revision policy
            immediately or else will email you a refund request approval from our refund
            department.
          </p>
          <p>
            After the refund, your design rights would be obtained by  iXiaThemes.com
            and you would not be able to display any version of the design sent by
            company. Let us also specify that:
          </p>
          <ul>
            <li>
              {" "}
              Since the design rights would now be transferred to the company, you agree
              that you will have no right (direct or indirect) to use any response or
              other content, work product or media, nor will you have any ownership
              interest in or to the same.
            </li>
            <li>
              Working in collaboration with the Government Copyright Agencies
              <span style={{ fontWeight: 700 }}>  iXiaThemes.com </span>would share
              Copyright Acquisition information for the refunded designs that would
              restrict the re-use of the designs as original designs in the future.
            </li>
          </ul>
          <p>
            If you have any questions or concerns about our Refund Policy, please contact
            us by
            <Link href="/contact_us">
              <a> clicking here </a>
            </Link>
            .
          </p>

          <h6>Account Area</h6>
          <p>
            The Account Area is a convenient way to communicate. It is your sole
            responsibility to check the account area to address any queries, concerns, or
            additional instructions required by the designer. Not checking or using the
            Account Area frequently shall not provide you adequate grounds for a refund.
            However, if you are uncertain how to use the area, you may contact the
            customer support team at any time for assistance.
          </p>

          <h3>Quality Assurance Policy</h3>
          <p>
            We cherish our relationship with our clients more than anything. All our
            services are targeted towards providing maximum satisfaction to our clients.
            For each design that we create, a thorough research is being undertaken to
            ensure quality and uniqueness in your design. We never embark on your any job
            without prior researching. Your satisfaction is the magic word that motivates
            us to do better. Thus, whatever we do is targeted in the direction of your
            satisfaction. Our designers, while working on your job, ensure that the design
            they create for you should comply with the specifications you have provided in
            your order form.  iXiaThemes.com aims at providing its clients with
            error-free ready-to-download designs. At every step, we ensure maintaining
            quality.
          </p>

          <h3>100% Satisfaction Guarantee</h3>
          <p>
            We have always maintained satisfaction of our clients as our first priority.
            When you return to us with your design for amendment, our design team takes it
            as a challenge. We work according to the specifications until you are 100%
            satisfied with the results. We modify your design until you find it absolutely
            the way you want it to be. In case, you require us to coordinate with your
            printing company we will do that as well. For your convenience, we also offer
            complete coordination with your printing company for free.
          </p>

          <h3>Delivery Policy</h3>

          <ul>
            <li>
              {`All design order files are delivered to Account Area as per the date
              specified on the "Order Confirmation". An e-mail is also sent to inform the
              client about their design order delivery made to their specific account
              area. All policies pertaining to revision & refund are subject to date and
              time of design order delivered to client's account area.`}
            </li>
            <li>
              We provide a design order reference number soon after the order is placed,
              so that the customer may track the status of that order and post revisions
              against the reference number.
            </li>
            <li>
              We deliver all our customized design orders
              <span style={{ fontWeight: 700 }}> via e-mail </span>within
              <span style={{ fontWeight: 700 }}> 2 to 3 days </span>of receiving your
              order.
            </li>
          </ul>

          <h3>Record Maintenance</h3>
          <p>
            Receiving final files does not mean that we erase your information and work
            from our data bank. Even after providing you with the final files, we maintain
            a record of your finalized design. Thus, if you need these final files again
            in future, we can send them to you. To obtain these files you can make request
            to us and we will provide you with the final files.
          </p>

          <h3>Copyrights of Logo</h3>
          <p>
            {` iXiaThemes.com retains all rights of all logo concepts that you view in 'My
            Account Area' before the request of final files. Once you have requested the
            final files of your logo, you reserve the right to coordinate with the
            copyright agencies to transfer the copyrights of logo to your business name
            and complete the process.`}
          </p>

          <h3>Photos, Images & Digital Content Policy</h3>
          <ul>
            <li>
               iXiaThemes.com only uses non-exclusive, royalty free photos or images
              in its design services and does not claim any right of ownership for the
              same.
            </li>
            <li>
              {`All Information about the royalty free Images/photos and digital content
              used for custom orders will be kept in company's archive for NOT more than 6
              months, after which the content is automatically removed from the records.`}
            </li>
            <li>
              The royalty free content is allowed for web use only. In case the customer
              wants to print these images or photos, a separate subscription fee applies.
            </li>
            <li>
               iXiaThemes.com is not liable for any claim of ownership of the image,
              photo or digital content used in production by the third party.
            </li>
          </ul>

          <h3>Customer Support</h3>
          <p>
            Customer support at  iXiaThemes.com is available 24/7. You can speak to
            our Sales Professionals about your queries and concerns. Our 24-Hour Customer
            Support center will assist you through the process and give prompt response to
            your queries and concerns.
            <br />
            <br />
            <span style={{ fontWeight: 700 }}>Note: </span>Use of the stolen credit cards
            is strictly prohibited and is considered to be a serious crime. We work in
            close collaboration to fight cyber crime and make sure that all fraudulent
            orders are reported to the Federal and State Agencies
          </p>
        </div>
      </StyledDiv>
    </>
  );
};

export default TermOfUse;
