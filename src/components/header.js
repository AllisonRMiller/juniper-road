import React from 'react';
import { Row, Col, CardTitle, CardBody, CardText, Container, Card, CardSubtitle, Badge, CardHeader } from 'reactstrap';

// TODO: Redo icon with colored interior
function Header() {

    return (
        <Container fluid className="text-align-center" id="AboveTheFold">
<Row>
    <Col>

                    <img src="./Toast_Clink.png" alt="logo reading Juniper Road: Rustic Fine Dining over two crossed arrows" className="mt-3" />
    </Col>
</Row>
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
<Row className="mb-2">
    <Col>

                    <h3 className="display-3 text-light">Handcrafted Cocktails</h3>
                    <p className="text-light">Featuring the best botanicals distilled from our namesake, sample incredible creations unique to our bar.</p>
    </Col>
</Row>      
        </Container>
    )
}


export default Header