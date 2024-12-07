import React from "react";
import { Row, Col, Container } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ProductsNavBar.js";
import SectionCarousel from "../../components/SectionCarousel";
import DemoFooter from "../../components/Footers/DemoFooter";

import BoppTapes from "../../assets/machineImages/bopptapes.jpg";
import Strech from "../../assets/machineImages/strechfilm.jpeg";
import PPStrap from "../../assets/machineImages/ppstrap.jpeg";
import PetStrap from "../../assets/machineImages/petstrap.jpg";

const AutomaticStrappingMachine = () => {
  return (
    <div>
      <ExamplesNavbar />
      <Container
        className="px-0 align-self-center"
        style={{ paddingTop: "5rem" }}
        fluid={true}
      >
        <Row className="no-gutters ">
          <Col className="col-1 col-sm-0" />
          <Col xs="12" className="col-md-10 align-self-center">
            <Row xs="12" className="no-gutters ">
              <Col xs="12" className="col-md-4">
                <SectionCarousel smallImg img={BoppTapes} title="BOPP Tapes" />
              </Col>
              <Col xs="12" className="col-md-4">
                <SectionCarousel smallImg img={Strech} title="Stretch Films" />
              </Col>
              <Col xs="12" className="col-md-4">
                <SectionCarousel smallImg img={PetStrap} title="Pet Strap" />
              </Col>
              <Col xs="12" className="col-md-4">
                <SectionCarousel
                  smallImg
                  img={PPStrap}
                  title="PP Strap (For both semi and fully automatic machines)"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <DemoFooter />
    </div>
  );
};
export default AutomaticStrappingMachine;
