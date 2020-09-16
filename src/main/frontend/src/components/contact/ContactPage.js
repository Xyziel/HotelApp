import React, {Component, useState} from "react";
import "../../styles/css/ContactPage.css";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "../../styles/css/ContactPage.css"

export default function ContactPage(){

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("v1");
    const [message, setMessage] = useState("");

    const onFormSubmit = () => {alert("Tu wysylanie axiosem"); };

    return(

        <div className={"contactContainer d-flex flex-column align-items-center"}>

            <div className={"contactTexts d-flex flex-column align-items-center col-md-6 col-12"}>

                <div className={"d-flex flex-md-row flex-column align-items-center mb-2"}>

                    <h className={"contactHeader mr-3"}>Have any problem? </h>
                    <h className={"contactHeader"}> Contact us!</h>

                </div>

                <p className={"contactParagraph"}>

                    If you experienced any difficulties or you just have
                    some questions about our app, feel free to send us a message
                    with your problem description.

                    <br/><br/>

                    You can be sure our team will consider and help you with
                    every issue!

                </p>

            </div>

            <div className={"contactForm col-md-6 col-12"}>

                <Form>

                    <Form.Group controlId="contactForm.email">
                        <Form.Label className={"contactInputLabel"}>Your email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email address..."
                            onChange = {(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="contactForm.subject">
                        <Form.Label className={"contactInputLabel"}>Subject</Form.Label>
                        <Form.Control as="select" onChange = {(e) => setSubject(e.target.value)}>
                            <option value={"v1"}>Subject One</option>
                            <option value={"v2"}>Subject Two</option>
                            <option value={"v3"}>Subject Three</option>
                            <option value={"v4"}>Subject Four</option>
                            <option value={"v5"}>Subject FIve</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="contactForm.message">
                        <Form.Label className={"contactInputLabel"}>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="6"
                            onChange = {(e) => setMessage(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="contactForm.subject">
                        <Button
                            type={"submit"}
                            variant="primary"
                            onClick={onFormSubmit}
                            className="col-12"
                        >
                            Send

                        </Button>
                    </Form.Group>

                </Form>



            </div>

        </div>

    );
}

