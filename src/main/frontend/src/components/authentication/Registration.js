import React from "react";
import "../../styles/css/authentication/Registration.css";
import axios from 'axios';
import Button from "react-bootstrap/Button";

class Registration extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            emailError:'',
            userNameError:'',
            firstNameError:'',
            lastNameError:'',
            phoneNumberError:'',
            passwordError:'',
            repeatedPasswordError:''
        }
        this.sendFormData=this.sendFormData.bind(this);
        // Ta linijka wydaje mi sie niepotrzebna
    }

    // TODO sprawdzanie danych przy rejestracji i wypisywanie odpowiednich bledow
    verifyEmail(email)
    {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var emailTest= re.test(String(email).toLowerCase());
        if(emailTest===false || new String(email).length>32)
        {
            this.setState({emailError:'Wrong email inserted'})
        }
        else
        {
            this.setState({emailError:' '});
        }
        return emailTest;
    }

    verifyUserName(userName)
    {
        if(userName==='' || new String(userName).length>32)
        {
            this.setState({userNameError:'Empty or wrong username'});
            return false;
        }
        else
        {
            this.setState({userNameError:''});

            return true;
        }
    }

    verifyFirstName(firstName)
    {
        var regex=/^[a-zA-Z]+$/;
        if(regex.test(firstName)===false || new String(firstName).length>32)
        {
            this.setState({firstNameError:'Can\'t contain numbers or be empty'});
        }
        else
        {
            this.setState({firstNameError:''});
        }
        return regex.test(firstName);
    }

    verifyLastName(lastName)
    {
        var regex=/^[a-zA-Z]+$/;
        if(regex.test(lastName)===false || new String(lastName).length>32)
        {
            this.setState({lastNameError:'Can\'t contain numbers or be empty'});
        }
        else
        {
            this.setState({lastNameError:''});
        }
        return regex.test(lastName);
    }

    verifyPhoneNumber(phoneNumber)
    {
        var regex=/^[1-9]{9}/;
        if(regex.test(phoneNumber)===false)
        {
            this.setState({phoneNumberError:'Empty or wrong phone number'});
        }
        else
        {
            this.setState({phoneNumberError:''});
        }
        return regex.test(phoneNumber);
    }

    verifyPassword(password)
    {
        var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if(regex.test(password)===false || new String(password).length>32)
        {
            this.setState({passwordError:'Password must contain at least 8 characters, 1 number, 1 lowercase character, 1 uppercase character'});
        }
        else
        {
            this.setState({passwordError:''});
        }
        return regex.test(password);
    }

    verifyRepeatedPassword(password,repeatedPassword)
    {
        var temp=false;
        if(password.localeCompare(repeatedPassword)===0)
        {
            this.setState({repeatedPasswordError:''});
            temp=true;
        }
        else
        {
            this.setState({repeatedPasswordError:'Repeated password doesn\'t match primary password'});
        }
        return temp;
    }

    verifyErrorsTable(table)
    {
        var temp=true;
        for(var key in table)
        {
            if(table[key]===false)
            {
                temp=false;
                break;
            }
        }
        return temp;
    }


    sendFormData(event)
    {
        event.preventDefault();

        const data = new FormData(event.target);
        var object = {};
        data.forEach((value,key)=>{
            object[key]=value;
        });

        var errorsTable={};

        //Sprawdzanie skladni maila
        errorsTable['emailTest']=this.verifyEmail(object['email']);
        // console.log(errorsTable['emailTest']);

        //Sprawdzanie userName'a
        errorsTable['userNameTest']=this.verifyUserName(object['userName']);
        // console.log(errorsTable['userNameTest']);

        //sprawdzanie First name
        errorsTable['firstNameTest']=this.verifyFirstName(object['firstName']);

        //sprawdzanie Last name
        errorsTable['lastNameTest']=this.verifyLastName(object['lastName']);

        //sprawdzanie phone number
        errorsTable['phoneNumberTest']=this.verifyPhoneNumber(object['phoneNumber']);

        //sprawdzanie passworda
        errorsTable['passwordTest']=this.verifyPassword(object['password']);
        // console.log(errorsTable['passwordTest']);

        //sprawdzanie repeatedPassworda
        errorsTable['repeatedPasswordTest']=this.verifyRepeatedPassword(object['password'],object['repeated_password']);
        // console.log(errorsTable['repeatedPasswordTest']);

        //sprawdzenie tabeli errorow
        var errorsTableFinalCheck=this.verifyErrorsTable(errorsTable);

        if(errorsTableFinalCheck===false)
        {
            return null;
        }

        //usuniecie powtorzonego hasla przed wyslaniem na backend
        delete object['repeated_password'];

        var json = JSON.stringify(object);

        axios({
            method: 'post',
            url: 'http://localhost:8080/api/users/register',
            data: json,
            headers:{
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            }
        }).
            then(res => {
                console.log(res);
                console.log(res.data);
        },e => {
                console.log(e);
        });

    }

    renderForm()
    {
        return (
            <form onSubmit={this.sendFormData}>
                <div className="form-group row">
                    <div className="col border-0">
                        <label htmlFor="email_input" className="form-label">Email</label>
                        <input id="email_input" name="email" type="text" className="form-control"/>
                        <p className="p_error">{this.state.emailError}</p>
                    </div>
                    <div className="col border-0">
                        <label htmlFor="username_input" className="form-label">Username</label>
                        <input name="userName" id="username_input" type="text"  className="form-control"/>
                        <p className="p_error">{this.state.userNameError}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col border-0">
                        <label htmlFor="firstname_input" className="form-label">First name</label>
                        <input  className="form-control" id="firstname_input" name="firstName" type="text" />
                        <p className="p_error">{this.state.firstNameError}</p>
                    </div>
                    <div className="col border-0">
                        <label htmlFor="lastname_input" className="form-label">Last name</label>
                        <input className="form-control" name="lastName" id="lastname_input" type="text" />
                        <p className="p_error">{this.state.lastNameError}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col border-0">
                        <label htmlFor="phonenumber_input" className="form-label">Phone number</label>
                        <input  className="form-control" id="phonenumber_input" name="phoneNumber" type="text" />
                        <p className="p_error">{this.state.phoneNumberError}</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col border-0">
                        <label htmlFor="password_input" className="form-label">Password</label>
                        <input className="form-control" name="password" id="password_input" type="password" />
                        <p className="p_error">{this.state.passwordError}</p>
                    </div>
                    <div className="col border-0">
                        <label htmlFor="repeated_password_input" className="form-label">Repeat password</label>
                        <input className="form-control" name="repeated_password" id="repeated_password_input" type="password" />
                        <p className="p_error">{this.state.repeatedPasswordError}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Button type="submit" variant={"primary"} className="col-6">Submit</Button>
                </div>
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