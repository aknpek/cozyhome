import BackGroundFirst from "../../svgs/BackGroundFirst";
import BackGroundSecond from "../../svgs/BackGroundSecond";
import { IContainer } from "../../types";
import Picture from "../../components/Picture";
import TextDisplay from "../../components/TextDisplay";
import Yildiz from "../../svgs/Yildiz";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ISecondComponent {
  textDireciton: Boolean;
}

export const SecondComponent = styled.div<ISecondComponent>`
  background-color: #121420;
  position: relative;
  display: grid;
  width: 100%;
  height: 600px;
  grid-template-columns: 0.4fr 1.2fr 0.2fr 1.2fr 0.4fr;
  grid-template-rows: 1fr 2fr 0.5fr;
  grid-template-areas: "picture text-display";
  .picture {
    grid-area: picture;
    grid-row-start: 1;
    grid-row-start: 2;
    grid-column-start: ${(props) => (props.textDireciton ? 2 : 4)};
    grid-column-end: ${(props) => (props.textDireciton ? 3 : 5)};
    z-index: 1;
  }

  .textdisplay {
    grid-area: text-display;
    grid-row-start: 1;
    grid-row-start: 2;
    grid-column-start: ${(props) => (props.textDireciton ? 4 : 2)};
    grid-column-end: ${(props) => (props.textDireciton ? 5 : 3)};
    z-index: 1;
  }
  .yildizDiv {
    position: absolute;
    z-index: 0;
  }
  @media screen and (max-width: 1700px) {
    height: 600px;
    .yildizDiv {
      width: 1700px;
    }
  }
  @media screen and (max-width: 1500px) {
    height: 550px;
    .yildizDiv {
      width: 1500px;
    }
  }
  @media screen and (max-width: 1300px) {
    height: 550px;
    .yildizDiv {
      width: 1300px;
    }
  }

  @media screen and (max-width: 800px) {
    height: 750px;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.1fr 1fr 1fr 1fr;
    .picture {
      margin: auto;
      grid-row-start: 2;
      grid-row-start: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }

    .textdisplay {
      margin: auto;
      grid-row-start: 4;
      grid-row-start: 5;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;

      .yildizDiv {
        width: 800px;
      }
    }
  }
`;

interface PropsSecond {
  data: IContainer;
  textDirection: Boolean;
}

const SecondContainer: React.FC<PropsSecond> = (props) => {
  return (
    <SecondComponent textDireciton={props.textDirection}>
      <Picture picture={props.data["pictures"]} />
      <TextDisplay {...props.data} />
      {/* <motion.div
          animate={{
            scale: [0.9, 0.8, 0.9, 0.8, 0.6],
            rotate: [0, 10, 0, -10, 0],
            opacity: [0.9, 0.2, 0.9, 0.2, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
          }}
          className={"yildizDiv"}
        >
          <Yildiz props={{}} />
        </motion.div> */}
    </SecondComponent>
  );
};

export default SecondContainer;
