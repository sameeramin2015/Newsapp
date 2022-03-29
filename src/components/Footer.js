import React from "react";
import { Col, Container, Row } from "react-bootstrap";


export default function Footer() {
    return (
        <Container className="bg-dark" fluid={true}>
            <Row className="justify-content-center text-light text-center">
                <Col className="col-12" >
                   <h5>Design and developed by Sameer Jahanzeb</h5>
                </Col>
            </Row>
        </Container>
    )
}