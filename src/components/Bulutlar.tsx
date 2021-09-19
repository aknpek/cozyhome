// .BulutFirst {
//     background-color: transparent;
//     display: flex;
//     position: absolute;
//     z-index: 1;
//     height: 0px;
//     width: 0px;
//     pointer-events: none;
//     box-shadow: none;
//   }

//   .BulutSecond {
//     background-color: transparent;
//     display: flex;
//     position: absolute;
//     z-index: 1;
//     margin-top: 20%;
//     margin-right: 30%;
//     height: 0px;
//     width: 0px;
//     pointer-events: none;
//     box-shadow: none;
//   }

//   .BulutThird {
//     background-color: transparent;
//     display: flex;
//     position: absolute;
//     z-index: 1;
//     margin-top: 15%;
//     margin-left: 80%;
//     height: 0px;
//     width: 0px;
//     pointer-events: none;
//     box-shadow: none;
//   }

//   .BulutFourth {
//     background-color: transparent;
//     display: flex;
//     position: absolute;
//     z-index: 1;
//     margin-top: 35%;
//     margin-left: 50%;
//     height: 0px;
//     width: 0px;
//     pointer-events: none;
//     box-shadow: none;
//   }

import BulutFirst from "../svgs/BulutFirst";
import BulutSecond from "../svgs/BulutSecond";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IBulut {}

const BulutlarComponent = styled.div`
  display: flex;
  z-index: 2;

`;

const BulutlarContainer: React.FC<IBulut> = () => {
  return (
    <BulutlarComponent>
      <motion.div
        className={"BulutFirst"}
        initial={{ scale: 0.3, opacity: 0.6 }}
        animate={{ scale: 0.4, opacity: 1.0, translateX: "20px" }}
        transition={{ repeat: Infinity, duration: 7.5 }}
      >
        <BulutSecond />

        <BulutlarComponent />
      </motion.div>
    </BulutlarComponent>
  );
};

export default BulutlarContainer;



    //   {/* <motion.div
    //     className={"BulutFirst"}
    //     initial={{ scale: 0.3, opacity: 0.6 }}
    //     animate={{ scale: 0.4, opacity: 1.0, translateX: "20px" }}
    //     transition={{ repeat: Infinity, duration: 7.5 }}
    //   >
    //     <BulutFirst />
    //   </motion.div>
    //   <motion.div
    //     className={"BulutSecond"}
    //     initial={{ scale: 0.8, opacity: 0.8 }}
    //     animate={{ scale: 0.9, opacity: 1, translateX: "-50px" }}
    //     transition={{ repeat: Infinity, duration: 6.5 }}
    //   >
    //     <BulutSecond />
    //   </motion.div>
    //   <motion.div
    //     className={"BulutThird"}
    //     initial={{ scale: 0.2, opacity: 0.5 }}
    //     animate={{ scale: 0.4, opacity: 1, translateX: "100px" }}
    //     transition={{ repeat: Infinity, duration: 5.5 }}
    //   >
    //     <BulutFirst />
    //   </motion.div>
    //   <motion.div
    //     className={"BulutFourth"}
    //     initial={{ scale: 0.5, opacity: 0.6 }}
    //     animate={{ scale: 0.6, opacity: 1, translateX: "60px" }}
    //     transition={{ repeat: Infinity, duration: 5.5 }}
    //   >
    //     <BulutFirst />
    //   </motion.div>
   
    // */}