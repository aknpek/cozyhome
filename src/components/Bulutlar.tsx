import BulutFirst from "../svgs/BulutFirst";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IBulut {
  top: string;
  right: string;
  scale: number;
}

const BulutlarComponent = styled.div<IBulut>`
position: absolute;
display: flex;
justify-content: end;
align-items: center;
top: ${(props) => (`${props.top}%`)};
  right: ${(props) => (`${props.right}%`)};
svg { 
  width: calc(100% - 8em);
  height:calc(100% - 5em);
  transform: scale(${(props) => (props.scale)});
  
  }
  z-index: 2;
`;

const BulutlarContainer: React.FC<IBulut> = (props) => {
  return (
    <BulutlarComponent top={props.top} right={props.right} scale={props.scale}>
      <motion.div
        animate={{
          scale:  [1, 1, 1, 1, 1],
          translateY: ["30px", "0px", "20px", "0px", "30px"],
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