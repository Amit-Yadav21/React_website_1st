import React from "react";
import jbook from "../image/js2book.jpeg"
import { NavLink } from "react-router-dom";

const Common = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto"> 
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg1 d-flex justify-content-center flex-column">
                                    <h1>Welcome to<strong className="brand-name"> Common </strong>page</h1>
                                    <h2 className="my-3">How to develop websie ? Please read this type of book .</h2>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn-get-started">Contact Now</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={jbook} className="img-fluid animated" alt="Common img" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Common }