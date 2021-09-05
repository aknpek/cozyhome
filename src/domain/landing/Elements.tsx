import {
  IFifthContainer,
  IFirstContainer,
  IFirstWrapper,
  IGeneralWrapper,
  ISixthContainer,
  IThirdContainer,
} from "../../types";

import BulutFirst from "../../svgs/BulutFirst";
import BulutSecond from "../../svgs/BulutSecond";
import { IContainer } from "../../types";
import Picture from "../../components/Picture";
import TextDisplay from "../../components/TextDisplay";
import Yildiz from "../../svgs/Yildiz";
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
interface ISecondComponent {
  textDireciton: Boolean;
}

export const SecondComponent = styled.div<ISecondComponent>`
  background-color: #121420;
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

  @media screen and (max-width: 2000px) {
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

interface PropsSecond {
  data: IContainer;
  textDirection: Boolean;
}

export const SecondContainer: React.FC<PropsSecond> = (props) => {
  return (
    <SecondComponent textDireciton={props.textDirection}>
      <Picture />
      <TextDisplay {...props.data} />
      <motion.div
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
      </motion.div>
    </SecondComponent>
  );
};
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
    background-color: #ffffffbe;
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
        color: #ffffffbe;
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

/* ---------------------------------------------------------------------------- */

const FourthComponent = styled.div<IThirdContainer>`
  height: 1080px;
  background-color: #121420;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr 2fr 0.5fr 0.5fr;
  grid-template-areas:
    "titleDiv"
    "blockFirst blockSecond";

  .titleDiv {
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;

    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
    -ms-transition: 0.1s;
    -o-transition: 0.1s;
    transition: 0.1s;

    h1 {
      font-size: 10rem;
      color: #ffffffbe;
      text-align: center;
      font-family: "Josefin Sans", cursive;
    }
  }
  .titleDiv:hover {
    transition: transform 150ms background-color 0.5s ease color 0.5s ease;
    transform: scale(1.05);
    text-decoration: underline;
  }

  .blockFirst {
    grid-area: blockFirst;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;

    h3 {
      width: 80%;
      margin: auto;
      line-height: 3;
      font-size: 2rem;
      font-weight: 400;
      color: #ffffffbe;
      text-align: left;
      font-family: "Josefin Sans", cursive;
    }
    h4 {
      width: 80%;
      margin: auto;
      line-height: 2;
      font-size: 1.2rem;
      font-weight: 100;
      color: #ffffffbe;
      text-align: left;
      font-family: "Josefin Sans", cursive;
    }
  }
  .blockSecond {
    grid-area: blockSecond;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 4;

    .roadBlock {
      display: flex;
      flex-direction: row;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      -ms-transition: 0.1s;
      -o-transition: 0.1s;
      transition: 0.1s;

      .roadPercent {
        height: 8rem;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .roadPercentBlock {
          height: 4rem;
          width: 4rem;
          background-color: #ffffffbe;
          border-radius: 1.2rem;
          font-family: "Josefin Sans", cursive;

          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          h1 {
            font-size: 1.2rem;
            font-weight: 400;
          }
        }
      }
      .roadText {
        height: 8rem;
        font-family: "Josefin Sans", cursive;
        color: #ffffffbe;
        display: flex;
        align-items: center;
        width: 80%;

        h1 {
          font-size: 1rem;
          font-weight: 200;
          line-height: 1.5;
          text-decoration: underline;
        }

        h2 {
          font-size: 0.8rem;
          font-weight: 100;
          line-height: 1.5;
        }
      }
    }

    .roadBlock:hover {
      transition: transform 150ms background-color 0.5s ease color 0.5s ease;
      transform: scale(1.05);
      background-color: #ff961b;
      border-radius: 1.5rem;
      .roadPercentBlock {
        h1 {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      .roadText {
        h1 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #121420;
          text-decoration: underline;
          width: 95%;
        }

        h2 {
          font-size: 1rem;
          font-weight: 400;
          color: #121420;
          width: 95%;
        }
      }
    }
  }
`;
interface PropsFourth {
  data: IContainer;
}

export const FourthContainer: React.FC<PropsFourth> = (props) => {
  return (
    <FourthComponent className="Fourth-Component">
      <div className={"titleDiv"}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={"blockFirst"}>
        <h3>{props.data.subtitle}</h3>
        <h4>{props.data.slogan}</h4>
      </div>
      <div className={"blockSecond"}>
        {props.data["pictures"].map((value: any) => (
          <div className={"roadBlock"} key={value.id + "block"}>
            <div className={`roadPercent ${value.id}`} key={value.id + "percent"}>
              <div className={`roadPercentBlock ${value.id}`} key={value.id + "percentblock"}>
                <h1>{value.title}</h1>
              </div>
            </div>
            <div className={`roadText ${value.id}`} key={value.id + "road"}>
              <div className={`roadTextBlock ${value.id}`} key={value.id + "roadblock"}>
                <h1>{value.subtitle}</h1>
                <h2>{value.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FourthComponent>
  );
};

/* ---------------------------------------------------------------------------- */

const FifthComponent = styled.div<IFifthContainer>`
  display: grid;
  background-color: #121420;
  height: 1080px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 0.2fr 0.5fr 0.5fr 2fr 0.2fr;
  grid-template-areas:
    "titleDiv"
    "sloganDiv"
    "picturesDiv";

  .titleDiv {
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: 0.15s;
    -moz-transition: 0.15s;
    -ms-transition: 0.15s;
    -o-transition: 0.15s;
    transition: 0.15s;

    h1 {
      font-size: 10rem;
      font-family: "Josefin Sans", cursive;
      color: #ffffffbe;
    }
  }
  .titleDiv:hover { 
    transition: transform 150ms background-color 0.5s ease color 0.5s ease;
    transform: scale(1.05);
    text-decoration: underline;
  }

  .sloganDiv {
    grid-area: sloganDiv;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    h2 {
      text-align: center;
      font-size: 1.2rem;
      line-height: 2.5;
      font-weight: 100;
      font-family: "Josefin Sans", cursive;
      color: #ffffffbe;
    }
  }
  .pictureDiv {
    grid-area: pictureDiv;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img {
      height: 300px;
      width: 300px;
      border-radius: 300px;
      background-color: red;
    }
  }
`;
interface PropsFifth {
  showFifthContainer: Boolean;
  data: IContainer;
}
export const FifthContainer: React.FC<PropsFifth> = (props) => {
  return (
    <FifthComponent className="Fifth-Component">
      <div className={"titleDiv"}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={"sloganDiv"}>
        <h2>{props.data.slogan}</h2>
      </div>
      <div className={"pictureDiv"}>
        <img></img>
        <img></img>
        <img></img>
      </div>
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

const SeventhComponent = styled.div<ISixthContainer>`
  background-color: #121420;
  margin-top: 0%;
  height: calc(67rem + 20px);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.2fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-areas:
    "titleDiv"
    "photosTeam"
    "smartContract";

  .titleTeam {
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 6;

    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 10rem;
      color: #ffffffbe;
      text-align: center;
      font-family: "Josefin Sans", cursive;
    }
  }

  .photosTeam {
    grid-area: blockFirst;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 6;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      width: 20rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        height: 15rem;
        width: 15rem;
        background-color: #ffffffbe;
        border-radius: 15rem;

        a {
          img {
          }
        }
      }

      h3 {
        color: #ffffffbe;
        font-size: 2rem;
        font-family: "Josefin Sans", cursive;
      }
      h4 {
        color: #ffffffbe;
        font-size: 0.9rem;
        font-family: "Josefin Sans", cursive;
      }
    }
  }
  .smartContract {
    grid-area: blockSecond;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      h1 {
        color: #ffffffbe;
        font-family: "Josefin Sans", cursive;
        text-decoration: underline;
      }
      h1:hover {
      }
    }
  }
`;
interface PropsSeven {
  data: IContainer;
}
export const SeventhContainer: React.FC<PropsSeven> = (props) => {
  return (
    <SeventhComponent className="Seven-Component">
      <div className={"titleTeam"}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={"photosTeam"}>
        {props.data["pictures"].map((value: any) => (
          <div key={value.id + "photos"}>
            <div key={value.id + "photosinner"}>
              <a href={value.hyperlink} key={value.id + "a"}>
                <img src={value.picture_url} alt={value.title} key={value.id + "image"}/>
              </a>
            </div>

            <h3 key={value.id + "h3"}>{value.title}</h3>
            <h4 key={value.id + "h4"}>{value.subtitle}</h4>
          </div>
        ))}
      </div>
      <div className={"smartContract"}>
        <a>
          <h1>Smart Contract</h1>
        </a>
      </div>
    </SeventhComponent>
  );
};

/* ---------------------------------------------------------------------------- */

export default GeneralWrapper;
