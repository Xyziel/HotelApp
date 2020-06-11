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
        console.log(data);
        var object={};
        var encoded='';
        data.forEach((value,key)=>{
           object[key]=value;
           encoded+=key+"="+value+"&";
        });
        var json=JSON.stringify(object);
        console.log(json);
        console.log(encoded);
        encoded=encoded.slice(0,encoded.length-1);
        console.log(encoded);

        // axios.get("http://localhost:8080/dao/users",{
        //     // headers: {
        //         // 'Access-Control-Allow-Origin': true
        //     // }
        // })
        //     .then(res=>{console.log(res.data)},e=>{console.log(e)});

        // var object2 = {};
        // object2["test"]="test";
        // var json2=JSON.stringify(object2);
        // axios.post("http://localhost:8080/api/users/hej",json2,{
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res=>{
        //     console.log(res.data);
        // },e=>{
        //     console.log(e);
        // });

        //TODO moze problem jest z encodowaniem do urlencoded
        
        axios.post("http://localhost:8080/perform_login",encoded,{
            headers: {
                // 'Content-Type': 'application/json',
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res=>{
            console.log(res);
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
                    <input className="form-control" type="text" id="username" name="username"/>
                </div>
                <div className="form-group row">
                    <label className="form-label" htmlFor="password_id">Password</label>
                    <input className="form-control" type="password" id="password" name="password"/>
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