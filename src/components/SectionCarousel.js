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
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

function SectionCarousel({ title, img, smallImg, description = [] }) {
  const items = [
    {
      src: img,
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className=" pt-o" id="carousel">
        <Container>
          <Row>
            <Col className="px-1" md="12">
              <div style={{ border: "1px solid #000" }} className="mb-2">
                <Card
                  style={{
                    borderRadius: 0,
                    boxShadow: "none",
                    textAlign: "center",
                  }}
                  className="page-carousel align-items-center"
                >
                  {items.map((item) => {
                    return (
                      <>
                        {smallImg ? (
                          <img
                            style={{
                              borderRadius: 0,
                              height: 350,
                              width: 350,
                              objectFit: "contain",
                            }}
                            src={item.src}
                            alt={item.altText}
                          />
                        ) : (
                          <img
                            style={{
                              borderRadius: 0,
                              height: 500,
                              width: 500,
                              objectFit: "contain",
                            }}
                            src={item.src}
                            alt={item.altText}
                          />
                        )}
                      </>
                    );
                  })}

                  <h2
                    style={{ color: "#000000" }}
                    className="mt-0 mx-2 font-weight-bold "
                  >
                    {title}
                  </h2>
                  <ul className="mt-2" style={{ textAlign: "left" }}>
                    {description.map((item) => (
                      <li style={{ fontSize: 16 }}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
