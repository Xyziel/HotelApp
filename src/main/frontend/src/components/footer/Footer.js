import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap/esm/index";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHotel} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

export default function Footer(){

    return (

        <Navbar bg="dark" collapseOnSelect expand="md" variant="dark">

            <Navbar.Brand href="/">
                <FontAwesomeIcon className={"hotelBrand"} id="username-icon" icon={faHotel}/>
            </Navbar.Brand>

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
                        <Link to={"/contact"} className="nav-link">Contact</Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link to={""} className="nav-link">Gallery</Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Link to={"/reservation"} className="nav-link">Reservation</Link>
                    </Nav.Item>

                </Nav>


            </Navbar.Collapse>

        </Navbar>

    );


}

