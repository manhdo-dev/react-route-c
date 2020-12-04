import React from 'react';
import {
    NavLink
  } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand js-scroll-trigger">Start Bootstrap</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                                <li className="nav-item"><NavLink to="/news" className="nav-link js-scroll-trigger">News</NavLink></li>
                                <li className="nav-item"><NavLink to="/about" className="nav-link js-scroll-trigger">About</NavLink></li>
                                <li className="nav-item"><NavLink to="/services" className="nav-link js-scroll-trigger">Services</NavLink></li>
                                <li className="nav-item"><NavLink to="/portfolio" className="nav-link js-scroll-trigger">Portfolio</NavLink></li>
                                <li className="nav-item"><NavLink to="/contact" className="nav-link js-scroll-trigger">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

