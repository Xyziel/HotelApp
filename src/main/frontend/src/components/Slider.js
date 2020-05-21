import React from 'react';
import {Carousel, Container} from 'react-bootstrap';

class Slider extends React.Component {

    render() {
        return (
            <Container>
                <Carousel fade="true">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../styles/img/first_slide_img.jpg")}
                            alt="cos tam"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../styles/img/second_slide_img.jpg")}
                            alt="cos tam"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../styles/img/third_slide_img.jpg")}
                            alt="cos tam"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        )
    }
}

export default Slider;