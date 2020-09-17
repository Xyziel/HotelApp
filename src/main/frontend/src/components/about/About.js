import React from "react";
import '../../styles/css/about/About.css';
import {Container} from "react-bootstrap";

import HotelView from "../../styles/img/HotelView.jpg"
import Personnel from "../../styles/img/personnel.jpg"
import Room from "../../styles/img/rooms/room100.jpg"

class About extends React.Component {

    render() {
        return (
            <Container>
                <h2 className={"mb-5 aboutHeader"}>About our hotel...</h2>

                <div className="info">
                    <div className="column">
                        <p className={"aboutParagraph"}>Our Hotel is located only 100 m from Aya Napa beach,
                        one of the most beautiful beaches on the Cyprus. <br/><br/>
                            Clean and clear water, yellow sand and hot temperatures. All of it and much more waits for you!  </p>
                    </div>
                    <div className="column mb-5">
                        <img className={"w-100 ml-5"} src={HotelView} alt={"Hotel View Image"}/>
                    </div>
                </div>

                <div className="info">
                    <div className="column">
                        <p className={"aboutParagraph"}>
                            Our personnel will do their best to provide you everthing
                            you need and much more!
                            <br/><br/>
                            Delicious meals, cold local and export drinks served in the pool
                            by our experienced people will make our holidays unforgettable!
                        </p>
                    </div>
                    <div className="column mb-5">
                        <img className={"w-100 ml-5"} src={Personnel} alt={"Hotel View Image"}/>
                    </div>
                </div>

                <div className="info">
                    <div className="column">
                        <p className={"aboutParagraph"}>

                            ALl of our room was renowned in 2019.
                            All of them include, frideg, shower and air conditioning.

                            <br/><br/>
                           Our every room is cleaned every day and
                            you are getting fresh towels.
                        </p>
                    </div>
                    <div className="column mb-5">
                        <img className={"w-100 ml-5"} src={Room} alt={"Hotel View Image"}/>
                    </div>
                </div>


            </Container>
        )
    }
}

export default About;