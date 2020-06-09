import React from "react";
import "../styles/css/Registration.css";
import Buttons from "./buttons/Buttons"
import {Form} from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"

class Registration extends React.Component
{
    constructor()
    {
        super();
        this.sendFormData=this.sendFormData.bind(this);
    }
    renderButton(i,j)
    {
        return (<Buttons variant={i} value={j}></Buttons>);
    }

    sendFormData(event)
    {
        event.preventDefault();
        const data = new FormData(event.target);
        // for(var pair of data.entries())
        // {
        //     window.alert(pair);
        // }
        // data.append("role",null);
        var object = {};
        data.forEach((value,key)=>{
            object[key]=value;
        });
        var json = JSON.stringify(object);
        // window.alert(json);
        fetch("/register",{
            method:"POST",
            body: json,
            headers: {
                "Content-Type": "application/json"
            }
        });

    }

    renderForm()
    {
        return (
            <form onSubmit={this.sendFormData}>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="email_input">Email</label>
                        <input id="email_input" name="email" type="text" className="form-control"/>
                    </div>
                    <div className="col">
                        <label htmlFor="username_input">Username</label>
                        <input name="userName" id="username_input" type="text"  className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="firstname_input">First name</label>
                        <input  id="firstname_input" name="firstName" type="text" />
                    </div>
                    <div className="col">
                        <label htmlFor="lastname_input">Last name</label>
                        <input name="lastName" id="lastname_input" type="text" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="phonenumber_input">Phone number</label>
                        <input  id="phonenumber_input" name="phoneNumber" type="text" />
                    </div>
                    <div className="col">
                        <label htmlFor="password_input">Password</label>
                        <input name="password" id="password_input" type="password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }


    render()
    {
        // return this.renderButton("dark","submit");
        return this.renderForm();
    }

}

export default Registration;