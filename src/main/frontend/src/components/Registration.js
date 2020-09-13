import React, {useState} from "react";
import "../styles/css/Registration.css";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import InputGroup from 'react-bootstrap/InputGroup'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDay, faEnvelope, faGlobeEurope, faPhone, faUnlock, faUser} from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/esm/FormControl";
import Button from "react-bootstrap/Button";

export default function Registration(props){

    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [password,setPassword] = useState("");
    const [repeatPassword,setRepeatPassword] = useState("");
    const [termsAgreement,setTermsAgreement] = useState(false);

    const onFormSubmit = () => {

        const PostUrl = 'http://localhost:8080/api/users/register';

        const user = {
            email : email,
            username: username,
            firstName : firstName,
            lastName : lastName,
            phoneNumber : phoneNumber,
            password: password,
            repeatPassword : repeatPassword,
            termsAgreement : termsAgreement
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        fetch(PostUrl,requestOptions)

            .then((res) => {

                if (!res.ok){
                    throw new Error(res.status);
                }

                else return res.json()
            })

            .then(res => {
                localStorage.setItem("userLogged", "true");
                window.location.reload();
            })

            .catch((error) => {
                console.log(error);
            });
    };

    return(

        <Container>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="emailInputText">
                        <FontAwesomeIcon id="email-icon" icon={faEnvelope}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    type="email"
                    placeholder="Please, write your email..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange = {(e) => setEmail(e.target.value)}
                    className={"FormInputField"}
                />
            </InputGroup>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="usernameInputText">
                        <FontAwesomeIcon id="username-icon" icon={faUser}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    className={"FormInputField"}
                    placeholder="Please, write your username..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange = {(e) => setUsername(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="usernameInputText">
                        <FontAwesomeIcon id="username-icon" icon={faUser}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    className={"FormInputField"}
                    placeholder="Please, write your first name..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange = {(e) => setFirstName(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="usernameInputText">
                        <FontAwesomeIcon id="username-icon" icon={faUser}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    className={"FormInputField"}
                    placeholder="Please, write your last name..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange = {(e) => setLastName(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="passwordInputText">
                        <FontAwesomeIcon id="password-icon" icon={faUnlock}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    className={"FormInputField"}
                    type="password"
                    placeholder="Please, write your password..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange = {(e) => setPassword(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="passwordInputText">
                        <FontAwesomeIcon id="password-icon" icon={faUnlock}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    className={"FormInputField"}
                    type="password"
                    placeholder="Please, repeat your password..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange = {(e) => setRepeatPassword(e.target.value)}

                />
            </InputGroup>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="passwordInputText">
                        <FontAwesomeIcon id="password-icon" icon={faPhone}/>
                    </InputGroup.Text>
                </InputGroup.Prepend>

                <FormControl
                    className={"FormInputField"}
                    type="password"
                    placeholder="Please, write your phone number..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange = {(e) => setPhoneNumber(e.target.value)}

                />
            </InputGroup>

            <Form.Group controlId="formBasicCheckbox">
                <div className={"d-flex flex-row"}>
                    <Form.Check
                        type="checkbox"
                        label="I agree to the"
                        onChange = {(e) => setTermsAgreement(e.target.checked)}
                    />
                    <a className={"ml-1"} href={"/terms"}> Terms and Conditions</a>
                </div>

            </Form.Group>

            <Button
                variant="primary"
                onClick={onFormSubmit}
                className="w-50 mb-4"
            >
                Sign Up
            </Button>

        </Container>

    );
}

