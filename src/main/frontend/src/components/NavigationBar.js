import React from 'react';
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import '../styles/css/NavigationBar.css';
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {

    render() {
        return (
            <Container>
                <div className="hotelName">
                    <img src={require("../styles/img/hotel.svg")} height="50px"/>
                    <h1>Jakis Hotel</h1>
                </div>
                <Navbar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto p-2">
                            <Nav.Item>
                                <Link to={""} className="nav-link">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"test"} className="nav-link">About</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={""} className="nav-link">Contact</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={""} className="nav-link">Gallery</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"/reservation"} className="nav-link">Reservation</Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Item>
                                <Link to={""} className="nav-link">Sign In</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button type="submit" className="btn">Sign Up</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default NavigationBar;