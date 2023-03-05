import React,{useRef, useEffect} from "react";
import Button from "@mui/material/Button";
import { TextField} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LoginPlanet from "../Images/LoginPlanet.png"
import Login from '../Images/Login.png';
import Logo from "../Images/logo.png";



function LoginPage() {

  
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
        <h1 style={{color: "white", alignItems: "center", textAlign: "center"}}>Welcome!</h1>
        <img class="loginImg" src={Login} alt="" />


        {/* <Typography variant="h6" sx={{marginTop:7,color:"white", textAlign:"center"}}>Login as Admin ?</Typography>   */}
        <TextField class="credentials" id="Phone" type="tel" fullWidth placeholder="Enter Mobile Number" ></TextField>
        <TextField class="credentials" id="Password" type="password" fullWidth placeholder="Enter Password"></TextField>
          <Button  variant="contained"
          align="center"
          color="secondary"
          sx={{ marginTop: "20px" ,width:"323px", backgroundColor:"#d45353", marginLeft:"37px", height:"42px", "&:hover": {backgroundColor: "#d45353" }}}
          type="submit"> Sign In</Button>

        <p style={{color: "white", marginTop: "40px", textAlign: "center", fontSize: "18px"}}>Don't have an account?</p>
        <a href="/signup"><Button  variant="outlined"
          align="center"
          sx={{ marginTop: "20px" ,width:"323px", marginLeft:"37px", height:"42px", color: "white", border: "1px solid white",  "&:hover": {border: "1px solid white" }}}
          type="submit"> Sign Up</Button></a>
          
      
        </div>
      </div>

      
    </div> 

    </div> 
  );
}

export default LoginPage;