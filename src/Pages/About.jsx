import React from "react";
import jbook from "../image/js2book.jpeg"
// import { NavLink } from "react-router-dom";


const About = () => {
    return (
        <>
            <section id="about" className="d-flex align-items-center mt-1">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 pt-0 pt-lg-0 order-2 order-lg1 flex-column">
                                    {/* <h4>Welcome to<strong className="brand-nam"> About </strong>page</h4>
                                    <h2 className="my-3">How to develop websie ? Please read this type of book .</h2>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn-get-started">Contact Now</NavLink>
                                    </div> */}
                                    <div  className="paragrap">
                                        <h1 className="brand-name">About Us</h1>
                                        <p>HAPPY_S_TECHNOLOGY is a leading IT technology service provider that offers pioneering Website Development Company. Having 1.5 years of traning experience gives you innovative & trending designing & development which never settle with good but give you great.</p><br />
                                        <p>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors. And the smart design of any website is the starting point.</p><br />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1 about-img">
                                    <img src={jbook} className="img-fluid animated w-75" alt="About img" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { About }