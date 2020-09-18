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
                console.log(res.data);
                this.setState({userId:res.data})
            },e=>{
                console.log(e);
            }
        )


        axios.get("http://localhost:8080/getUser").then(res=>{
            console.log(res.data);
        })


        axios.get("http://localhost:8080/getAllReservationsByUserId?userId="+this.state.userId).then(
            res=>{
                console.log(res.data);
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