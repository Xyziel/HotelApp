import React from "react";
import Slider from "./Slider";
import About from "../about/About";
import {Container} from "react-bootstrap/esm/index";

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