import React from "react";
import '../../styles/css/rezervation/PopUp.css';

class PopUp extends React.Component{

    render() {
        return (
            <div className='popup'>
                <div className='popupInner'>
                    <button className="close" onClick={this.props.closePopup}>&times;</button>
                    <p className="popupQuestion">Are you sure you want to make a reservation<br/> from {this.props.from} to {this.props.to}?</p>
                    <button className="yesButton">YES</button>
                    <button className="noButton">NO</button>
                </div>
            </div>
        );
    }
}

export default PopUp;