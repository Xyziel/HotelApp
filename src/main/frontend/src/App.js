import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/MainPage";
import NavigationBar from "./components/NavigationBar";
import TestPage from "./components/TestPage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Authenticated from "./components/Authenticated";
import Logout from "./components/Logout";
import AdminPanelNavbar from "./components/AdminPanelNavbar";
import AdminPanelUsers from "./components/AdminPanelUsers";
// import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import Reservation from "./components/rezervation/Reservation";

function App() {
  return (
    <Router>
        <NavigationBar/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/test" exact component={TestPage}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/front_login" exact component={Login}/>
                <Route path="/authenticated" exact component={Authenticated}/>
                <Route path="/admin_panel" exact component={AdminPanelNavbar}/>
                <Route path="/admin_panel/users" exact component={AdminPanelUsers}/>
                <Route path="/reservation" exact component={Reservation}/>
            </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
