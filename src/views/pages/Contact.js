/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import PhoneNumber from "react-phone-number";
// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import ContactPageHeader from "../../components/Headers/ContactPageHeader.js";
import Map from "../../components/Map";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ContactPageHeader />
      <div id="contact-details" className="main">
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title font-weight-bold">Contact Details</h2>
            <Row>
              <Col md={4}>
                <Card className="card-plain">
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h2">Phone No</CardTitle>

                      <h3 style={{ color: "white" }} className="card-category">
                        <PhoneNumber
                          className="text-light"
                          style={{ fontWeight: "normal", color: "#fff" }}
                          number="+91-9814101171"
                          isLinked={true}
                        />
                      </h3>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h2">Email</CardTitle>
                        <h3
                          style={{ fontWeight: "normal", color: "#fff" }}
                          className="card-category"
                        >
                          straprite@hotmail.com
                        </h3>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="card-plain">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h2">Address</CardTitle>
                      <h3 className="card-category">
                        <a
                          target="_blank"
                          style={{ fontWeight: "normal", color: "#fff" }}
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            window.location.replace(
                              "https://www.google.com/maps/place/S+R+ENTERPRISES/@30.8766595,75.9546607,120m/data=!3m1!1e3!4m5!3m4!1s0x391a9d29f4c43563:0x4556b386864440e2!8m2!3d30.8767929!4d75.954356"
                            );
                          }}
                        >
                          S.R Enterprises St. no. 2 Mangli nichi backside avon
                          ispat & power chandigarh road ludhiana
                        </a>
                      </h3>
                    </div>
                  </a>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          style={{ backgroundColor: "#000" }}
          className="section landing-section"
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center text-light">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label className="text-light">Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          style={{ backgroundColor: "black" }}
                          placeholder="Name"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label className="text-light">Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          style={{ backgroundColor: "black" }}
                          placeholder="Email"
                          type="text"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label className="text-light">Message</label>
                  <Input
                    style={{ backgroundColor: "black" }}
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="success" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
