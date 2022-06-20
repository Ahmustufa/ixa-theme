import { Row, Col, Collapse } from "antd";
import ShopCard from "../../src/component/cards/shopCard";
import ProductCarousel from "../../src/component/productListing/carousel";

const { Panel } = Collapse;

const Order = () => {
  return (
    <div style={{ padding: 80 }}>
      <div className="mx-auto my-4 fw-bold">Home / Cards / Order</div>

      <Row className="mx-auto position-relative" gutter={[24, 24]}>
        <Col span={14}>
          <div style={{ position: "sticky", top: 60, display: "flex", flexWrap: "wrap" }}>
            <Row gutter={[12, 12]}>
              <Col span={12}>
                <img
                  alt="card-image"
                  src="/images/shop_card_image.jpg"
                  style={imageStyle}
                />
                <img alt="card-image" src="/images/accessory.jpg" style={imageStyle} />
                <img
                  alt="card-image"
                  src="/images/shop_card_image.jpg"
                  style={imageStyle}
                />
                <img alt="card-image" src="/images/accessory.jpg" style={imageStyle} />
              </Col>

              <Col span={12}>
                <img alt="card-image" src="/images/accessory.jpg" style={imageStyle} />
                <img
                  alt="card-image"
                  src="/images/shop_card_image.jpg"
                  style={imageStyle}
                />
                <img alt="card-image" src="/images/accessory.jpg" style={imageStyle} />
                <img
                  alt="card-image"
                  src="/images/shop_card_image.jpg"
                  style={imageStyle}
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col span={10}>
          <div
            className="order"
            style={{
              width: "-webkit-fill-available",
              padding: 16,
              position: "sticky",
              top: 90,
              color: "#54595f",
            }}
          >
            <div style={{ fontSize: 40 }}>Navy Chino Trousers</div>
            <div style={{ fontSize: 12, margin: "16px 0" }}>ZENURO</div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>Rs. 3999</div>
            <div style={{ fontWeight: 300 }}>
              Proactively communicate corporate process improvements via corporate
              scenarios. Progressively aggregate proactive data after diverse users.
              Rapidiously redefine front-end interfaces before go forward process
              improvements.
            </div>

            <div className="d-flex align-items-center my-4">
              <div style={{ width: 160 }}>SIZE</div>
              <div style={boxStyle}>XS</div>
              <div style={boxStyle}>S</div>
              <div style={boxStyle}>M</div>
              <div style={boxStyle}>L</div>
              <div style={boxStyle}>XL</div>
              <div style={boxStyle}>XXL</div>
            </div>

            <div
              style={{
                backgroundColor: "#0c0c0c",
                color: "#fff",
                width: 240,
                padding: "12px",
                cursor: "pointer",
                // textAlign: "center",
              }}
            >
              <input type="number" style={{ width: 48, marginRight: 24 }} max="99" />
              Add to cart
            </div>

            <Collapse className="mt-5">
              <Panel header="Information">
                Shipping We currently offer free shipping worldwide on all orders over
                $100. Sizing Fits true to size. Do you need size advice? Return & exchange
                If you are not satisfied with your purchase you can return it to us within
                14 days for an exchange or refund. More info. Assistance Contact us on
                (+44) 555 88 65, or email us at support@reytheme.com.
              </Panel>
              <Panel header="Specification">
                BRAND Zenuro MATERIAL Velvet SIZE L, M, S, XS, XL, XXL
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>

      <section style={{ padding: 80 }}>
        <Row justify="space-between" gutter={[0, 40]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={11}>
            <ShopCard />
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={11}>
            <ShopCard />
          </Col>
        </Row>
      </section>

      <section>
        <ProductCarousel />
      </section>
    </div>
  );
};

export default Order;

const imageStyle = {
  marginBottom: 8,
  verticalAlign: "middle",
  width: "100%",
};

const boxStyle = {
  border: "1px solid #ececec",
  padding: "4px 0",
  margin: "0 12px",
  cursor: "pointer",
  width: 72,
  textAlign: "center",
};
