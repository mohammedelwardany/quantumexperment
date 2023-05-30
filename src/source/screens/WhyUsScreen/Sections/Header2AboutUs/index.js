

import { useInView } from "react-intersection-observer";
import "./styles.css"
import { useAnimation , motion } from "framer-motion";
import { useEffect } from "react";


const AboutUsHeader2 = () =>{
    const { ref, inView } = useInView({ threshold: 0.5 });

    const mainControl = useAnimation()
    
    useEffect(() => {
        console.log(inView)
      if(inView){
        mainControl.start('animate')
      }
     
    }, [inView])
  
    return (
<>

<div className="AboutUsContainer2" ref={ref}>



      <div className="AboutUsHeader2" >
      <motion.p
      className="AboutUsParagraph"
            variants={{
              initial: { opacity: 0, x: -1000 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            initial="initial"
            animate="animate"
          >
        Commodo occaecat consequat elit adipisicing cillum magna culpa et irure. Officia mollit Lorem labore ex nisi nulla dolor duis magna. Ut qui incididunt consequat nostrud in non consequat. Ullamco sint anim consectetur exercitation in minim mollit ullamco. Lorem mollit nostrud eu laborum nostrud irure ullamco veniam incididunt reprehenderit. Occaecat enim fugiat nulla amet nisi pariatur irure tempor. Cillum labore labore incididunt excepteur eiusmod qui cupidatat et voluptate laboris fugiat incididunt eu. Elit consectetur id veniam reprehenderit non aute sint ea velit consequat. Velit occaecat nostrud veniam do do tempor nisi aliquip id irure cupidatat dolore commodo ad.
</motion.p>
    </div>

  

{/* <div style={{backgroundColor:"red",width:"100px",height:"500px",position:"absolute"}}> */}

{/* </div> */}

</div>

</>
    )
}

export {AboutUsHeader2}