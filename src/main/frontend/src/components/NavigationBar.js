import React from 'react';
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import '../styles/css/NavigationBar.css';
import {Link} from "react-router-dom";
import axios from "axios";

class NavigationBar extends React.Component {


    constructor(props)
    {
        super(props);
    }

    handleLogout()
    {
        axios.get("http://localhost:8080/logout").
        then(res=>{
            console.log(res.data);
            console.log("ok");

        },e=>{
            console.log(e);
        })
    }

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
                                <Link to={"registration"} className="nav-link">Sign-Up</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to={"front_login"} className="nav-link">Login</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link onClick={this.handleLogout} className="nav-link">Logout</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default NavigationBar;