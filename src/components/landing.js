//Header should only appear on landing
//Simple logo with full width colorblock on other pages
import React from 'react';
import { Row, Col, CardTitle, CardBody, CardText, Container, Card, CardSubtitle, Badge, CardHeader } from 'reactstrap';

function Landing() {

    return (

<>
{/* <header class="masthead"> */}
  <Container fluid 
//   className="h-100" 
  id="AboveTheFold" className="mb-0">
  <img src="./components/Toast_Clink.png" alt="logo reading Juniper Road: Rustic Fine Dining over two crossed arrows" className="mt-3" />
    <Row className="h-100 align-items-center">
      <Col className="col-12 text-center">
      <Row>
    <Col>
                    <h3 className="display-3 text-light">Rustic & Refined</h3>
                    <p className="text-light">Mountainside lodge luxury comes to downtown Lexington. Whether by the fireside or the streetside, enjoy fine dining in a rustic atmosphere.</p>

    </Col>
</Row>
<Row>
    <Col>
    <h3 className="display-3 text-light">Culinary Bliss</h3>
                    <p className="text-light">Only the finest ingredients from local, organic sources. Fresh, flavorful, and fantastic.</p>
    </Col>
</Row>              
<Row>
    <Col>

                    <h3 className="display-3 text-light">Handcrafted Cocktails</h3>
                    <p className="text-light">Featuring the best botanicals distilled from our namesake, sample incredible creations unique to our bar.</p>
    </Col>
</Row>      
      </Col>
    </Row>
  </Container>
  {/* <Container>
      <Row>
          <Col>
              <h2> Whether by the fireside or the streetside, enjoy fine dining in a rustic atmosphere.</h2>
              
          </Col>
      </Row>
  </Container>
  <Container className="mt-5 mb-2">
        <Row>
            <Col>

            <Card className="bg-dark text-light" id="Hours">
                <CardBody>
                    <CardTitle><h4>Hours</h4></CardTitle>
                    <CardText>Tuesday-Thursday 8:00 AM to 9:00 PM</CardText>
                    <CardText>Friday-Sunday 7:00 AM to 10:00 PM</CardText>
                    <CardText>Closed Monday</CardText>
                </CardBody>
            </Card>
            </Col>

                <Col>

                <Card className="bg-dark text-light" id="Hours">
                    <CardBody>

                    <CardTitle><h4>Contact</h4></CardTitle>
                    <CardText>Phone: (859) 555-555</CardText>
                    <CardText>348 E Main St</CardText>
                    <CardText>Lexington, KY</CardText> */}
                    {/* <a href="#Menu" className="text-light">Contact Us Online</a> */}
                    {/* </CardBody>
                </Card>
                </Col>
                    
        </Row>
                </Container> */}
  </>

    )
};

export default Landing;


