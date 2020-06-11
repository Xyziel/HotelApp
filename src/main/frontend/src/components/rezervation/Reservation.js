import React from "react";
import {Container, Form, Col, Button, Image} from "react-bootstrap";
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
            connectionError: '',
            dateError: '',
        }
    }

    handleChange = event => {
        const name = event.target.name;
        if(event.target.type === 'date') {
            this.setState({[name]: new Date(event.target.value)});
        } else {
            this.setState({[name]: event.target.value});
        }

    };

    handleSubmit = event => {
        event.preventDefault();

        const currentTime = new Date();
        const dateFrom = this.state.dateFrom;
        const dateTo = this.state.dateTo;

        this.setState({connectionError: ''});

        if(dateFrom.length === 0 || dateTo.length === 0) {
            this.setState({dateError: 'Wrong date!'});
        }
        else if(dateFrom.getTime() < currentTime.getTime() || dateTo.getTime() <= dateFrom.getTime()){
            this.setState({dateError: 'Wrong date!'});
        } else {
            this.setState({dateError: ''});
            this.send(event);
        }
    };

    send(event) {
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
            this.setState({displayCom: true});
            console.log(this.state.rooms);
        },e => {
            console.log(e);
            this.setState({connectionError: e.message})
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
                            <p className="dateError">{this.state.dateError}</p>
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
                {this.state.connectionError.length !== 0 ?
                <p className="errorMessage">Sorry, the problem has occurred: {this.state.connectionError}</p>
                    : null
                }
                {this.state.rooms.length === 0 && this.state.displayCom ?
                    <p>no rooms</p>
                    :
                    this.state.rooms.map((room, id) => (
                        <div className="bookRoomContainer">
                            <div className="roomInfo">
                                <Image src={require('../../styles/img/rooms/room1.jpg')} className="roomImage"/>
                                <div key={id} className="room">
                                    <p>Room number: {room.number}</p>
                                    <p>Floor: {room.floor}</p>
                                    <p>Price: {room.price}</p>
                                    <p>Beds: {room.bedsCount.single === 0 ? '' : 'Single x' + room.bedsCount.single}
                                        {room.bedsCount.doublee === 0 ? '' : ' Double x' + room.bedsCount.doublee}</p>
                                    <p>Description : {room.description}</p>
                                </div>
                            </div>
                            <button type="submit" className="bookButton">BOOK NOW</button>
                        </div>
                    ))
                }
            </Container>
        )
    }
}

export default Reservation;