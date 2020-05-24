import React from "react";
import Slider from "./Slider";
import About from "./About";
import {Container} from "react-bootstrap";

class MainPage extends React.Component {

    render() {
        return (
            <Container>
                <Slider/>
                <About/>
            </Container>
        )
    }
}

export default MainPage;