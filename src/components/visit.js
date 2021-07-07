import React from 'react';
import { Row, Col, CardTitle, CardBody, CardText, Container, Card, CardSubtitle, Badge, CardHeader } from 'reactstrap';


function Visit() {

    return (
<>
<Container fluid className="text-align-center mb-2 mt-2 bg-light" id="Contact">
<Row>
    <Col>
        <h1 className="mb-3 mt-3 text-secondary">Visit Us</h1>
    </Col>
    </Row>
    </Container>
<Container className="mt-5">
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
        {/* </Container> */}

{/* 
                <Container fluid id="Contact"> */}
                <Col>

                <Card className="bg-dark text-light" id="Hours">
                    <CardBody>

                    <CardTitle><h4>Contact</h4></CardTitle>
                    <CardText>Phone: (859) 555-555</CardText>
                    <CardText>348 E Main St</CardText>
                    <CardText>Lexington, KY</CardText>
                    {/* <a href="#Menu" className="text-light">Contact Us Online</a> */}
                    </CardBody>
                </Card>
                </Col>
                    
        </Row>
                </Container>
</>


    )
}


export default Visit