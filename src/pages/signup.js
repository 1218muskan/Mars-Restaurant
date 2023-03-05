import React,{useRef, useEffect} from "react";
// import Button from "@mui/material/Button";
// import { TextField} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LoginPlanet from "../Images/LoginPlanet.png"
import Login from '../Images/Login.png'
import Logo from "../Images/logo.png";



function LoginPage() {
  const [name,setName]=useState('');
  const [phone, setPhone] = useState('');
  const [password,setPassword]=useState('');

  
  return (
    <div>
    <div class="bar">
      <div class="login-nav">
        <img class="Logo" src={Logo} alt="Logo" />
      </div>
      <hr/>
    </div>


    <div className="ver-line">
      <img className="loginPlanet"  src={LoginPlanet} alt="mainImg" />
      <div className="vert-line">
        
        <div className="form-cont">
        {/* <Typography variant="h4" color={"white"} align="center">Welcome !</Typography> */}
        <img class="loginImg" src={Login} alt="" />


        {/* <Typography variant="h6" sx={{marginTop:7,color:"white", textAlign:"center"}}>Login as Admin ?</Typography>   */}
        {/* <TextField class="credentials" id="Name" type="text" fullWidth placeholder="Enter Name" onChange={(e)=> {setName(e.target.value);}}></TextField>
        <TextField class="credentials" id="Phone" type="tel" fullWidth placeholder="Enter Mobile Number" onChange={(e)=> {setPhone(e.target.value);}}></TextField>
        <TextField class="credentials" id="Password" type="password" fullWidth placeholder="Enter Password" onChange={(e)=> {setPassword(e.target.value);}}></TextField> */}
          {/* <Button  variant="contained"
          align="center"
          color="secondary"
          sx={{ marginTop: "20px" ,width:"323px", backgroundColor:"#8152BD", marginLeft:"37px", height:"42px"}}
          type="submit"> Sign In</Button> */}
      
        </div>
      </div>

      
    </div> 

    </div> 
  );
}

export default LoginPage;