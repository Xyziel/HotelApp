import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MainPage from "./components/main/MainPage";
import NavigationBar from "./components/navbar/NavigationBar";
import Registration from "./components/authentication/Registration";
import Login from "./components/authentication/Login";
import AdminPanelNavbar from "./components/admin/AdminPanelNavbar";
import AdminPanelUsers from "./components/admin/AdminPanelUsers";
import AdminPanelReservations from "./components/admin/AdminPanelReservations";
import Footer from "./components/footer/Footer";
import Reservation from "./components/rezervation/Reservation";
import ContactPage from "./components/contact/ContactPage";
import UserProfilePage from "./components/profile/UserProfilePage";
import UserReservationPage from "./components/profile/UserReservationPage";
import NotAuthenticated from "./components/NotAuthenticated";

function App() {
  return (
    <Router>
        <NavigationBar/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/admin_panel" exact component={AdminPanelNavbar}/>
                <Route path="/admin_panel/users" exact component={AdminPanelUsers}/>
                <Route path="/admin_panel/reservations" exact component={AdminPanelReservations}/>
                <Route path="/reservation" exact component={Reservation}/>
                <Route path="/contact" exact component={ContactPage}/>
                <Route path="/user/profile" exact component={UserProfilePage}/>
                <Route path="/user/reservations" exact component={UserReservationPage}/>
                <Route path="/not_authenticated" exact component={NotAuthenticated}/>
            </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
