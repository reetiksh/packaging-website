import React from "react";
import { Row, Col, Container } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ProductsNavBar.js";
import SectionCarousel from "../../components/SectionCarousel";
import DemoFooter from "../../components/Footers/DemoFooter";

import StrechWrapping from "../../assets/machineImages/strechwrapping.jpeg";

const WrappingMachine = () => {
  return (
    <div>
      <ExamplesNavbar />
      <Container
        className="px-0"
        style={{ paddingTop: "4.45rem" }}
        fluid={true}
      >
        <Row className="row no-gutters my-4">
          <Col md={4} />
          <Col xs="12" md={4}>
            <SectionCarousel
              img={StrechWrapping}
              title="Strech Wrapping Machine"
              description={[
                "Robust construction. ",
                "Controllable cycle time. ",
                "Safety features incorporated. ",
                "Indigenous design. ",
                "User Friendly. ",
                "Easy manipulation of load to provide bi-directional wrapping.",
                "Low power consumption. ",
                "Variable speed.",
              ]}
            />
          </Col>
          <Col md={4} />
        </Row>
      </Container>
      <DemoFooter />
    </div>
  );
};
export default WrappingMachine;
