import react, { useEffect, useRef, useState } from "react";

import { IYildiz } from "../types";
import TekYildiz from "../svgs/TekYildiz";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IYildizContainer {
}

const YildizComponent = styled.div<IYildiz>`
  .eachYildizDiv {
    position: absolute;
    top: ${(props) => `${props.margintop * 0.7}%`};
    right: ${(props) => `${props.marginright * 0.7}%`};
    z-index: 0;
  }
`;

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const YildizContainer: React.FC<IYildizContainer> = () => {
  const render = useRef<Number>(0);
  const [yildizlar, setYildizlar] = useState<IYildiz[]>([]);

  const yildizMaker = (
    yildizlar: IYildiz[],
    setYildizlar: react.Dispatch<react.SetStateAction<IYildiz[]>>
  ) => {
    for (let i = 0; i < getRandomArbitrary(0, 50); i++) {
      yildizlar.push({
        margintop: Math.round(Math.random() * 95),
        marginright: Math.round(Math.random() * 95),
        size: Math.round(Math.random() * 50),
      });
    }
    setYildizlar(yildizlar);
  };

  

  useEffect(() => {
    if (render.current === 0) {
      yildizMaker(yildizlar, setYildizlar);
      render.current = 1;
    }
  });

  return (
    <div>
      {yildizlar.map((value: IYildiz) => {

        return (
          <YildizComponent
          margintop={value.margintop}
            marginright={value.marginright}
            size={value.size}
          >
            <div className={"eachYildizDiv"}>
              <motion.div
                animate={{
                  scale:  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                  rotate: [Math.random() * 100, -Math.random() * 100, Math.random() * 100, -Math.random() * 100, Math.random() * 100],
                  opacity: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 60,
                }}
                // className={"yildizDiv"}
              >
                <TekYildiz props={{}} />
              </motion.div>
            </div>
          </YildizComponent>
        );
      })}
    </div>
  );
};

export default YildizContainer;
