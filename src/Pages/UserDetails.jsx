
// -------------------------------------------------------------


import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
// import { Pagination } from "react-bootstrap";
import "../index.css"
// import { Pagination } from "./Pagination";

//--------------------------------------------------------------

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
//----------------------------------------------------------------
const UserDetails = () => {
    const [data1, setData1] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [dataPerPage, setDataPerPage] = useState(4);

    // console.log(data1)

    useEffect(() => {
        setData1(getLocalItems())

    }, [])


    // Get current data
    // const indexOfLastData = currentPage * dataPerPage;
    // const indexOfFirstData = indexOfLastData - dataPerPage;
    // const currentData = data1.slice(indexOfFirstData, indexOfLastData);

    // Change page
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);


    //---------------------------------------------------------------- Search data from table yes || not .

    // Serch data and filter data 
    const [value, setValue] = useState('')
    const [tableFilter, settableFilter] = useState([])

    const filter_Data = (e) => {
        if (e.target.value !== "") {
            setValue(e.target.value);
            const filterTable = data1.filter(o => Object.keys(o).some(k =>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            settableFilter([...filterTable])
        }
        else {
            setValue(e.target.value);
            setData1([...data1])
        }
    }


    //--------------------------------------------------------------------------- Delete function

    // delete data from local storage    
    const deleteDatas = (e) => {
        // console.log(e);
        const filterData = data1.filter((ele, index) => {
            return index !== e;
        })
        setData1(filterData);
        // localStorage.setItem('datas', JSON.stringify(data1))
    }

    // --------------------------------------------------------------------------------

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('datas', JSON.stringify(data1));
        // toast.success('user saved')

    }, [data1]);


    // ------------------------------------------------------------------------------

    return (
        <>

            <div className="userbg tableSize">
                <div className="view-container container text-center mt-5">
                    <div className="table-responsive">
                        <div className="nn"> Contact All Data Show Here</div><br />

                        {/* serach data here */}
                        <div>
                            <input type="text" className="form-control" placeholder="Search Data Here" value={value} onChange={filter_Data} />
                        </div><br />

                        <table className="table">
                            <thead className="theadBD">
                                <tr>
                                    <th><i>Sr.No</i></th>
                                    <th><i>Fullname</i></th>
                                    <th><i>Mobile Number</i></th>
                                    <th><i>Email_ID</i></th>
                                    <th><i>Massage</i></th>
                                    <th><i>Delete</i></th>
                                </tr>
                            </thead>
                            {/* ternary operater apply here */}
                            {value.length > 0 ? tableFilter.map((item, ind) => {
                                return (
                                    <tbody key={ind} className="tbodyBD_1">
                                        <tr>
                                            <td>{ind + 1}</td>
                                            <td>{item.fullname}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.msg}</td>

                                            {/* find email from local storage */}
                                            <td className="delete-btn" onClick={() => deleteDatas(ind)}>
                                                <FaTrashAlt className="pointer" />
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                                :
                                data1.map((item, ind) => {
                                    return (
                                        <tbody key={ind} className="tbodyBD_1">
                                            <tr>
                                                <td>{ind + 1}</td>
                                                <td>{item.fullname}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.email}</td>
                                                <td>{item.msg}</td>

                                                {/* find email from local storage */}
                                                <td className="delete-btn" onClick={() => deleteDatas(ind)}>
                                                    <FaTrashAlt className="pointer" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }

                        </table>
                    </div>

                    {/* <Pagination>
                        {Array.from({ length: Math.ceil(data1.length / dataPerPage) }, (_, i) => (
                            <Pagination.Item
                                key={i}
                                active={i + 1 === currentPage}
                                onClick={() => paginate(i + 1)}
                            >
                                {i + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination> */}

                    {/* ------------Remove All Data----------- */}
                    {/* <button onClick={() => setData1([])} className="btn btn-danger btn-md">Remove All</button> */}
                </div>
            </div>
        </>
    )

}
export { UserDetails }