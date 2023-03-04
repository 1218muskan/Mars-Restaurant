import { useRef } from 'react';
import earth from '../Images/earth.png';
import mars from '../Images/mars.png'
import mars2 from '../Images/mars2.png'
import astranaut from '../Images/astranaut.png'
import "./landing.css";

import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function Landing() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

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
          sticky={{ start: 0.9, end: 4.8 }}
          style={{ textAlign: 'center' }}
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
    </div>
  );
}

export default Landing;