import React from "react";
import { Sdata } from "./Sdata";
import { Card } from "./Card";

const Service = () => {
    return (
        <div className="serveceBG">
            <div>
                <div>
                    <h1 className="text-center">Our Services</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                {
                                    Sdata.map((val, index) => {
                                        return <Card key={index} imgsrc ={val.imgsrc} title ={val.title} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Service }