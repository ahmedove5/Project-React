import React from 'react'
import  {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Col, Container,Row } from 'react-bootstrap'
import "./CSS/Idea.css"
import { Button } from 'react-bootstrap'
let arr=[]
let showlist ;
export default function Ideas() {
    const [data ,setData]=useState([])
      const [name1 , setName]=useState([{
        comment1:""}
      ]) 
    
    showlist= name1.map((c,index)=>{
      if (c.comment1 === ""){
        return(
          <div>

          </div>


        )
      }
      else {
        return(
          <h3>{c.comment1}</h3>
        )
      }
    })
    // const [comments , setComments]=useState([])
    // const [comment , setComment]=useState('')
    // const [id, setId] = useState([]);
    
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
//   const setIdd =()=>{
//     setComments([...comments , comment])
//     setComment("")
//   }
const postData = (e ) => {

  e.preventDefault();
  arr=[...name1, {
    comment1:e.target.parentElement.children[0].value

  }]
  setName(arr)

    // axios
    //   .post(`https://62d3e350cd960e45d44f7d3a.mockapi.io/addComment${id}`, {
    //     comment,
    //     comments
        

    //   })
    //   .then((res) => {
    //     console.log(res);
    //     // navigate("/Home");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

  };
  return (
    <div>
   
       
        <Container>
            <Row md={"3"}>
        {data.map(e=>(
                <Col  >
               
               {e.idea} 
               {e.dscreption}
               
        <Card className='cards mb-4' style={{ width: '18rem' ,float:'left'}}>
      <Card.Body>
        <Card.Title className='text-'>{e.idea}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{e.dscreption}</Card.Subtitle>
        <Card.Text>
       {e.cost} SR
        </Card.Text>
       
 
        <Button variant="dark"  onClick={()=>{onDelete(e.id)}}>امسح فكرتك</Button>{' '}
        
      </Card.Body>
    <form>
        <input value={name1.comment1} placeholder='التكلفة'  ></input>
        <br/>

        <ul>
            {/* {comments.map((c)=>(
                <li key={c.if}>{c.comment}</li>
            ))} */}
            
        </ul>
      
        <button  onClick={postData}>اضف</button>
        </form>
        {showlist}
    </Card>

    </Col>
      ))}
    </Row>
    </Container>
       
    </div>
  )
          }