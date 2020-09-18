import Container from "react-bootstrap/Container";
import React from "react";
import UserReservation from "./UserReservation";
import axios from "axios";

class UserReservationPage extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:8080/getUser').then(res => {
            this.setState({userId: res.data['userId']});
            axios.get("http://localhost:8080/reservation/user/getAllReservationsByUserId?userId=" + this.state.userId).then(
                res2 => {
                    console.log(res2.data);
                    var table = [];
                    for (var i = 0; i < res2.data.length; i++) {
                        table.push(res2.data[i]);
                    }
                    this.setState({reservations: table});
                    // this.state.reservations.map(pd=>console.log(pd.dateFrom));
                }, e => {
                    console.log(e);
                }
            );
        }, e => {
            console.log(e);
        });

    }

    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
            reservations: []
        }
    }

    extractingDate(date) {
        date = date.replace('T', ' ');
        date = date.slice(0, 16);
        return date;

    }

    render() {
        return (this.state.reservations.map(pd =>
            <Container className={"d-flex  flex-column align-items-center"}>
                <UserReservation
                    number={pd.room.number}
                    standard={pd.room.standard.name}
                    city={pd.room.building.city}
                    street={pd.room.building.address}
                    building={pd.room.building.city}
                    floor={pd.room['floor']}
                    dateFrom={this.extractingDate(pd.dateFrom)}
                    dateTo={this.extractingDate(pd.dateTo)}
                    beds={pd.room.bedsCount['single'] + pd.room.bedsCount['doublee'] + pd.room.bedsCount['doublee']}
                />
            </Container>));

    }
}


export default UserReservationPage;