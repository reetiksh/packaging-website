import React from "react";
import { Row, Col, Container } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ProductsNavBar.js";
import SectionCarousel from "../../components/SectionCarousel";
import DemoFooter from "../../components/Footers/DemoFooter";

import SemiAutomaticMachineHeavyDuty from "../../assets/machineImages/semiautomaticheavyduty.jpg";
import SemiAutomaticMachineReg from "../../assets/machineImages/semiautoregular.jpg";
import SemiAutomaticMachineEco from "../../assets/machineImages/semiautostrapping.jpg";

const SemiAutomaticStrappingMachine = () => {
  return (
    <div>
      <ExamplesNavbar />
      <Container className="px-0" style={{ paddingTop: "5rem" }} fluid={true}>
        <Row className="row no-gutters mx-2">
          <Col xs="12" md={4}>
            <SectionCarousel
              img={SemiAutomaticMachineHeavyDuty}
              title="Semi Automatic Strapping Machine ( Heavy Duty )"
              description={[
                `Max. Strap Size (mm)Not Stipulated`,
                `Min. Strap Size (mm)	60 x 30 Strapping Speed (seconds)	1.5`,
                `Strap Width (mm)	9 â€“ 15`,
                `Strap Force (Newton)	450`,
                `Working Table Height (mm)	750`,
                `Power Source (V/Hz)	220 / 50, Â¼ HP`,
                `External Dimension (mm)	900 x 580 x 750`,
              ]}
            />
          </Col>
          <Col xs="12" md={4}>
            <SectionCarousel
              img={SemiAutomaticMachineReg}
              title="Semi Automatic Strapping Machine ( Regular )"
            />
          </Col>
          <Col xs="12" md={4}>
            <SectionCarousel
              img={SemiAutomaticMachineEco}
              title="Semi Automatic Strapping Machine ( Economic )"
              description={[
                "Max Packaging Size - Any Size",
                "Min Packaging Size - 60mm",
                "Strap Width - 6-15mm(adjustable)",
                "Strap Core Size - 200mm",
                "Strapping Tension -15-40kg",
                "Strapping Speed - 2.0 sec/strap",
                "Power Consumption - 400W",
                "Power Supply AC - 220 V",
                "Dimensions - 895x565x730mm(LxWxH)",
                "Net Weight - 100 kg",
              ]}
            />
          </Col>
        </Row>
      </Container>
      <DemoFooter />
    </div>
  );
};
export default SemiAutomaticStrappingMachine;
