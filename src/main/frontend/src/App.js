import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/main/MainPage";
import NavigationBar from "./components/navbar/NavigationBar";
import TestPage from "./components/test/TestPage";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import Authenticated from "./components/authentication/Authenticated";
import AdminPanelNavbar from "./components/admin/AdminPanelNavbar";
import AdminPanelUsers from "./components/admin/AdminPanelUsers";
// import AdminPanel from "./components/AdminPanel";
import AdminPanelReservations from "./components/admin/AdminPanelReservations";
import Footer from "./components/footer/Footer";
import Reservation from "./components/rezervation/Reservation";
import ContactPage from "./components/contact/ContactPage";

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
                <Route path="/admin_panel/reservations" exact component={AdminPanelReservations}/>
                <Route path="/reservation" exact component={Reservation}/>
                <Route path="/contact" exact component={ContactPage}/>
            </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
