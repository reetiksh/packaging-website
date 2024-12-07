import React from "react";

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
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import ProductList from "./../../components/ProductList/ProductList";

function LandingPage({ match }) {
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
      <ProductPageHeader />
      <div className="main">
        <ProductList url={match.url} />
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
                    rows="12"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="12">
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
