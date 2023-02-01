import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaEnvelope } from 'react-icons/fa';
import { HiPhone } from "react-icons/hi2";
import { ImHome } from "react-icons/im";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';



// -------------------------------------------------------------

// getting data values of local storages
const getLocalItems = () => {
    const userData = localStorage.getItem('datas')
    // console.log(userData);
    if (userData) {
        // return JSON.parse(localStorage.getItem('list'))
        return JSON.parse(userData)

    } else {
        return [];
    }
}
const Contact = () => {

    // input field states
    const [fullname, setfname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setmail] = useState('');
    const [msg, setmsg] = useState('');


    // main array of object 
    const [datas, setDatas] = useState(getLocalItems());


    // form submit state
    const handleData = (e) => {
        e.preventDefault();
        // toast.success('user')

        // creating an object . when key and value same
        const data = {
            fullname,
            phone,
            email,
            msg
        }

        
        // ------------------------------------------------fullname and phone number vailidation .
        const namePattern = "[a-zA-Z]";
        const numberPattern = "[0-9]"
        const phonev = phone.length < 10 || phone.length > 10

        if (fullname.match(namePattern) && phone.match(numberPattern) && phone.length === 10) {
            setDatas([...datas, data])
            setfname('')
            setphone('')
            setmail('')
            setmsg('')
            toast.success("data store local storage on browser and get user page", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        } else if (!fullname.match(namePattern)) {
            alert("Name can contain only alphabets")
        } else if (!phone.match(numberPattern)) {
            alert("phone number can contain only number")
        } else if (!phone.match(phonev)) {
            alert('phone number only take 10 digit')
        }
        // ---------------------------------------------------------------------------------//

    }

    // ------------------------------------------------
    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('datas', JSON.stringify(datas));
        // toast.success('user saved')
    }, [datas]);


    return (
        <>
            <div className="contactBG">
                <div className="my-5">
                    <h1 className="text-center"> Contact US</h1>
                </div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={handleData} className="contactForm bg-white needs-validation">
                                <div className="mb-3 form-group was-validated">
                                    <label rules={[{required:true, message:"please enter yoiur name"}]} htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                    <input type="text" className="form-control" required id="exampleFormControlInput1" name="fullname" value={fullname} onChange={e => setfname(e.target.value)} placeholder="Enter your name" autoComplete="off" />
                                </div>
                                <div className="mb-3 form-group was-validated">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" required id="exampleFormControlInput1" name="phone" value={phone} onChange={e => setphone(e.target.value)} placeholder="Mobile number" autoComplete="off" />
                                </div>
                                <div className="mb-3 form-group was-validated">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" required id="exampleFormControlInput1" name="email" value={email} onChange={e => setmail(e.target.value)} placeholder="name@example.com" autoComplete="off" />
                                </div>
                                <div className="mb-3 form-group was-validated">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" required id="exampleFormControlTextarea1" rows="3" name="msg" value={msg} onChange={e => setmsg(e.target.value)}></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-outline-primary " type="submit">Submit</button>
                                    <ToastContainer />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-1 container text-center mx-auto">
                    <div className="row col-10 mx-auto">
                        <div className="col-lg-4 mt-5">
                            <div className="card address w-100 h-100">
                                <div className="card-body">
                                    <FaEnvelope className="EmailIcon" />
                                    <h5 className="card-title fw-bold">Email</h5>
                                    <br />
                                    <p className="card-text">amity.apgroup@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="card address w-100 h-100">
                                <div className="card-body">
                                    <HiPhone className="phoneIcone" />
                                    <h5 className="card-title fw-bold">Phone</h5>
                                    <br />
                                    <p className="card-text">9651025253</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <div className="card address w-100">
                                <div className="card-body">
                                    <ImHome className="addressIcone" />
                                    <h5 className="card-title fw-bold">Address</h5>
                                    <p className="card-text">Vill & Post :- Tejgarh Mariahu Jaunpur, Uttar Pradesh <br />PinCode -222137</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export { Contact }