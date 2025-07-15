import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {
const[input,changeInput]=useState(
    {
        name:"",roll_no:"",admission_number:"",college:""
    }
)
const inputHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
}
const readInput=()=>{
    console.log(input)

    axios.post("http://18.144.111.41/student_api.php",input).then(
        (response)=>{
            alert("successfully added")
        }
    ).catch()
}
  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">rollno</label>
                            <input type="text" className="form-control"  name='roll_no' value={input.roll_no} onChange={inputHandler} />
                            </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">admission no</label>
                            <input type="text" className="form-control"  name='admission_number' value={input.admission_number} onChange={inputHandler} />
                        </div>
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">college</label>
                            <input type="text" className="form-control"  name='college' value={input.college} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readInput}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Addstudent



// name, roll number,admissions number,college. 