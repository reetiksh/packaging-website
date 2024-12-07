import React from "react";
import { Row, Col, Container } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ProductsNavBar.js";
import SectionCarousel from "../../components/SectionCarousel";
import DemoFooter from "../../components/Footers/DemoFooter";

import BatteryPetStrappingTools from "../../assets/machineImages/batterypetstrapping.jpg";
import PneumaticPetStrap from "../../assets/machineImages/pneumaticpetstrapping.png";
import Tapping from "../../assets/machineImages/tapping.jpg";

const PowerTools = () => {
  return (
    <div>
      <ExamplesNavbar />
      <Container className="px-0" style={{ paddingTop: "5rem" }} fluid={true}>
        <Row className="row no-gutters mx-4 mt-3">
          <Col xs="12" className="col-md-4">
            <SectionCarousel
              img={BatteryPetStrappingTools}
              title="Battery Pet Strapping Tools"
            />
          </Col>
          <Col xs="12" className="col-md-4">
            <SectionCarousel
              img={PneumaticPetStrap}
              title="Pneumatic Pet Strapping Tools"
            />
          </Col>
          <Col xs="12" className="col-md-4">
            <SectionCarousel
              description={[
                "Supply Ability 100 Per Week",
                "Power Supply	1 Phase 110V/220V/240V",
                "Finish	Powder-Coating",
                "Packing Size	Min L150 x W170 x H110 mm",
                "Working Table Height	570~770 mm",
              ]}
              img={Tapping}
              title="Tapping Machine"
            />
          </Col>
        </Row>
      </Container>
      <DemoFooter />
    </div>
  );
};
export default PowerTools;
