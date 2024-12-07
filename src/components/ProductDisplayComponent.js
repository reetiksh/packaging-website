import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

import { Link } from "react-router-dom";

const Product = ({ title, link, url, img }) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          style={{
            backgroundColor: "#C5C5C5",
            height: 400,
            objectFit: "contain",
            padding: 20,
          }}
          width="100%"
          src={
            img
              ? img
              : "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          }
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle
            style={{ fontWeight: "bold", marginBottom: 10, fontSize: "1.5rem" }}
          >
            {title}
          </CardTitle>

          <Link to={url + link}>
            <Button style={{ backgroundColor: "#007BFF", borderWidth: 0 }}>
              Learn More
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
