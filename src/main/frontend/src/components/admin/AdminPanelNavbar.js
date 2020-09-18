import React from "react";
import axios from "axios/index"
import {Link} from "react-router-dom";



class AdminPanelNavbar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        axios.get('http://localhost:8080/getUserRole').then(
            res=>{
                if(res.data!=='admin')
                {
                    window.location.replace("http://localhost:3000/not_authenticated");
                }
            },e=>{
                console.log(e);
            }
        )
    }

    render()
    {
        return(<div className="d-flex flex-row justify-content-center">
            <div>
                <Link className="btn btn-dark btn-lg m-4" to="/admin_panel/users">Users</Link>
            </div>
            <div>
                <Link className="btn btn-dark btn-lg m-4" to="/admin_panel/reservations">Reservations</Link>
            </div>
        </div>);
    }


}




export default  AdminPanelNavbar;