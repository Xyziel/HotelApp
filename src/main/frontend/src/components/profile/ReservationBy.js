import React from "react";
// import "../../styles/css/authentication/Login.css";
import axios from 'axios';
import querystring from 'querystring'

class ReservationBy extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            userId:0
        }
        axios.get("http://localhost:8080/getUserId").then(
            res=>{
                this.setState({userId:res.data})
            },e=>{
                console.log(e);
            }
        )


        axios.get("http://localhost:8080/getAllReservationsByUserId?userId="+1).then(
            res=>{
                console.log(res);
            },e=>{
                console.log(e);
            }
        )
    }

    render()
    {
        return null;
    }

}

export default ReservationBy;