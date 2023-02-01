import React from "react";
import { NavLink } from "react-router-dom";
import image from "../image/Happy_logo.png"

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg_color">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid" >
                                <NavLink className="navbar-brand" to="/"><img style={{height:"40px", borderRadius:"10px"}} src={image} alt="logo" /><sup className="st">S</sup><sub className="st">TECHNOLOGY</sub></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2  w-100 justify-content-end mb-lg-0 gap-4">
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service">Sevices</NavLink>
                                        </li>                                         
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li> 
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                        </li> 
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/userdetails">User</NavLink>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar