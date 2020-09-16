import React, {useEffect, useState} from 'react';
import axios from 'axios/index';
import NavigationBarUserNotLogged from "./NavigationBarUserNotLogged";
import NavigationBarAdmin from "./NavigationBarAdmin";
import NavigationBarUserLogged from "./NavigationBarUserLogged";

export default function NavigationBar(){

    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {

        axios.get('http://localhost:8080/isLoggedIn')
            .then(res=>{
            if(res.data ===true)
                setIsLogged(true);
        }, e=>{console.log(e);});

    });

    const [role,setRole] = useState("");
    useEffect(() => {

        axios.get("http://localhost:3000/getUserRole").
        then(res=>{
            if(res.data==='admin')
                setRole("admin");

        },e=>{
            console.log(e);
        });

    });

    const handleLogout = () => {
        axios.get("http://localhost:8080/logout").
        then(res=>{
            setIsLogged(false);
            window.location.replace("http://localhost:3000/");

        },e=>{
            console.log(e);
        });
    };

    if(!isLogged)
        return <NavigationBarUserNotLogged/>;

    if(isLogged && role === "admin")
        return <NavigationBarAdmin logout={handleLogout}/>;

    if(isLogged)
        return <NavigationBarUserLogged logout={handleLogout}/>;

}