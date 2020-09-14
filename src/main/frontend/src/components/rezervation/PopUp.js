import React from "react";
import '../../styles/css/rezervation/PopUp.css';
import axios from "axios";

class PopUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            error: '',
        }
    }

    addReservation(userId) {

        const dateFrom = this.props.from;
        const dateTo = this.props.to;
        const roomId = this.props.roomId;

        var object = {'idUser': userId, 'idRoom': roomId, 'dateFrom': dateFrom, 'dateTo': dateTo};
        var json = JSON.stringify(object);

        axios({
            method: 'post',
            url: 'http://localhost:8080/reservation/add',
            data: json,
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(res => {
            this.props.closePopup();
            alert("You have successfully made a reservation.");
            this.setState({error: ''});
        },e => {
            this.setState({error: e.message});
        });
    };

    getUserId() {
        axios({
            method: 'get',
            url: 'http://localhost:8080/getUserId',
        }).then(res => {
            this.addReservation(res.data);
            this.setState({error: ''});
        },e => {
            this.setState({error: e.message});
        });
    }


    render() {
        return (
            <div className='popup'>
                <div className='popupInner'>
                    <button className="close" onClick={this.props.closePopup}>&times;</button>
                    <p className="popupQuestion">Are you sure you want to make a reservation<br/> from {this.props.from} to {this.props.to}?</p>
                    <button className="yesButton" onClick={()=>this.getUserId()}>YES</button>
                    <button className="noButton" onClick={this.props.closePopup}>NO</button>
                    {this.state.error.length !== 0 ?
                        <p className="errorMessage">Sorry, the problem has occurred: {this.state.error}</p>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default PopUp;