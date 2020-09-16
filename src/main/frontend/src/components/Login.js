import React from "react";
import "../styles/css/Login.css";
import axios from 'axios';
import querystring from 'querystring'
import Cookies from 'js-cookie'

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
          loginError: ''
        };
    }

    handleLogIn = event =>
    {
        event.preventDefault();
        const data=new FormData(event.target);
        var object={};
        data.forEach((value,key)=>{
           object[key]=value;
        });

        var query=querystring.stringify(object);

        //TODO moze problem jest z encodowaniem do urlencoded

        axios.post("http://localhost:8080/perform_login",query,{
            // withCredentials: true,
            headers: {
                // 'Content-Type': 'application/json',
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res=>{
            console.log(res.status);
            console.log(res.headers);
            window.location.replace("http://localhost:3000/");

            // Cookies.set('JSESSIONID',res.data)
        },e=>{
           console.log(e);
           this.setState({loginError: 'Wrong username or password'});
        });
        // sessionStorage.setItem('')
        // window.location.replace("http://localhost:3000/");
    }

    renderFormLogin()
    {
        return (
            <form onSubmit={this.handleLogIn}>
                <div className="form-group row">
                    <label className="form-label" htmlFor="username_id">Username</label>
                    <input className="form-control" type="text" id="username" name="username"/>
                </div>
                <div className="form-group row">
                    <label className="form-label" htmlFor="password_id">Password</label>
                    <input className="form-control" type="password" id="password" name="password"/>
                    <p>{this.state.loginError}</p>
                </div>
                <div className="row justify-content-center">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        );
    }
    render()
    {
        return this.renderFormLogin()
    }
}


export default Login