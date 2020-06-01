import React from "react";
import {Container, Form, Col, Button} from "react-bootstrap";
import '../../styles/css/rezervation/Rezervation.css';

class Reservation extends React.Component{

    render() {
        return (
            <Container>
                <h2>Reservation ONLINE</h2>
                <h3>Check room availability</h3>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Label>Check in</Form.Label>
                            <Form.Control type="date"></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Check out</Form.Label>
                            <Form.Control type="date"></Form.Control>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Room</Form.Label>
                            <Form.Control type="number" defaultValue="1"></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Person</Form.Label>
                            <Form.Control type="number" defaultValue="1"></Form.Control>
                        </Col>
                    </Form.Row>
                    <Button type="submit" id="checkButton">Check</Button>
                </Form>
            </Container>
        )
    }

}

export default Reservation;