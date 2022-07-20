import React from 'react'
import  {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Col, Container,Row } from 'react-bootstrap'
import "./CSS/Idea.css"

export default function Ideas() {
    const [data ,setData]=useState([])
    const [comments , setComments]=useState([])
    const [comment , setComment]=useState('')
    
    useEffect(()=>{
        axios.get(`https://62d3e350cd960e45d44f7d3a.mockapi.io/api`)
        .then(res=>{
            console.log(res.data)
           
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    //update
    const setUpdate=(e)=>{
        let {id ,idea ,dscreption,cost}=e
        localStorage.setItem("id",id)
        localStorage.setItem("idea",idea)
        localStorage.setItem("dscreption",dscreption)
        localStorage.setItem("cost",cost)

    }
 //delete
  const getData=()=>{
    axios.get(`https://62d3e350cd960e45d44f7d3a.mockapi.io/api`).then(getData=>{setData(getData.data)})
  }
  const onDelete =(id)=>{
    axios.delete(`https://62d3e350cd960e45d44f7d3a.mockapi.io/api/${id}`)
    .then(()=>{
        getData()


    })

  }
  const setIdd =()=>{
    setComments([...comments , comment])
    setComment("")
  }
  return (
    <div>
        {/* <ul>
            {data.map(e=>(
                <>
                <li>{e.idea} </li>
                <li> {e.dscreption}</li>
                <li className='c-l'> {e.cost}</li>
                <Link to="/Uodate">
                <button onClick={setUpdate(e)}>update</button>
                </Link>
                <button onClick={()=>{onDelete(e.id)}}>Delete</button>
                

                
                </>

            ))}
        </ul> */}
        <article class="wrapper">

        </article>
        <Container>
            <Row md={"3"}>
        {data.map(e=>(
                <Col  >
               
            
        <Card className='cards mb-4' style={{ width: '18rem' ,float:'left'}}>
      <Card.Body>
        <Card.Title className='text-'>{e.idea}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{e.dscreption}</Card.Subtitle>
        <Card.Text>
        {e.cost}
        </Card.Text>
       
        <button onClick={setUpdate(e)}>update</button>
        <button onClick={()=>{onDelete(e.id)}}>Delete</button>
        <input onChange={(e)=>{
            setComment(e.target.value)
        }} placeholder='التكلفة' value={comment} ></input>
        <br/>

        <ul>
            {comments.map((c)=>(
                <li>{c}</li>
            ))}
        </ul>
      
        <button onClick={setIdd}>اضف</button>
      </Card.Body>
    </Card>
     
    

    </Col>
      ))}
    </Row>
    </Container>
        
    </div>
  )
}
