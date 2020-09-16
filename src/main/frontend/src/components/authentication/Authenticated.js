import React from "react";
import axios from 'axios/index';
import querystring from 'querystring'

class Authenticated extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    handleClick()
    {
        var userRole;
        axios.get('http://localhost:8080/isLoggedIn').then(res=>{
            console.log(res.data);
        },e=>{
            console.log(e);
        });

        axios.get('http://localhost:8080/getUserRole').then(res=>{
            console.log(res.data);
            userRole=res.data;
        },e=>{
            console.log(e);
        });


        console.log(userRole);
    }

    render()
    {
        return <button onClick={this.handleClick} className="btn btn-primary">Witam</button>
    }
}

export default Authenticated