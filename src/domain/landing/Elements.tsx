import {
  IFirstContainer,
  IFirstWrapper,
  IGeneralWrapper,
  ISixthContainer,
  IThirdContainer,
} from "../../types";

import BulutFirst from "../../svgs/BulutFirst";
import BulutSecond from "../../svgs/BulutSecond";
import { IContainer } from "../../types";
import Pictures from "../../components/Locals";
import TextDisplay from "../../components/TextDisplay";
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
    background-color: transparent;
    margin: auto;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
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
      width: 22rem;
      height: 22rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        height: 16rem;
        width: 16rem;
        background-color: #ffffffbe;
        border-radius: 16rem;

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
                <img
                  src={Pictures[value.picture_url].default}
                  alt={value.title}
                  key={value.id + "image"}
                />
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
