import { IContainer, IPictures, IThirdContainer } from "../../types";

import BulutlarContainer from "../../components/Bulutlar";
import OpenSeaLogo from "../../svgs/OpenSeaLogo";
import Pictures from "../../components/Locals";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect } from "react";

const ThirdComponent = styled.div<IThirdContainer>`
  display: grid;
  background-color: #121420;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  height: 1100px;

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
      background-color: transparent;
      font-weight: 200;
      color: white;
      font-family: "Fredoka One", normal;
      -webkit-transition: 0.15s;
      -moz-transition: 0.15s;
      -ms-transition: 0.15s;
      -o-transition: 0.15s;
      transition: 0.15s;
    }
    h1:hover {
      transition: transform 150ms background-color 0.5s ease color 0.5s ease;
      transform: scale(1.05);
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
    will-change: transform;
    transition: transform 450ms;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
      height: 90%;
    }
  }
  div:hover {
    transition: transform linear 250ms;
    transform: translateY(-20px);
  }

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 2fr 0.5fr;
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

  @media screen and (max-width: 1000px) {
    height: 1200px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.5fr 1.5fr 1.5fr 1.5fr;
    .cell-1 {
      grid-row: 1/1;
      grid-column: 1/4;
    }
    .cell-2 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-3 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-4 {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .cell-5 {
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
      grid-area: cell-7;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }
  }

  @media screen and (max-width: 700px) {
    height: 2200px;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr;

    .cell-1 {
      grid-row: 1/1;
      grid-column: 1/4;
    }
    .cell-2 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-3 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    .cell-4 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
    }
    .cell-5 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 5;
      grid-row-end: 6;
    }
    .cell-6 {
      grid-area: cell-6;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 6;
      grid-row-end: 7;
    }
    .cell-7 {
      grid-area: cell-7;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 7;
      grid-row-end: 8;
    }
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: 1200px;
    font-size: 1.2rem;

    .header {
      margin: auto;
      h1 {
        height: 5rem;
        font-size: 3rem;
      }
    }

    .cells {
      margin-top: 5rem;
      display: flex;
      justify-content: center;
      justify-items: center;
      min-width: 50px;
      min-height: 100px;
      img {
        height: 17rem;
        width: 17rem;
      }
    }

    .cell-5 {
      display: none;
    }
    .cell-6 {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    height: 1100px;
  }
  .BulutFirst {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    margin-top: 0%;
    margin-left: 0%;
  }
`;
interface PropsThird {
  showThirdContainer: Boolean;
  data: IContainer;
}

const ThirdContainer: React.FC<PropsThird> = (props) => {
  useEffect(() => {}, [props.showThirdContainer]);
  return (
    <ThirdComponent className="Landing-Home">
      <header className={"cell cell-1 header"}>
        <h1>Collection</h1>
      </header>

      {props.data.pictures.map((value: IPictures) => (
        <div
          className={`cell cell-${value.id + 2} cells`}
          key={value.id + "cell"}
        >
          <img
            src={Pictures[value.picture_url].default}
            key={value.id + "picture"}
            alt={value.description}
          />
        </div>
      ))}
    </ThirdComponent>
  );
};

export default ThirdContainer;
