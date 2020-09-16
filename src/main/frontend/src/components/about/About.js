import React from "react";
import '../../styles/css/About.css';
import {Container} from "react-bootstrap";

class About extends React.Component {

    render() {
        return (
            <Container>
                <h2>Cos o hotelu</h2>
                <div className="info">
                    <div className="column">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="column">
                        <h3>Tu może być zdjęcie</h3>
                    </div>
                </div>
            </Container>
        )
    }
}

export default About;