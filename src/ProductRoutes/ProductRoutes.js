import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import AutomaticStrappingMachine from "../views/Products/AutomaticStrappingMachine";
import SemiAutomaticStrappingMachine from "../views/Products/SemiAutomaticStrappingMachine";
import WrappingMachine from "../views/Products/WrappingMachine";
import ShrinkChamberAndTunnel from "../views/Products/ShrinkChamberAndTunnel";
import PowerTools from "../views/Products/PowerTools";
import PackagingMaterial from "../views/Products/PackagingMaterial";

const ProductRoutes = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`${match.path}semiautomaticstrappingmachine`}
        exact
        component={SemiAutomaticStrappingMachine}
      />
      <Route
        path={`${match.path}automaticstrappingmachine`}
        exact
        render={(props) => <AutomaticStrappingMachine {...props} />}
      />

      <Route
        path={`${match.path}wrappingmachine`}
        exact
        render={(props) => <WrappingMachine {...props} />}
      />
      <Route
        path={`${match.path}shrunkchamberandtunnel`}
        exact
        render={(props) => <ShrinkChamberAndTunnel {...props} />}
      />
      <Route
        path={`${match.path}powertools`}
        exact
        render={(props) => <PowerTools {...props} />}
      />
      <Route
        path={`${match.path}packagingmaterial`}
        exact
        render={(props) => <PackagingMaterial {...props} />}
      />
      <Redirect to={`/products`} />
    </Switch>
  );
};
export default ProductRoutes;
