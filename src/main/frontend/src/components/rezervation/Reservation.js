import React from "react";
import PopUp from "./PopUp";
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
            imageURL: '',
            isLoggedIn: false,
            showPopup: false,
            roomId: 0
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
        else if(dateFrom.getDate() < currentTime.getDate() || dateTo.getTime() <= dateFrom.getTime()){
            this.setState({dateError: 'Wrong date!'});
        } else {
            this.setState({dateError: ''});
            this.findFreeRooms(event);
        }
    };

    findFreeRooms(event) {
        const data = new FormData(event.target);
        var object = {};
        data.forEach((value,key)=>{
            object[key]=value;
        });
        var json = JSON.stringify(object);

        axios({
            method: 'post',
            url: 'http://localhost:8080/reservation/check',
            data: json,
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(res => {
            this.setState({rooms: res.data});
            this.setState({displayCom: true});
        },e => {
            this.setState({connectionError: e.message})
        });
    };

    loadImage(room) {
        try {
            return require('../../styles/img/rooms/room'+room+'.jpg');
        } catch(error) {
            return '';
        }
    }

    isUserLoggedIn(room_id) {
        axios({
            method: 'get',
            url: 'http://localhost:8080/isLoggedIn',
        }).then(res => {
            if (res.data === false) {
                alert("You must first log in to be able to make a reservation.");
                window.location.href = "/front_login";
            } else {
                this.togglePopup(room_id);
            }
        },e => {
            this.setState({connectionError: e.message});
        });
    }

    togglePopup(room_id) {
        this.setState({
            showPopup: !this.state.showPopup
        });
        this.setState({
            roomId: room_id
        });
    }

    render() {
        return (
            <Container>
                <h2>Reservation ONLINE</h2>
                <h3>Check room availability</h3>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Row>
                        <Col>
                            <Form.Label>Check in</Form.Label>
                            <Form.Control type="date" name="dateFrom" onChange={this.handleChange}/>
                            <p className="dateError">{this.state.dateError}</p>
                        </Col>
                        <Col>
                            <Form.Label>Check out</Form.Label>
                            <Form.Control type="date" name="dateTo" onChange={this.handleChange}/>
                        </Col>
                    </Form.Row>
                    <Button type="submit" id="checkButton">Check</Button>
                </Form>
                {this.state.connectionError.length !== 0 ?
                <p className="errorMessage">Sorry, the problem has occurred: {this.state.connectionError}</p>
                    : null
                }
                {this.state.rooms.length === 0 && this.state.displayCom ?
                    <p>No rooms available</p>
                    :
                    this.state.rooms.map((room, id) => (
                        <div className="bookRoomContainer">
                            <div className="roomInfo">
                                <Image src={this.loadImage(room.number)} className="roomImage" alt="No Image"/>
                                <div key={id} className="room">
                                    <p>Room number: {room.number}</p>
                                    <p>Floor: {room.floor}</p>
                                    <p>Price per night: {room.price}</p>
                                    <p>Beds: {room.bedsCount.single === 0 ? '' : 'Single x' + room.bedsCount.single}
                                        {room.bedsCount.doublee === 0 ? '' : ' Double x' + room.bedsCount.doublee}</p>
                                    <p>Description : {room.description}</p>
                                </div>
                            </div>
                            <button type="submit" className="bookButton" onClick={()=>this.isUserLoggedIn(room.roomId)}>BOOK NOW</button>
                        </div>
                    ))
                }

                {this.state.showPopup ?
                    <PopUp
                        from={this.state.dateFrom.getFullYear() + '-' +
                        ((this.state.dateFrom.getMonth() + 1) < 10 ? '0' + (this.state.dateFrom.getMonth() + 1) : (this.state.dateFrom.getMonth() + 1)) + '-' +
                        this.state.dateFrom.getDate()}
                        to={this.state.dateTo.getFullYear() + '-' +
                        ((this.state.dateTo.getMonth() + 1) < 10 ? '0' + (this.state.dateTo.getMonth() + 1) : (this.state.dateTo.getMonth() + 1)) + '-' +
                        this.state.dateTo.getDate()}
                        roomId={this.state.roomId}
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </Container>
        )
    }
}

export default Reservation;