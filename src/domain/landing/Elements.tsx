import {
  IFirstContainer,
  IFirstWrapper,
  IGeneralWrapper,
  IThirdContainer,
} from "../../types";

import BulutFirst from "../../svgs/BulutFirst";
import BulutSecond from "../../svgs/BulutSecond";
import Pictures from "../../components/Locals";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";

const GeneralWrapper = styled.div<IGeneralWrapper>`
  width: 100%;
  height: 100%;
`;

/* ---------------------------------------------------------------------------- */

export const FirstWrapper = styled.div<IFirstWrapper>`
  flex-direction: row;
`;
export const FirstContainer = styled.div<IFirstContainer>`
  height: 100%;
  width: 100%;
`;

/* ---------------------------------------------------------------------------- */
const ThirdComponent = styled.div<IThirdContainer>`
  display: grid;
  background-color: #121420;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  height: 600px;


  .header {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;

    h1 {
      position: absolute;
      margin-top: 8%;
      font-size: 4.5rem;
      color: #ffffffbe;
      font-family: "Josefin Sans", cursive;
    }
  }
  .cells {
    border-radius: 200rem;
  }
  div {
    max-width: 35rem;
    max-height: 28rem;
    min-width: 325px;
    min-height: 325px;
    background-color: transparent;
    margin: auto;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    will-change: transform;
    transition: transform 450ms;
    z-index: 2;
  }
  div:hover {
    transition: transform linear 250ms;
    transform: translateY(-20px);
  }

  @media screen and (max-width: 2000px) {
    height: calc(80.5rem + 20px);
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: 1fr 1.7fr 1.7fr;
    grid-template-areas:
      "header"
      "cell-2 cell-3 cell-4"
      "cell-5 cell-6 cell-7";

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/6;
    }
    .cell-2 {
      grid-area: cell-2;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-3 {
      grid-area: cell-3;
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-4 {
      grid-area: cell-4;
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-5 {
      grid-area: cell-5;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .cell-6 {
      grid-area: cell-6;
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 3;
    }
    .cell-7 {
      grid-area: cell-7;
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
  @media screen and (max-width: 1400px) {
    height: calc(88.5rem + 20px);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.8fr 1fr 1fr;
    grid-template-areas:
      "header"
      "cell-2 cell-3 cell-4"
      "cell-5 cell-6 cell-7";

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/4;
    }
    .cell-2 {
      grid-area: cell-2;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-3 {
      grid-area: cell-3;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-4 {
      grid-area: cell-4;
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    .cell-5 {
      grid-area: cell-5;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .cell-6 {
      grid-area: cell-6;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .cell-7 {
      grid-area: cell-6;
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
  @media screen and (max-width: 900px) {
    height: calc(105.5rem + 20px);
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr;
    grid-template-areas:
      "header"
      "cell-2 cell-3"
      "cell-4 cell-5"
      "cell-6 cell-7";

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/3;
      h1 {
        position: absolute;
        margin-top: 20%;
        font-size: 6rem;
        color: #ffffffbe;
        font-family: "Josefin Sans", cursive;
      }
    }

    .cell-2 {
      grid-area: cell-2;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-3 {
      grid-area: cell-3;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-4 {
      grid-area: cell-4;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }

    .cell-5 {
      grid-area: cell-5;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .cell-6 {
      grid-area: cell-6;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    .cell-7 {
      grid-area: cell-6;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }
  }

  .BulutFirst {
    background-color: transparent;
    display: flex;
    position: absolute;
    z-index: 1;
    height: 0px;
    width: 0px;
    pointer-events: none;
    box-shadow: none;
  }

  .BulutSecond {
    background-color: transparent;
    display: flex;
    position: absolute;
    z-index: 1;
    margin-top: 20%;
    margin-right: 30%;
    height: 0px;
    width: 0px;
    pointer-events: none;
    box-shadow: none;
  }

  .BulutThird {
    background-color: transparent;
    display: flex;
    position: absolute;
    z-index: 1;
    margin-top: 15%;
    margin-left: 80%;
    height: 0px;
    width: 0px;
    pointer-events: none;
    box-shadow: none;
  }

  .BulutFourth {
    background-color: transparent;
    display: flex;
    position: absolute;
    z-index: 1;
    margin-top: 35%;
    margin-left: 50%;
    height: 0px;
    width: 0px;
    pointer-events: none;
    box-shadow: none;
  }
`;
interface PropsThird {
  showThirdContainer: Boolean;
}

export const ThirdContainer: React.FC<PropsThird> = ({
  showThirdContainer,
}) => {
  useEffect(() => {}, [showThirdContainer]);

  return (
    <ThirdComponent className="Landing-Home">
      <header className={"cell cell-1 header"}>
        <h1>Your Collection</h1>
      </header>
      <div className={"cell cell-2 cells"}>
        <img src={Pictures["ufo"].default} />
      </div>
      <div className={"cell cell-3 cells"}>
        <img src={Pictures["ktp"].default} />
      </div>
      <div className={"cell cell-4 cells"}>
        <img src={Pictures["sade"].default} />
      </div>
      <div className={"cell cell-5 cells"}>
        <img src={Pictures["ejderha"].default} />
      </div>
      <div className={"cell cell-6 cells"}>
        <img src={Pictures["dondurma"].default} />
      </div>
      <div className={"cell cell-7 cells"}>
        <img src={Pictures["sade2"].default} />
      </div>
      <motion.div
        className={"BulutFirst"}
        initial={{ scale: 0.3, opacity: 0.6 }}
        animate={{ scale: 0.4, opacity: 1.0, translateX: "20px" }}
        transition={{ repeat: Infinity, duration: 7.5 }}
      >
        <BulutFirst />
      </motion.div>

      <motion.div
        className={"BulutSecond"}
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{ scale: 0.9, opacity: 1, translateX: "-50px" }}
        transition={{ repeat: Infinity, duration: 6.5 }}
      >
        <BulutSecond />
      </motion.div>

      <motion.div
        className={"BulutThird"}
        initial={{ scale: 0.2, opacity: 0.5 }}
        animate={{ scale: 0.4, opacity: 1, translateX: "100px" }}
        transition={{ repeat: Infinity, duration: 5.5 }}
      >
        <BulutFirst />
      </motion.div>

      <motion.div
        className={"BulutFourth"}
        initial={{ scale: 0.5, opacity: 0.6 }}
        animate={{ scale: 0.6, opacity: 1, translateX: "60px" }}
        transition={{ repeat: Infinity, duration: 5.5 }}
      >
        <BulutFirst />
      </motion.div>
    </ThirdComponent>
  );
};

export default GeneralWrapper;
