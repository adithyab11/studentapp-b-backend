import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const[data,setData]=useState(
        {
        "name":"",
        "rollNo":"",
        "admNo":"",
        "college":""
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>
        {
            console.log(data)
            axios.post("http://localhost:8080/add",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("successfullly added")
                        
                    } else {
                        alert("error")
                        
                    }
                }
            ).catch().finally()
            
        }
  return (
    <div>
        <Navbar/>
        <br></br>
        <center><h1>ADD STUDENT</h1></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Roll No</label>
                    <input type="text" className="form-control" name='rollNo' value={data.rollNo} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Adm No</label>
                <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">College</label>
                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readValue}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add