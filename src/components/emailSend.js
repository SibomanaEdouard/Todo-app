import React from "react";
import { useState } from "react";

//let me create components 
const EmailForm=()=>{
const[input,setInput]=useState("email");

//this is to handle submit
const handleSubmit=async(event)=>{
    event.preventDefault();
try{
    //this is to send response to the backend API
const response= await fetch("http://localhost:5000/resetpassword",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(input)
});
if(response.ok){
const messagesFromBack=await response.json();
alert(messagesFromBack);
setInput({
    email:""
})
window.location.href='/';
}
else{
    const messageError=await response.json();
    throw new Error(messageError.error);
}
}catch(error){
    console.log(error);
}
}
//this is to handle change
const handleChange=(event)=>{
    event.preventDefault();
    const name=event.target.name;
    const value=event.target.value;
    setInput((values)=>({...values,[name]:value}));


}
return(<div>

<h1>Enter your email</h1>
<form onSubmit={handleSubmit}>
    <label for="email">Email</label><br/>
<input
name="email"
value={input.email || ""}
onChange={handleChange}
/><br/>
<button>submit</button>
</form>
</div>)
}
export default EmailForm;