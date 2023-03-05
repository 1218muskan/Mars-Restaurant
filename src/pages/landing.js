import { useRef } from 'react';
import earth from '../Images/earth.png';
import mars from '../Images/mars.png'
import mars2 from '../Images/mars2.png'
import Button from "@mui/material/Button";
import astranaut from '../Images/astranaut.png'
import "./landing.css";
import { Link, useNavigate } from 'react-router-dom';


import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function Landing() {
  const navigate = useNavigate();
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${earth})`,
            backgroundSize: 'contain',
            opacity: '0.8',
          }} 
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${mars})`,
            backgroundSize: 'contain',
            opacity: '0.8',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 5.5 }}
          style={{ textAlign: 'center'}}
        >
          <img src={astranaut} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Taking-off to MARS!</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>WELCOME TO MARS</h2>

          
          
        </ParallaxLayer>

        

      </Parallax>

      <div style={{textAlign: "center", position: "absolute", bottom: "25vh", left: "25%"}} class="dinein-delivery-cont">
          <a href="/dinein"><Button  variant="contained"
          align="center"
          color="secondary"
          sx={{ marginTop: "20px" ,width:"323px", backgroundColor:"white", marginLeft:"37px", height:"42px", color: "black", border: "1px solid white",  "&:hover": {border: "1px solid white", backgroundColor:"white" }}}
          > Dine-In</Button></a>

<a href="/home"><Button  variant="contained"
          align="center"
          color="secondary"
          sx={{ marginTop: "20px" ,width:"323px", backgroundColor:"#771414", marginLeft:"37px", height:"42px", "&:hover": {backgroundColor: "#771414" }}}
          > Delivery</Button></a>
          </div>

    </div>
  );
}

export default Landing;