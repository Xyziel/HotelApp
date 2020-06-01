import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/MainPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import TestPage from "./components/TestPage";
import Reservation from "./components/rezervation/Reservation"

function App() {
  return (
    <Router>
        <NavigationBar/>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/test" exact component={TestPage}/>
                <Route path="/reservation" exact component={Reservation}/>
            </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
