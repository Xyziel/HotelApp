import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/MainPage";
import NavigationBar from "./components/NavigationBar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import AdminPanelNavbar from "./components/AdminPanelNavbar";
import AdminPanelUsers from "./components/AdminPanelUsers";
import NotAuthenticated from "./components/NotAuthenticated";
// import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import Reservation from "./components/rezervation/Reservation";

function App() {
  return (
    <Router>
        <NavigationBar/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/front_login" exact component={Login}/>
                <Route path="/admin_panel" exact component={AdminPanelNavbar}/>
                <Route path="/admin_panel/users" exact component={AdminPanelUsers}/>
                <Route path="/reservation" exact component={Reservation}/>
                <Route path="/not_authenticated" exact component={NotAuthenticated}/>
            </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
