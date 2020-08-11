import React from 'react';
import { Row, Col, CardTitle, CardBody, CardText, Container, Card, CardSubtitle, Badge, CardHeader } from 'reactstrap';


function Visit() {

    return (
<>
<Container>
        <Row>
            <Col>

            <Card className="bg-dark text-light" id="Hours">
                <CardBody>
                    <CardTitle>Hours</CardTitle>
                    <CardText>Tuesday-Thursday 8:00 AM to 9:00 PM</CardText>
                    <CardText>Friday-Sunday 7:00 AM to 10:00 PM</CardText>
                    <CardText>Closed Monday</CardText>
                </CardBody>
            </Card>
            </Col>
        </Row>
        </Container>


                <Container fluid id="Contact">
                    <h1 className="display-3 text-light"></h1>
                    <p className="text-light">Phone: (859) 555-555</p>
                    <p className="text-light">348 E Main St</p>
                    <p className="text-light">Lexington, KY</p>
                    <a href="#Menu" className="text-light">Contact Us Online</a>
                </Container>
</>


    )
}


export default Visit