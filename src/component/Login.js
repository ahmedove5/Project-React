import React from 'react'
import './CSS/Login.css';
import  {useEffect, useState} from 'react'
import {useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postdata = () => {
    axios
      .post(`http://127.0.0.1:8000/users/login`, {
        username,
        password,
      })
      .then((res) => {
        console.log( res.data.token);
        // if (res.status == 200) {
        //   localStorage.setItem("token", res.data.token);
        //   navigate("/");
        // }
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
				{/* <div class="row mx-auto ">
					<div class="col-4">
						<i class="fab fa-twitter"></i>
					</div>
					<div class="col-4">
						<i class="fab fa-facebook"></i>
					</div>
					<div class="col-4">
						<i class="fab fa-google"></i>
					</div>
				</div> */}
				<div class="division">
					<div class="row">
						<div class="col-6"><span>تسجيل الدخول</span></div>
						
					</div>
				</div>
				<form class="myform">
					<div class="form-group">
    					<input onChange={(e)=>{
                            setUsername(e.target.value)
                        }} type="email" class="form-control" placeholder="Email"/>
  					</div>
 					<div class="form-group">
    					<input  onChange={(e)=>{
                            setPassword(e.target.value)
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
  						<button onClick={postdata} type="button" class="btn btn-block btn-primary btn-lg"><small><i class="far fa-user pr-2"></i>تسجيل الدخول</small></button>
  					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}
