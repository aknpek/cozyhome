import styled, { css } from "styled-components";

import BackGroundFirst from "../../svgs/BackGroundFirst";
import BackGroundSecond from "../../svgs/BackGroundSecond";
import { IContainer } from "../../types";
import Picture from "../../components/Picture";
import TextDisplay from "../../components/TextDisplay";
import Yildiz from "../../svgs/Yildiz";
import { motion } from "framer-motion";

interface ISecondComponent {
  textDireciton: Boolean;
  preSale: Boolean;
  metaHomes: Boolean;
}

export const SecondComponent = styled.div<ISecondComponent>`
  margin-top: 100px;
  position: relative;
  display: grid;
  width: 100%;
  height: 600px;

  ${({ textDireciton }) =>
    textDireciton &&
    css`
      grid-template-columns: 1.2fr 1.2fr 0.2fr 2.2fr 1.2fr;
    `}
  ${({ textDireciton }) =>
    !textDireciton &&
    css`
      grid-template-columns: 1.2fr 2.2fr 0.2fr 1.2fr 1.2fr;
      .messageDiv {
        justify-content: left;
      }
    `}
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
    max-width: 1700px;
    height: 600px;
    .yildizDiv {
      width: 1700px;
    }
  }
  @media screen and (max-width: 1500px) {
    max-width: 1500px;
    height: 550px;
    .yildizDiv {
      width: 1500px;
    }
  }
  @media screen and (max-width: 1300px) {
    max-width: 1300px;
    height: 550px;
    .yildizDiv {
      width: 1300px;
    }
  }
  @media screen and (max-width: 1000px) {
    height: 950px;
    max-width: 1000px;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.1fr 0.5fr 1fr 1fr;
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
      grid-row-start: 3;
      grid-row-start: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;

      .yildizDiv {
        width: 800px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    max-width: 750px;
    max-height: 850px;
    grid-template-columns: 0.2fr 7fr 0.2fr;
    grid-template-rows: 0.1fr 1fr 1fr 2fr;
    .picture {
      margin: auto;
      grid-row-start: 1;
      grid-row-start: 2;
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
  @media screen and (max-width: 500px) {
    grid-template-columns: 0.2fr 5fr 0.2fr;
    grid-template-rows: 0.1fr 1fr 1fr 1fr;

    ${({ metaHomes }) =>
      !metaHomes &&
      css`
        margin-top: 50px;
        max-height: 1550px;
      `}

    ${({ metaHomes }) =>
      metaHomes &&
      css`
        margin-top: 150px;
        max-height: 1050px;
        min-height: 1050px;
      `}

    ${({ preSale }) =>
      preSale &&
      css`
        margin-top: 200px;
        grid-template-rows: 0.1fr 1fr 1fr 0.1fr;
        max-height: 700px;
        min-height: 700px;
      `}


      .picture {
      margin: auto;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }

    .textdisplay {
      margin: auto;
      grid-row-start: 3;
      grid-row-start: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;

      .yildizDiv {
        width: 650px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 0.2fr 5fr 0.2fr;
    grid-template-rows: 0.1fr 1fr 1fr 1fr;

    ${({ metaHomes }) =>
      !metaHomes &&
      css`
        margin-top: 50px;
        max-height: 1550px;
      `}

    ${({ metaHomes }) =>
      metaHomes &&
      css`
        margin-top: 200px;
        max-height: 1050px;
        min-height: 1050px;
      `}

    ${({ preSale }) =>
      preSale &&
      css`
        margin-top: 250px;
        grid-template-rows: 0.1fr 1fr 1fr 0.1fr;
        max-height: 750px;
        min-height: 750px;
      `}


      .picture {
      margin: auto;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }

    .textdisplay {
      margin: auto;
      grid-row-start: 3;
      grid-row-start: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;

      .yildizDiv {
        width: 650px;
      }
    }
  }
`;

interface PropsSecond {
  data: IContainer;
  textDirection: Boolean;
  preSale: Boolean;
  metaHomes: Boolean;
}

const SecondContainer: React.FC<PropsSecond> = (props) => {
  return (
    <SecondComponent
      textDireciton={props.textDirection}
      preSale={props.preSale}
      metaHomes={props.metaHomes}
    >
      <Picture picture={props.data["pictures"]} />
      <TextDisplay textDirection={props.textDirection} {...props.data} />

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
