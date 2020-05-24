import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./components/MainPage";
import {Container} from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import TestPage from "./components/TestPage";

function App() {
  return (
    <Router>
        <NavigationBar/>
        <Container>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/test" exact component={TestPage}/>
            </Switch>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
