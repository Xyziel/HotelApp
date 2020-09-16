import React, {useState} from 'react';
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {
    faCalendarCheck,
    faGlobeEurope,
    faHotel,
    faMapMarkerAlt, faSignOutAlt,
    faUser,
    faUserCircle
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Dropdown from "react-bootstrap/Dropdown";

import "../../styles/css/NavigationBarAdmin.css"

export default function NavigationBarUserNotLogged(props){

    return (

        <Navbar sticky="top" bg="dark" collapseOnSelect expand="md" variant="dark" className={"mb-5"}>

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


                <Nav>

                    <Nav.Item>

                        <Dropdown className={"d-flex flex-column align-items-center"}>

                            <Dropdown.Toggle as={"header"} className={"dataToggle"}>
                                <Button variant={"outline-light"} className={"mr-3"}>My Profile</Button>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className={"dropdown-menu-center"}>

                                <Dropdown.Item href="/user/profile">
                                    See your profile
                                </Dropdown.Item>


                                <Dropdown.Item href="/user/reservations">
                                    Reservations
                                </Dropdown.Item>

                            </Dropdown.Menu>

                        </Dropdown>

                    </Nav.Item>

                    <Nav.Item>
                        <Button
                            className={"mt-md-0 mt-3 mr-3"}
                            id="signUpButton"
                            variant="outline-light"
                        >Admin Panel</Button>
                    </Nav.Item>

                    <Nav.Item>
                        <Button
                            className={"mt-md-0 mt-3"}
                            id="signUpButton"
                            variant="outline-light"
                            onClick={props.logout}
                        >Sign out</Button>
                    </Nav.Item>

                </Nav>


            </Navbar.Collapse>

        </Navbar>

    );

}