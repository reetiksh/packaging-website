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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container ,Col} from "reactstrap";

function DemoFooter() {
  return (
    <footer
      style={{ minHeight: "40vh", backgroundColor: "black" }}
      className='footer footer-black'
    >
      <Container>
        <Col>
          <nav className='footer-nav'>
            <ul>
              <h1 className="pt-4" style={{ color: "white", fontWeight: "bold" }}>
                PrimoPack Website
              </h1>
            </ul>
          </nav>
    

          <div className='credits ml-auto'>
            <span className='copyright'>
              © {new Date().getFullYear()}, made with{" "}
              <i className='fa fa-heart heart' />
            </span>
          </div>
        </Col>
      </Container>
    </footer>
  );
}

export default DemoFooter;
