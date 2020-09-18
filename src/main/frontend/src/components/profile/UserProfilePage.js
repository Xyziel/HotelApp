import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import userImage from "../../styles/img/userProfileImage.jpg"
import Container from "react-bootstrap/Container";

import "../../styles/css/profile/UserProfilePage.css"

import axios from "axios/index";

class UserProfilePage extends React.Component
{
    componentDidMount()
    {
        this.getUser();
    }

    constructor(props)
    {
        super(props);
        this.state= {
            user: []
        }
    }

    getUser()
    {
        axios.get('http://localhost:8080/getUser').then(res=>{
            this.setState({user:res.data});
        },e=>{
            console.log(e);
        });
    }



    render()
    {
        // console.log(this.state.user);
        return(
            <Container>
                <h1 className={"profileHeader mb-5"}>Welcome on profile of {this.state.user['userName']}! </h1>

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
                                <h className={"informationText"}>{this.state.user['userName']}</h>
                            </Row>

                            <Row>
                                <h className={"informationTitle"}>First name:</h>
                                <h className={"informationText"}>{this.state.user['firstName']}</h>
                            </Row>

                            <Row>
                                <h className={"informationTitle"}>Last name:</h>
                                <h className={"informationText"}>{this.state.user['lastName']}</h>
                            </Row>

                            <Row>
                                <h className={"informationTitle"}>Email:</h>
                                <h className={"informationText"}>{this.state.user['email']}</h>
                            </Row>

                            <Row>
                                <h className={"informationTitle"}>Phone Number:</h>
                                <h className={"informationText"}>{this.state.user['phoneNumber']}</h>
                            </Row>








                        </Col>

                    </Row>

                </Container>

            </Container>





        );
    }
}

export default UserProfilePage;