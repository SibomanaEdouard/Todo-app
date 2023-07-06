import React from "react";
import { useState } from "react";
import {FaEye, FaEyeSlash} from 'react-icons/fa'




// updating password
const UpdatePass=(e)=>{
e.preventDefault();
window.location.href='/updatepassword';
}

//to sign in page
const HandleSigning=(e)=>{

    e.preventDefault();
    window.location.href='/sign';
}

//this is the login in foprm
function LoginForm() {
    const [inputs, setInputs] = useState({
      email:"",
      password:""
    });

  
    //this is the function to hide or showpassword
    const [showpassword,setShowpassword]=useState(false);

    //function to handle change
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    //to feth data from login page
    const FetLogin = async(event)=>{
      event.preventDefault();
 
      try{

      const response=await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
        "Content-Type":"application/json",  
        },
        body:JSON.stringify(inputs)

      });

      //to check is the response is ok
      if(response.ok){
        const user=await response.json();

        //To take information from the backend

        const Id=user;
       
        localStorage.setItem('id', Id);   
     setInputs({
      email:"",
      password:""
     });
     
     //this to navigate to profiles
     window.location.href='/tasks';
      }
      else{

        //to get error from the backend
        const ResponseError=await response.json();
        throw new Error(ResponseError.error);
        
      }
  

    }catch (error){
      console.error(error);

    alert(error);
    
    }
  }

 

  //The fields of login formm
    return (
<div className="container border mt-5 w-50 h-50 pt-5 pb-5">
<div className="row justify-content-center">
  <div className="col-md-6">
      <h1 className="headerlo pb-5 text-primary">Login</h1>
      <div className="form1">
      <form onSubmit = {FetLogin}>
          <div className="form-group col-md-4 mb-3 ">
          <label>
            Email
            <br />
            <input
            className="form-group email1"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              value={inputs.email || ""}
              onChange={handleChange}
            
            />
          </label>
          <br />
          <label>
            Password
            <br />
            <input
              type={showpassword ? 'text':'password'}
              name="password"
              id="password"
              placeholder="Enter Your password"
              required
              value={inputs.password || ""}
              onChange={handleChange}
              className="form-group"
              
            />
            {showpassword ? (
              <FaEyeSlash
              className="pass-iconl"
              onClick={()=>setShowpassword(false)}
              />
            ):(
              <FaEye 
              className="pass-iconl"
              onClick={()=>setShowpassword(true)}
              />
            )}
          </label>
          <br />
          <button type="submit" className="logobutton  btn btn-primary">Login</button>
          </div>
        </form>
        <br/><br/>
        <h1><span className="Ask">Forget your password? </span><button onClick={UpdatePass} className="buttons border-0">Reset</button>
        </h1> 
        <h1> <span className="Ask">New Here ?</span><button onClick={HandleSigning} className="buttons border-0">SignUp</button></h1>
       
       
      </div>
  
      </div>
      </div>
    </div>

    );
  }
  
  export default LoginForm;





