import BulutFirst from "../svgs/BulutFirst";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IBulut {}

const BulutlarComponent = styled.div`
svg { 
  width: calc(100% - 8em);
  height:calc(100% - 5em);
  
  }
`;

const BulutlarContainer: React.FC<IBulut> = () => {
  return (
    <BulutlarComponent>
      <motion.div
        animate={{
          scale:  [1, 1, 1, 1, 1],
          translateX: ["30px", "0px", "20px", "0px", "30px"],
          // rotate: [Math.random() * 100, -Math.random() * 100, Math.random() * 100, -Math.random() * 100, Math.random() * 100],
          opacity: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
        }}
      >
        <BulutFirst />

      </motion.div>
    </BulutlarComponent>
  );
};

export default BulutlarContainer;