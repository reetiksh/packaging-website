import React from "react";

import { Container, Row, Col } from "reactstrap";

import AutomaticStrappingMachineIMAGE from "../../assets/machineImages/automatic-strapping-machine.jpg";
import Wrappingback from "../../assets/wrappingback.jpeg";
import SemiAutomaticMachineReg from "../../assets/machineImages/semiautoregular.jpg";
import BandSealer from "../../assets/machineImages/bandsealing.png";
import BatteryPetStrappingTools from "../../assets/machineImages/batterypetstrapping.jpg";
import PPStrap from "../../assets/machineImages/ppstrap.jpeg";

// core components
//images

import ProductDisplayComponent from "../ProductDisplayComponent";

const Data = [
  {
    title: "Automatic strapping machine",
    link: "/automaticstrappingmachine",
    img: AutomaticStrappingMachineIMAGE,
  },
  {
    title: "Semi automatic strapping machine",
    link: "/semiautomaticstrappingmachine",
    img: SemiAutomaticMachineReg,
  },
  {
    title: "Strech Wrapping machine",
    link: "/wrappingmachine",
    img: Wrappingback,
  },
  {
    title: "Shrink chamber,Shrink tunnel and Band Sealer",
    link: "/shrunkchamberandtunnel",
    img: BandSealer,
  },
  {
    title: "Pet Strapping tools",
    link: "/powertools",
    img: BatteryPetStrappingTools,
  },
  {
    title: "Packaging Materials",
    link: "/packagingmaterial",
    img: PPStrap,
  },
];

function ProductList({}) {
  return (
    <>
      <div className="section">
        <Container fluid={true}>
          <Row>
            {Data.map((item) => (
              <Col xs="12" className="col-md-4">
                <ProductDisplayComponent url={"products"} {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductList;
