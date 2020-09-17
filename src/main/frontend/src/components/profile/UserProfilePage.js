import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import userImage from "../../styles/img/userProfileImage.jpg"
import Container from "react-bootstrap/Container";

import "../../styles/css/profile/UserProfilePage.css"

export default function UserProfilePage() {

    return(

        <Container>

            <h1 className={"profileHeader mb-5"}>Welcome on profile of PinkDarek69! </h1>

        <Container className={"ProfileContainer"}>




            <Row>

                <Col className={"ImageColumn d-flex align-items-center col-4 "}>

                    <img
                        className={"userProfileImage"}
                        src={userImage}
                        alt="User profile image"
                    />

                </Col>


                <Col className={"informationColumn d-flex flex-column justify-content-center"}>

                   <Row>
                       <h className={"informationTitle"}>Username:</h>
                       <h className={"informationText"}>PinkDarek69</h>
                   </Row>

                    <Row>
                        <h className={"informationTitle"}>First name:</h>
                        <h className={"informationText"}>Paweł</h>
                    </Row>

                    <Row>
                        <h className={"informationTitle"}>Second name:</h>
                        <h className={"informationText"}>Formatter</h>
                    </Row>

                    <Row>
                        <h className={"informationTitle"}>Last name:</h>
                        <h className={"informationText"}>Błaszczak</h>
                    </Row>

                    <Row>
                        <h className={"informationTitle"}>Email:</h>
                        <h className={"informationText"}>pblaszczak@landrynka.com</h>
                    </Row>

                    <Row>
                        <h className={"informationTitle"}>Phone Number:</h>
                        <h className={"informationText"}>110 921 377</h>
                    </Row>








                </Col>

            </Row>

        </Container>

        </Container>





    );

}