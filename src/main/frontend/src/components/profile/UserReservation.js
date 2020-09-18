import React, {Component} from "react";

import "../../styles/css/profile/UserReservation.css"
import Badge from "react-bootstrap/Badge";
import {faBed, faCalendarAlt, faMapMarkedAlt, faRunning, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

import roomImage from "../../styles/img/rooms/room100.jpg"

export default function UserReservation(props){

    return(

        <div className={"Reservation"}>

            <img className={"reservationImage"} src={roomImage} alt={"Room Image"}/>

            <div className={"reservationInformation d-flex flex-column"}>

                <h className={"reservationRoomNumber"}>Room number {props.number}</h>
                <h className={"reservationLocalization"}>{props.standard}</h>

                <div className={"reservationLocalization"}>
                    <FontAwesomeIcon className={"reservationLocalizationIcon reservationLocalizationItem"} icon={faMapMarkedAlt}/>
                    <h className={"reservationLocalizationItem"}>{props.city}</h>
                    <h className={"reservationLocalizationItem"}>{props.street}</h>
                    <h className={"reservationLocalizationItem"}>{props.building}</h>
                    <h className={"reservationLocalizationItem"}>{props.floor}</h>
                </div>

                <div className={"reservationDate"}>
                    <FontAwesomeIcon className={"reservationDateIcon reservationDateItem"} icon={faCalendarAlt}/>
                    <h className={"reservationDateItem mr-2"}>{props.dateFrom}</h>
                    <h>-</h>
                    <h className={"reservationDateItem ml-2"}>{props.dateTo}</h>
                </div>

                <div className={"reservationBedCount"}>
                    <FontAwesomeIcon className={"reservationPeopleIcon"} icon={faBed}/>
                    <h className={"reservationBedCount"}>{props.beds}</h>
                </div>

            </div>

            <h2
                className={"eventBadgeHeader"}>
                <span className="badge badge-primary eventBadge p-2">{props.standard}</span>
            </h2>


            {/*<Button className={"eventDetailsButton"} variant={"secondary"}>*/}

            {/*    See reservation details*/}

            {/*</Button>*/}

        </div>

    );

}

