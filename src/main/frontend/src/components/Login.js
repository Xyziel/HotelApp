import React, {Component} from "react";
import "../styles/css/Login.css";
import axios from 'axios';

class Login extends React.Component
{
    constructor()
    {
        super();
    }

    handleLogIn(event)
    {
        event.preventDefault();
        const data=new FormData(event.target);
        var object={};
        data.forEach((value,key)=>{
           object[key]=value;
        });
        var json=JSON.stringify(object);
        console.log(json);

        axios.get("http://localhost:8080/dao/users",{
            headers: {
                'Access-Control-Allow-Origin': true
            }
        })
            .then(res=>{console.log(res)},e=>{console.log(e)});

        axios.post("http://localhost:8080/login",json).then(res=>{
            console.log(res)
        },e=>{
           console.log(e);
        });
    }

    renderFormLogin()
    {
        return (
            <form onSubmit={this.handleLogIn}>
                <div className="form-group row">
                    <label className="form-label" htmlFor="username_id">Username</label>
                    <input className="form-control" type="text" id="username_id" name="userName"/>
                </div>
                <div className="form-group row">
                    <label className="form-label" htmlFor="password_id">Password</label>
                    <input className="form-control" type="password" id="password_id" name="password"/>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        );
    }
    render()
    {
        return this.renderFormLogin()
    }
}


export default Login