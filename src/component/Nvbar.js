import React from 'react'
import {Navbar , Nav ,Container}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../App.css"

export default function Nvbar() {
  return (
    <div> 
     
           
           <div dir='rtl'>
            <Navbar bg="dark" variant="dark" className='Navbar' >
    <Container>
      <Navbar.Brand href="#home" dir='rtl'>أبدع بفكرتك</Navbar.Brand>
      <Nav >
        <Nav.Link  dir='rtl'><Link to={"/"}>الرئيسية</Link></Nav.Link>
        <Nav.Link href="#Ideas"><Link to={"/AddIdaea"}>اضف فكرتك</Link></Nav.Link>
        <Nav.Link href="#pricing"><Link to={"/Ideas"}>الأفكار</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar></div></div>
  )
}
