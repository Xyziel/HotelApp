import React, {useState} from 'react';
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {faHotel, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AxiosInstance as axios} from "axios";

export default function NavigationBarUserNotLogged(){

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
                        <Button
                            className={"mt-md-0 mt-3 mr-3"}
                            id="signInButton"
                            variant="outline-light"
                            href={"/front_login"}

                        >
                            Sign In</Button>
                    </Nav.Item>

                    <Nav.Item>
                        <Button
                            className={"mt-md-0 mt-3"}
                            id="signUpButton"
                            variant="outline-light"
                            href={"/registration"}
                        >Sign Up</Button>
                    </Nav.Item>


                </Nav>


            </Navbar.Collapse>

        </Navbar>

    );

}