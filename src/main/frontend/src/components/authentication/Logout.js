import React from "react";
import axios from 'axios/index';
import querystring from 'querystring'

class Logout extends React.Component
{
    constructor(props)
    {
        super(props);

    }
    handleClick()
    {
        axios.get("http://localhost:8080/logout").then(res=>{
            console.log(res.data);
        },e=>{
            console.log(e);
        })
    }

    render()
    {
        return (
            <button onClick={this.handleClick} className="btn btn-primary">Logout</button>
        );
    }

}

export default Logout