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
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import styled from "styled-components";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

const TopContainer = styled.div`
  .hovered-white {
    transition: 0.2s;
    :hover {
      color: #fff !important;
    }
  }
  .mobile-dark {
    @media screen and (max-width: 768px) {
      color: #000 !important;
    }
  }
`;

function ExamplesNavbar() {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  return (
    <TopContainer>
      <Navbar
        style={{ backgroundColor: "#000" }}
        className={classnames("fixed-top")}
        color-on-scroll="300"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <Link to="/">
              <NavbarBrand
                data-placement="bottom"
                className="text-light title text-weight-light"
              >
                SR Enterprises
              </NavbarBrand>
            </Link>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <Link to="/contact">
                  <NavLink className="text-light hovered-white mobile-dark">
                    Contact Us
                  </NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <NavLink
                  data-placement="bottom"
                  target="_blank"
                  title="Follow us on Instagram"
                  className="text-light"
                  href="https://www.instagram.com/_primopack_/"
                >
                  <i className="fa fa-instagram" />
                  <p className="d-lg-none">Instagram</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </TopContainer>
  );
}

export default ExamplesNavbar;
