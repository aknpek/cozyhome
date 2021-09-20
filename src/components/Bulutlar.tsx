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

import Ay from "../svgs/Ay";
import BulutFirst from "../svgs/BulutFirst";
import BulutSecond from "../svgs/BulutSecond";
import Cerce from "../svgs/Cerce";
import React from "react";
import TwitterLogo from "../svgs/TwitterLogo";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IBulut {}

const BulutlarComponent = styled.div`
  
`;

const BulutlarContainer: React.FC<IBulut> = () => {
  return (
    <BulutlarComponent>
      <motion.div
        className={"BulutFirst"}
        initial={{ scale: 0.9, opacity: 1.0 }}
        animate={{ scale: 0.6, opacity: 1.0, translateX: "20px" }}
        transition={{ repeat: Infinity, duration: 20 }}
      >
        <BulutFirst />

      </motion.div>
    </BulutlarComponent>
  );
};

export default BulutlarContainer;