import React from "react";
import '../../styles/css/rezervation/PopUp.css';

class PopUp extends React.Component{

    addReservation = event => {
        event.preventDefault();

        const dateFrom = this.props.from;
        const dateTo = this.props.to;
        const roomId = this.props.roomId;

    };


    render() {
        return (
            <div className='popup'>
                <div className='popupInner'>
                    <button className="close" onClick={this.props.closePopup}>&times;</button>
                    <p className="popupQuestion">Are you sure you want to make a reservation<br/> from {this.props.from} to {this.props.to}?</p>
                    <button className="yesButton">YES</button>
                    <button className="noButton" onClick={this.props.closePopup}>NO</button>
                </div>
            </div>
        );
    }
}

export default PopUp;