import {
  IFifthContainer,
  IFirstContainer,
  IFirstWrapper,
  IGeneralWrapper,
  ISecondContainer,
  ISixthContainer,
  IThirdContainer,
} from "../../types";

import BulutFirst from "../../svgs/BulutFirst";
import BulutSecond from "../../svgs/BulutSecond";
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
  /* margin-left: 5%; */
  /* margin-right: 5%; */
  height: 100%;
  width: 100%;
`;

/* ---------------------------------------------------------------------------- */

export const SecondContainer = styled.div<ISecondContainer>`
  @media screen and (max-width: 2000px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.2fr 1.2fr 0.4fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
  @media screen and (max-width: 1700px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.2fr 1.2fr 0.4fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
  @media screen and (max-width: 1500px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.3fr 1.2fr 0.4fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
  @media screen and (max-width: 1200px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.5fr 1.2fr 0.4fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
  @media screen and (max-width: 1000px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.5fr 1.2fr 0.4fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
  @media screen and (max-width: 500px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.4fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
`;

/* ---------------------------------------------------------------------------- */

const ThirdComponent = styled.div<IThirdContainer>`
  display: grid;
  /* background-color: #fad961; */
  background-color: #121420;
  /* background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%); */
  animation: 1s ease-out 0s 1 slideInFromLeft;

  .header {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;

    h1 {
      position: absolute;
      margin-top: 8%;
      font-size: 10rem;
      color: white;
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
    background-color: white;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    will-change: transform;
    transition: transform 450ms;
    z-index: 2;
  }
  div:hover {
    transition: transform linear 250ms;
    box-shadow: rgba(163, 162, 162, 0.25) 0px 54px 55px,
      rgba(26, 82, 119, 0.12) 0px -12px 30px,
      rgba(155, 27, 123, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.8fr 1fr 1fr;
    grid-template-areas:
      "header"
      "cell-2 cell-3"
      "cell-4";

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/3;
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
      grid-column-end: 1;
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
      "cell-2"
      "cell-3"
      "cell-4";

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/1;
      h1 {
        position: absolute;
        margin-top: 20%;
        font-size: 6rem;
        color: white;
        font-family: "Josefin Sans", cursive;
      }
    }
    .cell-2 {
      grid-area: cell-2;
      grid-column-start: 1;
      grid-row-start: 2;
    }
    .cell-3 {
      grid-area: cell-3;
      grid-column-start: 1;
      grid-row-start: 3;
    }
    .cell-4 {
      grid-area: cell-4;
      grid-column-start: 1;
      grid-row-start: 4;
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
        <div className={"cell cell-2 cells"}>{/* <div></div> */}</div>
        <div className={"cell cell-3 cells"}>{/* <div></div> */}</div>
        <div className={"cell cell-4 cells"}>{/* <div></div> */}</div>
        <div className={"cell cell-5 cells"}>{/* <div></div> */}</div>
        <div className={"cell cell-6 cells"}>{/* <div></div> */}</div>
        <div className={"cell cell-7 cells"}>{/* <div></div> */}</div>
        <motion.div
          className={"BulutFirst"}
          initial={{ scale: 0.3, opacity: 0.6 }}
          animate={{ scale: 0.4, opacity: 1.0 , translateX: "20px" }}
          transition={{ yoyo: Infinity, duration: 7.5 }}
        >
          <BulutFirst />
        </motion.div>
       
        <motion.div
          className={"BulutSecond"}
          initial={{ scale: 0.8, opacity: 0.8}}
          animate={{ scale: 0.9, opacity: 1, translateX: "-50px" }}
          transition={{ yoyo: Infinity, duration: 6.5 }}
        >
          <BulutSecond />
        </motion.div>
        
        <motion.div
          className={"BulutThird"}
          initial={{ scale: 0.2, opacity: 0.5 }}
          animate={{ scale: 0.4, opacity: 1, translateX: "100px" }}
          transition={{ yoyo: Infinity, duration: 5.5 }}
        >
          <BulutFirst />
        </motion.div>
      

        <motion.div
          className={"BulutFourth"}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 0.6, opacity: 1, translateX: "60px" }}
          transition={{ yoyo: Infinity, duration: 5.5 }}
        >
          <BulutFirst />
        </motion.div>
      </ThirdComponent>
  );
};

/* ---------------------------------------------------------------------------- */

const FourthComponent = styled.div<IThirdContainer>`
  margin-top: 0%;
  height: calc(67rem + 20px);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  div:hover {
    display: none;
  }
`;
interface PropsFourth {
  showFourthContainer: Boolean;
}

export const FourthContainer: React.FC<PropsFourth> = ({
  showFourthContainer,
}) => {
  return <FourthComponent className="Fourth-Component"></FourthComponent>;
};


/* ---------------------------------------------------------------------------- */


const FifthComponent = styled.div<IFifthContainer>`
  display: grid;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  .header {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;

    h1 {
      position: absolute;
      margin-top: 2%;
      font-size: 10rem;
      color: white;
      font-family: "Josefin Sans", cursive;
    }
    h2 {
      position: absolute;
      margin-top: 15%;
      font-size: 6rem;
      color: white;
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
    background-color: white;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    will-change: transform;
    transition: transform 450ms;
  }
  div:hover {
    transition: transform linear 250ms;
    box-shadow: rgba(163, 162, 162, 0.25) 0px 54px 55px,
      rgba(26, 82, 119, 0.12) 0px -12px 30px,
      rgba(155, 27, 123, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: translateY(-20px);
  }

  @media screen and (max-width: 2000px) {
    height: calc(65.5rem + 20px);
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
    grid-template-rows: 1fr 1.7fr 1fr;
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
  }

  background-color: #292929;
  margin-top: 0%;
  height: calc(67rem + 20px);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  div:hover {
    display: none;
  }
`;
interface PropsFifth {
  showFifthContainer: Boolean;
}
export const FifthContainer: React.FC<PropsFifth> = ({
  showFifthContainer,
}) => {
  return (
    <FifthComponent className="Fifth-Component">
      <header className={"cell cell-1 header"}>
        <h1>Your Collection</h1>
        <h2>Your Message here</h2>
      </header>
      <div className={"cell cell-2 cells"}>{/* <div></div> */}</div>
      <div className={"cell cell-3 cells"}>{/* <div></div> */}</div>
      <div className={"cell cell-4 cells"}>{/* <div></div> */}</div>
    </FifthComponent>
  );
};

/* ---------------------------------------------------------------------------- */


const SixthComponent = styled.div<ISixthContainer>`
  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);
  margin-top: 0%;
  height: calc(67rem + 20px);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  div:hover {
    display: none;
  }
`;
interface PropsSixty {
  showSixthContainer: Boolean;
}
export const SixthContainer: React.FC<PropsSixty> = ({
  showSixthContainer,
}) => {
  return <SixthComponent className="Sixth-Component"></SixthComponent>;
};

/* ---------------------------------------------------------------------------- */


export default GeneralWrapper;
