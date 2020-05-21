import React from "react";
import "../styles/css/Registration.css";
import Buttons from "./buttons/Buttons"

class Registration extends React.Component
{
    renderButton(i,j)
    {
        return (<Buttons variant={i} value={j}></Buttons>);
    }


            render()
            {
                return this.renderButton("dark","submit");
            }






}

export default Registration;