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
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import ProductList from "../../components/ProductList/ProductList";

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
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title font-weight-normal">Let's talk product</h2>
                <h5 className="title font-weight-normal">
                  We deal in strapping and wrapping machines, shrink chamber and
                  tunnel, band sealler and packaging material such as plastic
                  strap,pet strap, streach films and bopp tapes.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
        <ProductList />

        <div
          style={{ backgroundColor: "#000" }}
          className="section landing-section"
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2
                  style={{ fontWeight: "normal" }}
                  className="text-center text-light"
                >
                  Keep in touch?
                </h2>
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
