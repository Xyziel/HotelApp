import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "../../styles/css/about-page/AboutPage.css"

import HotelView from "../../styles/img/HotelView.jpg"
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import hotelImage from "../../styles/img/HotelView.jpg"
import friends from "../../styles/img/friends.jpg"
import beach from "../../styles/img/beach.jpg"
import roomOne from "../../styles/img/rooms/room100.jpg"
import roomTwo from "../../styles/img/rooms/room102.jpg"
import roomThree from "../../styles/img/rooms/room1011.jpg"
import roomFour from "../../styles/img/rooms/room103.jpg"

export default function AboutPage() {

    return(

        <Container>

            <h className={"aboutPageHeader"}>Let us give you a piece of information about out hotel!</h>

            <Tabs className="AboutTabs" defaultActiveKey="home" id="uncontrolled-tab-example">

                <Tab class={"aboutTab"} eventKey="home" title="Home">

                    <div  class={"aboutTab"}>

                    <Row>

                        <Col>
                            <h className={"aboutTabText"}>Hotel Paradise is one of the most renowned hotels
                                in all of Cyprus. Every year we take in thousands of  content guest,
                                who keep coming back over and over.

                                <br/><br/>

                                We can guarantee professional service, delicious food and
                                entertainment all the time!

                                <br/><br/>

                                See you in Cyprus!

                            </h>
                        </Col>

                        <Col>
                            <img className={"aboutTabImage"} src={hotelImage} alt={"Hotel Image"}/>
                        </Col>

                    </Row>

                    </div>

                </Tab>

                <Tab eventKey="History" title="History">

                    <div className={"aboutTab"}>

                        <Row>

                            <Col>
                                <h className={"aboutTabText"}>Hotel Paradise was set up as
                                    the embodiment of dreams of three friends from university.

                                    <br/><br/>

                                    This three people was connected by love for Cyprus
                                    and searching for way to express their true love to this place.

                                    <br/><br/>

                                    Thanks to their hard work and dedication we can visit this
                                    amazing place and enjoy every piece of this breath taking land.

                                </h>
                            </Col>

                            <Col>
                                <img className={"aboutTabImage"} src={friends} alt={"Hotel Image"}/>
                            </Col>

                        </Row>

                    </div>

                </Tab>

                <Tab eventKey="Localization" title="Localization">

                    <div className={"aboutTab"}>

                        <Row>

                            <Col>
                                <h className={"aboutTabText"}>Hotel Paradise was built on one
                                    of the most beautiful beaches in all Cyprus.

                                    <br/><br/>

                                    Crystal clear water, hot sand, fresh air, surrounded by
                                    green forests, all of it waits for you.

                                    <br/><br/>

                                   Come and see this beautiful place!

                                </h>
                            </Col>

                            <Col>
                                <img className={"aboutTabImage"} src={beach} alt={"Hotel Image"}/>
                            </Col>

                        </Row>

                    </div>

                </Tab>

                <Tab eventKey="Rooms" title="Rooms">

                    <div className={"aboutTab"}>

                        <Row className={"aboutRow"}>

                            <Col>
                                <h className={"aboutTabText"}>High standard apartment
                                    on the highest floor of the hotel with
                                    beautiful view on beach and sea.

                                    <br/><br/>

                                    For people who can appreciate luxury and comfort. !
                                </h>
                            </Col>

                            <Col>
                                <img className={"aboutTabImage"} src={roomOne} alt={"Hotel Image"}/>
                            </Col>

                        </Row>

                        <Row  className={"aboutRow"}>

                            <Col>
                                <h className={"aboutTabText"}>Standard room, connecting
                                    comfort with reasonable price.

                                    <br/><br/>

                                    Great for families with children.


                                </h>
                            </Col>

                            <Col>
                                <img className={"aboutTabImage"} src={roomTwo} alt={"Hotel Image"}/>
                            </Col>

                        </Row>

                        <Row  className={"aboutRowLast"}>

                            <Col>
                                <h className={"aboutTabText"}>Senior room with comfortable
                                    beds and professional service.

                                    <br/><br/>

                                   Ideal for people who do not want to be bothered by anyone!
                                </h>
                            </Col>

                            <Col>
                                <img className={"aboutTabImage"} src={roomThree} alt={"Hotel Image"}/>
                            </Col>

                        </Row>



                    </div>



                </Tab>

            </Tabs>








        </Container>



    );

}