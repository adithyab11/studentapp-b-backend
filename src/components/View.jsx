import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,setData]=useState([])
    const fetchData=()=>{
      axios.get("http://localhost:8080/view",data).then(
          (response)=>{
              setData(response.data)
          }
      ).catch().finally()
  }
  useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Navbar/>
        <center><h3>VIEW DETAILS</h3></center>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">ROLL NO</th>
      <th scope="col">ADMISSION NO</th>
      <th scope="col">COLLEGE</th>
    </tr>
  </thead>
  <tbody>
    {data.map((value,index)=>
    {
        return  <tr>
        <td scope="row">{value.name}</td>
        <td>{value.rollNo}</td>
        <td>{value.admNo}</td>
        <td>{value.college}</td>
      </tr>
    })
    }
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View