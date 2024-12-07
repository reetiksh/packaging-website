import React from "react";
import { Row, Col, Container } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ProductsNavBar.js";
import SectionCarousel from "../../components/SectionCarousel";
import DemoFooter from "../../components/Footers/DemoFooter";

import AutomaticStrappingMachineIMAGE from "../../assets/machineImages/automatic-strapping-machine.jpg";
import FullyAutomaticLine from "./../../assets/machineImages/automaticLine.jpg";

const AutomaticStrappingMachine = () => {
  return (
    <div>
      <ExamplesNavbar />
      <Container className="px-0" style={{ paddingTop: "5rem" }} fluid={true}>
        <Row className="row no-gutters my-4">
          <Col xs="12" md={2} />

          <Col xs="12" md={4}>
            <SectionCarousel
              img={AutomaticStrappingMachineIMAGE}
              title="Automatic strapping machine"
              description={[
                "Max Strap Size (mm)	800 x 600",
                "Min Strap Size (mm)	80 x 50",
                "Strapping Speed (seconds)	2",
                "Strap Width (mm)	9 - 15",
                "Strapping Force	25 - 700",
                "Working Table Height (mm)	830",
                "Power Source (V/Hz)	440/50,0.1.2HP",
                "External Dimensions (mm)	1420X650X1565",
                "Weight (kg)	235",
              ]}
            />
          </Col>
          <Col xs="12" md={4}>
            <SectionCarousel
              smallImg
              img={FullyAutomaticLine}
              title="Fully Automatic Line"
              description={[
                "Adhesive Tape	48 / 60 / 72 mm",
                "Power Supply	3,380V,50 Hz,1.5 Kw",
                "Belt Speed	20 Meters / Min",
                "Packing Speed	8 Cartons / Minute",
                "Packing Size	L- 300~700 X W- 200~500 X H- 150~500 mm",
                "Carton weight	5~40 Kg",
                "PP Strap	9/12/ 15 mm (to be specified at the time of placing the order)",
                "Tension Adjustment	5~70 Kgf",
                "Machine Weight	450 Kg",
              ]}
            />
          </Col>

          <Col xs="12" md={2} />
        </Row>
      </Container>

      <DemoFooter />
    </div>
  );
};
export default AutomaticStrappingMachine;
