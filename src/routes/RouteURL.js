import React from 'react';
import {
    Route
  } from "react-router-dom";
import About from '../page/About/About';
import Contact from '../page/Contact/Contact';
import Home from '../page/Home/Home';
import News from '../page/News/News';
import Portfolio from '../page/Portfolio/Portfolio';
import Services from '../page/Services/Services';
export default class RouteURL extends React.Component {
    render() {
        return (
            <div>   
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>        
            </div>
        )
    }
}
