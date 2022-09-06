import { Row, Col } from "antd";
import styled from "styled-components";

const Aboutus = (props) => {
  const cardData = [
    {
      image:
        "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_auto:20:412/about-us-tile1",
      heading: "A “just-right” selection",
      description:
        "We give small business owners the right assortment of products and options. We don’t overwhelm, but we don’t come up short. And it’s all at the right price.",
    },
    {
      image:
        "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_auto:20:412/about-us-tile2",
      heading: "Easy experience",
      description:
        "We help small business owners quickly and effectively create the products they need to get the job done – with tips, inspiration and experts readily available.",
    },
    {
      image:
        "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_auto:20:412/about-us-tile3",
      heading: "Design for everyone",
      description:
        "We offer on-trend designs, intuitive tools, and the support options that enable any small business owner to create expertly designed marketing – even if they’re not a design expert.",
    },
  ];

  return (
    <StyledPage>
      <img
        src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_auto:50:1284/about-us-desktop"
        className="mt-4 mt-md-5 img-fluid"
      />
      <h1 className="page-heading">Where small businesses get big ideas.</h1>

      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <p className="mb-3">
            {`VistaPrint, a Cimpress company, helps small business owners create expertly
            designed, up-to-date custom marketing – the assortment of products they need
            to look and feel professional, prepared and plugged in.`}
          </p>
          <p className="mb-3">
            {`Yes, we said assortment. It’s true that we’re best known for our business
            cards – and we’ve printed billions of them since Robert Keane founded
            VistaPrint in 1995.`}
          </p>
          <p>
            {`But today, VistaPrint offers so much more: a wide range of customisable small
            business marketing products; real-time access to expert ideas and assistance
            for people who need a hand; and a simple, straightforward experience for those
            who know exactly what they want.`}
          </p>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12}>
          <p>
            {`When we put it all together, our customers can easily design a consistent,
            cohesive look that carries across their entire business, whether they operate
            in-store, online, on-site or on the go. With that, they can walk through a
            door with confidence, know they can keep up with the competition and make
            things happen right now.`}
          </p>
          <p>
            {`Because now isn’t just a challenge. It’s an opportunity. And VistaPrint is
            here to help small business owners OWN THE NOW.`}
          </p>
        </Col>
      </Row>

      <h1 className="page-heading">How we help small businesses</h1>
      <Row justify="space-between" gutter={[0, 24]}>
        {cardData.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={11} lg={7} xl={7}>
            <div className="mb-5 mb-md-0">
              <img src={item.image} className="img-fluid" />
              <h2 className="card-heading">{item.heading}</h2>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>

      <div className="text-center" style={{ margin: "64px 0" }}>
        <img src="/images/iXiaThemes.svg" alt="logo" height={40} className="mb-4" />
        <h3 style={{ fontWeight: 600 }}>ABSOLUTELY GUARANTEED</h3>
        <h5>{`Not satisfied? We’ll make it right.`}</h5>
        <br />
        <p>
          {`We stand by everything we sell. So if you open your order and you’re not happy,
          we’ll reprint or give you an account credit.`}
        </p>
        <p>{`If that doesn’t help, we’ll refund you in full.`}</p>
        <p>{`Contact us and our Customer Care Specialists will get right on it.`}</p>
      </div>
    </StyledPage>
  );
};

export default Aboutus;

const StyledPage = styled.div`
  width: 80%;
  margin: auto;

  .page-heading {
    font-weight: 600;
    margin: 48px 0;
  }

  .card-heading {
    margin-top: 16px;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;

    .card-heading {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 576px) {
    .page-heading {
      font-size: 24px;
      margin: 24px 0;
      font-weight: 600;
      text-align: center;
    }

    .card-heading {
      font-size: 20px;
    }
  }
`;
