import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
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
                <Navbar className="justify-content-center">
                    <Nav>
                        <Nav.Item>
                            <Link to={""} className="nav-link">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"test"} className="nav-link">About</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={"registration"} className="nav-link">Sign-Up</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default NavigationBar;