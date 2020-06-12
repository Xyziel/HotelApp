import React from "react";
import "../styles/css/Login.css";
import axios from 'axios';
import querystring from 'querystring'

class Authenticated extends React.Component
{
    constructor()
    {
        super();
    }

    handleClick()
    {
        axios.get('http://localhost:8080/api/users/isLoggedIn').then(res=>{
            console.log(res.data);
        },e=>{
            console.log(e);
        });
    }

    render()
    {
        return <button onClick={this.handleClick} className="btn btn-primary">Witam</button>
    }
}

export default Authenticated