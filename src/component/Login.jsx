import React, { useState } from 'react'

const Login = () => {
const [input,changeInput]=useState(
    {username:"",password:""}
)
const inputHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
}
const readvalues=()=>{
    console.log(input)
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control" name='username' value={input.username} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="text" className="form-control" name='password' value={input.password}onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Button</button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login