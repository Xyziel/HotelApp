import React from "react";
import axios from "axios/index"
import ReactPaginate from 'react-paginate'
import {Link} from "react-router-dom";



class AdminPanelNavbar extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        return(<div className="d-flex justify-content-center">
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