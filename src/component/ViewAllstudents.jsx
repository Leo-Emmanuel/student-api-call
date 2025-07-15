import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';


const ViewAllAllstudents = () => {
    const [students, changeDataStudent] = useState(
        
            {"status":"success","data":[]}
        
    )
    const fetchdata=()=>{
        axios.get("http://18.144.111.41/view_all_students.php").then(
            (response)=>{
                changeDataStudent(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchdata()},[])




    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <center><h2>STUDENT DETAILS</h2></center>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Rollno</th>
                                    <th>Admission No</th>
                                    <th>College</th>

                                </tr>
                            </thead>
                            <tbody>
                                {students.data.map((value, index) => {
                                    return (
                                        <tr>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.roll_number}</td>
                                            <td>{value.admission_number}</td>
                                            <td>{value.college}</td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllAllstudents
