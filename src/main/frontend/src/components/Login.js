import React, {useState} from "react";
import "../styles/css/Login.css";
import axios from 'axios';
import querystring from 'querystring'
import Cookies from 'js-cookie'
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import {faUnlock, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function Login(props){

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const onFormSubmit = () => {

        const PostUrl = 'http://localhost:8080/perform_login';

        const user = {
            username: username,
            password: password
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

    return (

        <Container className={"w-50"}>

            <InputGroup className="mb-3">

                <InputGroup.Prepend>
                    <InputGroup.Text id="userInputText">
                        <FontAwesomeIcon className={"username-icon"} id="username-icon" icon={faUser}/>
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
                    <InputGroup.Text id="passwordInputText">
                        <FontAwesomeIcon className={"password-icon"} id="password-icon" icon={faUnlock}/>
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

            <Button
                type={"submit"}
                variant="outline-primary"
                onClick={onFormSubmit}
                className="signInButton"
            >
                Sign In

            </Button>

        </Container>

    );





}


