import React from "react";
// import img from "../image/rbook.webp"
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img style={{height:"200px"}} src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" className="btn btn-primary">see more...</NavLink>
                    </div>
                </div>
            </div>

        </>
    )
}

export { Card }