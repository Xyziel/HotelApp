import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainName from "./components/MainName";
import {Container} from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import TestPage from "./components/TestPage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Authenticated from "./components/Authenticated";
import Logout from "./components/Logout";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Switch>
                <Route path="/" exact component={MainName}/>
                <Route path="/test" exact component={TestPage}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/front_login" exact component={Login}/>
                <Route path="/authenticated" exact component={Authenticated}/>
                <Route path="/logout" exact component={Logout}/>
                <Route path="/admin_panel" exact component={AdminPanel}/>
            </Switch>
        </Container>
    </Router>
  );
}

export default App;
