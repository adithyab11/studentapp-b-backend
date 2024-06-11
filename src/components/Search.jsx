import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const[data,setData]=useState(
        {
       
        "admNo":""
       
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>
        {
            console.log(data)
        }
  return (
    <div>
        <Navbar/>
        <br>
        </br>
        <center><h3>SEARCH FOR STUDENT</h3></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Adm No</label>
                <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success" onClick={readValue}>Search</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search