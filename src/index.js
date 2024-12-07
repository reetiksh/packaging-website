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
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages

import LandingPage from "./views/pages/LandingPage.js";
import Contact from "views/pages/Contact.js";
import Products from "./views/pages/Products.js";
import ProductRoutes from "./ProductRoutes/ProductRoutes.js";
// othersimport { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Switch>
      <Route path="/" exact render={(props) => <LandingPage {...props} />} />
      <Route path="/contact" exact render={(props) => <Contact {...props} />} />
     
      <Route
        path="/products/*"
        exact
        render={(props) => <ProductRoutes {...props} />}
      />
      <Route render={(props) => <Redirect to="/" />} />
    </Switch>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
