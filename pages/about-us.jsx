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
        className="my-5"
      />
      <h1 style={{ fontWeight: 600, margin: "32px 0 48px 0" }}>
        Where small businesses get big ideas.
      </h1>

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

      <h1 style={{ fontWeight: 600, margin: "32px 0 48px 0" }}>
        How we help small businesses
      </h1>
      <Row justify="space-between">
        {cardData.map((item) => (
          <Col xs={24} sm={24} md={8} lg={7} xl={7}>
            <img src={item.image} className="img-fluid" />
            <h2 className="mt-2 font-weight-bold">{item.heading}</h2>
            <p>{item.description}</p>
          </Col>
        ))}
      </Row>

      <div className="text-center" style={{ margin: "64px 0" }}>
        <img src="/images/app-logo-dark.svg" alt="logo" height={40} className="mb-4" />
        <h3 style={{ fontWeight: 600 }}>ABSOLUTELY GUARANTEED</h3>
        <h5>Not satisfied? We’ll make it right.</h5>
        <br />
        <p>
          We stand by everything we sell. So if you open your order and you’re not happy,
          we’ll reprint or give you an account credit.
        </p>
        <p>If that doesn’t help, we’ll refund you in full.</p>
        <p>Contact us and our Customer Care Specialists will get right on it.</p>
      </div>
    </StyledPage>
  );
};

export default Aboutus;

const StyledPage = styled.div`
  width: 80%;
  margin: auto;
`;
