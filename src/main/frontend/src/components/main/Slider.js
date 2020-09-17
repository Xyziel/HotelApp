import React from 'react';
import {Carousel, Container} from 'react-bootstrap/esm/index';

import "../../styles/css/main/Slider.css"

class Slider extends React.Component {

    render() {
        return (
            <Container>
                <Carousel interval="4000" data-pause="false" pause="false">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../styles/img/first_slide_img.jpg")}
                            alt="cos tam"
                        />
                        <Carousel.Caption>
                            <h3 className={"SliderHeader"}>Be our guest</h3>
                            <p className={"SliderParagraph"}>Professional personnel, modern rooms, beautiful view, this is what our hotel is about.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../styles/img/second_slide_img.jpg")}
                            alt="cos tam"
                        />
                        <Carousel.Caption>
                            <h3 className={"SliderTwoHeader"}>Take a rest from big city</h3>
                            <p className={"SliderTwoParagraph"}>Our hotel is located in quiet place in the forest. Only trees and birds singing.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../styles/img/third_slide_img.jpg")}
                            alt="cos tam"
                        />
                        <Carousel.Caption>
                            <h3 className={"SliderHeader"}>Dive into luxury </h3>
                            <p className={"SliderParagraph"}>Our rooms please event the most demanding guests. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        )
    }
}

export default Slider;