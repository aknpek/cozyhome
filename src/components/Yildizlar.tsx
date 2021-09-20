import { IYildiz } from "../types";
import TekYildiz from "../svgs/TekYildiz";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IYildizContainer {
  yildizlar: IYildiz[];
}

const YildizComponent = styled.div<IYildiz>`
  .eachYildizDiv {
    position: absolute;
    margin-top: ${(props) => `${props.margintop * 0.7}%`};
    margin-left: ${(props) => `${props.marginright * 0.7}%`};
    z-index: 0;
  }
`;

const YildizContainer: React.FC<IYildizContainer> = (props) => {
  return (
    <div>
      {props.yildizlar.map((value: IYildiz) => {

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
                className={"yildizDiv"}
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
