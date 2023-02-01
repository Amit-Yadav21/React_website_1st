import React from "react";
import reactbook from "../image/rbook.webp"
import jbook from "../image/js2book.jpeg"
import jpbook from "../image/jpbook.jpg"
import nbook from "../image/nbook.jpg"
import npbook from "../image/nnbook.jpg"
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto"> 
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg1 d-flex justify-content-center flex-column">
                                    <h1>Best platform to grow your logic</h1>
                                    <h2 className="my-3">How to develop websie ? Please read this type of book .</h2>
                                    <div className="mt-3">
                                        <NavLink to="/service" className="btn-get-started">Go to service page</NavLink>
                                    </div>
                                </div>

                                {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={jbook} className="img-fluid animated" alt="home img" />
                                </div> */}

                                 <div id="carouselExampleFade" className="carousel slide carousel-fade col-lg-6 order-1 order-lg-2 header-img mb-5" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item  active">
                                            <img  src={reactbook} className="img-fluid animated" alt="home img" />
                                        </div>
                                        <div className="carousel-item">
                                            <img  src={jbook} className="img-fluid animated" alt="home img" />
                                        </div>
                                        <div className="carousel-item">
                                            <img  src={jpbook} className="img-fluid animated" alt="home img" />
                                        </div>
                                        <div className="carousel-item">
                                            <img  src={nbook} className="img-fluid animated" alt="home img" />
                                        </div>
                                        <div className="carousel-item">
                                            <img  src={npbook} className="img-fluid animated" alt="home img" />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev w-100" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next w-25" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div> 

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { Home }