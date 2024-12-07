import React from "react";
import { Row, Col, Container } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ProductsNavBar.js";
import SectionCarousel from "../../components/SectionCarousel";
import DemoFooter from "../../components/Footers/DemoFooter";

import BandSealer from "../../assets/machineImages/bandsealing.png";
import ShrinkChamber from "../../assets/machineImages/shrinkchamber.jpg";
import ShrinkTunnel from "../../assets/machineImages/shrinktunnel.png";

const ShrinkChamberAndTunnel = () => {
  return (
    <div>
      <ExamplesNavbar />
      <div className="mt-4">
        <Container
          className="px-0 "
          style={{ paddingTop: "6rem" }}
          fluid={true}
        >
          <Row className="row no-gutters mx-4 mt-2 ">
            <Col xs="12" md={4}>
              <SectionCarousel
                description={[
                  "Voltage (V/Hz)	220/50	220/50",
                  "Power (W)	650	650",
                  "Sealing Speed (m/min)	0 ~ 12 (0 ~ 16)	0 ~ 12 (0 ~ 16)",
                  "Sealing Width (mm)	8 ~ 10	8 ~ 10",
                  "Temprature range (Deg.C)	0 ~ 300	0 ~ 300",
                  "Distance from the sealing center to the conveying table (mm)	10 ~ 40	15 ~ 270",
                  "Convevor size ( L x W )mm	840 x 153	840 x 153",
                  "Film Thickness (mm)	0.08	0.08",
                  "Single Conveyor Loading (Kg)	1	1",
                  "Overall Conveyor Loading (Kg)	3	3",
                  "Overall Dimension (LxWxH)mm	840 x 380 x 320	840 x 380 x 550",
                  "Net Weight (Kg)	32	37",
                ]}
                img={BandSealer}
                title="Band Sealers"
              />
            </Col>
            <Col xs="12" md={4}>
              <SectionCarousel
                description={[
                  "Voltage ( V/Hz)	AC 220 /50",
                  "Power (kw)	4",
                  "Packing Speed(pcs/h)	700 ~ 1000",
                  "Max Packing Dimensions	450 x 300 x 250",
                  "Dimensions ( L XW X H) (mm)	1895 x 720 x 1080",
                  "Max Packing Dimensions	140",
                ]}
                img={ShrinkChamber}
                title="Shrink Chamber"
              />
            </Col>
            <Col xs="12" md={4}>
              <SectionCarousel
                description={[
                  "Tunnel Size (W x H) mm		450 x 250",
                  "Voltage (V/Hz)		220/50 -380 / 50",
                  "Power Consumption (KW)		6.5	",
                  "Convayor Loading (Kg)		30",
                  "Heating Furnance (l x w x h) mm		1200 x 450 x 50-350*",
                  "External dimensions (l x w xh ) ( mm)		1200 x 650 x 1340",
                  "Speed ( m/min.)	0~10",
                  "Heating Time (minutes)	10",
                  "Cooling Time (minutes)	15",
                  "Net Weight ( Kg)	120",
                ]}
                img={ShrinkTunnel}
                title="Shrink Tunnels"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </div>
  );
};
export default ShrinkChamberAndTunnel;
