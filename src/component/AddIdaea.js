import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate } from "react-router-dom"
import { Button } from 'react-bootstrap'
// import "./CSS/AddIdea.css"

export default function () {
    const navigate=useNavigate()
    const [idea , setIdea]=useState("")
    const [dscreption , setDscreption]=useState("")
    const [cost , setCost]=useState("")
    const postdata =()=>{
        axios.post(`https://62d3e350cd960e45d44f7d3a.mockapi.io/api`,{
            idea,
            dscreption,
            cost
        }).then(res=>{console.log(res)
          navigate("/Ideas") })

        .catch(err=>{console.log(err)})

    }
  return (
    
    <div>
        <input placeholder='الفكرة' onChange={(e)=>{setIdea(e.target.value)}}></input>
        <br/>
        <input placeholder='الوصف' onChange={(e)=>{setDscreption(e.target.value)}}></input>
        <br></br>
        <input placeholder='التكلفة' onChange={(e)=>{setCost(e.target.value)}}></input>
        <br/>
        <Button variant="warning" onClick={postdata}>اضف فكرتك</Button>{' '}

       </div>
   
  )
}
