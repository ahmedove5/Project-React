import React from 'react'
import './CSS/Login.css';
import  {useEffect, useState} from 'react'
import {useNavigate } from "react-router-dom"
import axios from 'axios'



export default function Login() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    const postData = () => {
      axios
        .post(`https://62d3e34acd960e45d44f7ccf.mockapi.io/fakeAPI`, {
          firstName,
          lastName,
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    
  return (
    <div>
      <div class="container">
	<div class="row d-flex justify-content-center mt-5">
		<div class="col-12 col-md-8 col-lg-6 col-xl-5">
			<div class="card py-3 px-2">
				<p class="text-center mb-3 mt-2">تسجيل الدخول</p>
			
				<div class="division">
					<div class="row">
						<div class="col-6"><span>تسجيل الدخول</span></div>
						
					</div>
				</div>
				<form class="myform">
					<div class="form-group">
    					<input onChange={(e)=>{
                            setFirstName(e.target.value)
                        }} type="email" class="form-control" placeholder="Email"/>
  					</div>
 					<div class="form-group">
    					<input  onChange={(e)=>{
                            setLastName(e.target.value)
                        }}type="password" class="form-control" placeholder="password"/>
  					</div>
  					<div class="row">
  						<div class="col-md-6 col-12">
  							<div class="form-group form-check">
    							<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    							<label class="form-check-label" for="exampleCheck1">تذكر كلمة المرور</label>
  							</div>
  						</div>
  						
  					</div>
  					<div class="form-group mt-3">
  						<button onClick={postData} type="button" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i>تسجيل الدخول</small></button>
  					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    
    </div>
  )
}
