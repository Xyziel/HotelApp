import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap/esm/index";
import {Link} from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <Container>
                <Navbar className="justify-content-center">
                    <Nav>
                        <Nav.Item>
                            <Link to={""} className="nav-link">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={""} className="nav-link">About</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to={""} className="nav-link">Contact</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </Container>

        );
    }

}

export default Footer;