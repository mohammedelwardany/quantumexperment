

import { useInView } from "react-intersection-observer";
import "./styles.css"
import { useAnimation , motion } from "framer-motion";
import { useEffect } from "react";


const AboutUsHeader2 = () =>{
    const { ref, inView } = useInView({ threshold: 0.5 });

    const mainControl = useAnimation()
    
    useEffect(() => {
      if(inView){
        mainControl.start('animate')
      }
      // console.log(inView)
     
    }, [inView])

    return (
<>

<div className="AboutUsContainer2 " ref={ref}>



      <div className="AboutUsHeader2" >
      <motion.p
      className="AboutUsParagraph font-gilroy"
            variants={{
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate={mainControl}
            
          >
        Every business seeks to establish a safe environment that sustains seamless operations and robust functions. Choosing the right IT provider is the first step to achieving this. Quantum Information Technology offers new values in the market that encourage large enterprises and SMEs to invest their trust. Every action and communication we develop establishes a mutual channel of transparency and resilience.
</motion.p>
    </div>

  

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>

</>
    )
}

export {AboutUsHeader2}