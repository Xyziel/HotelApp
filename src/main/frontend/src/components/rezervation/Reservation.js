import React from "react";
import {Container, Form, Col, Button} from "react-bootstrap";
import '../../styles/css/rezervation/Rezervation.css';
import axios from 'axios';

class Reservation extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            displayCom: false,
            dateFrom: '',
            dateTo: '',
            numberOfPersons: 1,
            numberOfRooms: 1,
        }
    }

    handleChange = event => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.target);
        var object = {};
        data.forEach((value,key)=>{
            object[key]=value;
        });
        var json = JSON.stringify(object);
        console.log(json);

        axios({
            method: 'post',
            url: 'http://localhost:8080/reservation/check',
            data: json,
            headers:{
                'Content-Type': 'application/json',
            }
        }).
        then(res => {
            console.log(res);
            this.setState({rooms: res.data});
        },e => {
            console.log(e);
        });
    };

    render() {
        return (
            <Container>
                <h2>Reservation ONLINE</h2>
                <h3>Check room availability</h3>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Row>
                        <Col>
                            <Form.Label>Check in</Form.Label>
                            <Form.Control type="date" name="dateFrom" onChange={this.handleChange}></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Check out</Form.Label>
                            <Form.Control type="date" name="dateTo" onChange={this.handleChange}></Form.Control>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Room</Form.Label>
                            <Form.Control type="number" defaultValue="1" name="numberOfRooms" onChange={this.handleChange}></Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Person</Form.Label>
                            <Form.Control type="number" defaultValue="1" name="numberOfPersons" onChange={this.handleChange}></Form.Control>
                        </Col>
                    </Form.Row>
                    <Button type="submit" id="checkButton">Check</Button>
                </Form>
                {this.state.rooms.length === 0 ?
                    <p>no rooms</p>
                    :
                    this.state.rooms.map((room, id) => (
                        <div key={id}>
                            <p>Room number: {room.number}</p>
                            <p>Room floor: {room.floor}</p>
                            <p>Price: {room.price}</p>
                            <p>Description : {room.description}</p>
                            <br></br>
                        </div>

                    ))
                }
            </Container>
        )
    }

}

export default Reservation;