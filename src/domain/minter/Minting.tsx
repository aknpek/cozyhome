import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import { IContent, IHeader } from "../../types";
import Header from "../../components/Header";
import Pictures from "../../components/Locals";
import BackGroundContainer from "../../components/BackgroundFirst";
import BackGroundContainerSecond from "../../components/BackgroundSecond";

const MinterContainer = styled.div`
  position: fixed;
  background-color: #121420;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: grid;
  grid-template-areas:
    "statContainer"
    "gifContainer"
    "dropDownContainer"
    "quantityContainer";

  grid-template-columns: 0.5fr 1.2fr 0.5fr;
  grid-template-rows: 0.5fr 0.2fr 0.2fr 1.2fr 0.2fr 0.2fr 0.1fr 0.2fr 0.5fr;
  .headerClass {
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .statContainer {
    grid-area: statContainer;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    .statContainerDiv {
      background-color: rgb(161, 19, 19);
      width: 20rem;
      display: flex;
      border-radius: 0.6rem;
      justify-content: center;
      align-items: center;
      width: 12rem;
      height: 3rem;
      cursor: pointer;

   

      h1 {
        letter-spacing: 0.1rem;
        font-size: 1.2rem;
        font-family: "Fredoka One", normal;
        font-weight: 200;
        color: white;
      }
    }
  }

  .gifContainer {
    grid-area: gifContainer;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
      max-width: 20rem;
      max-height: 20rem;
    }
  }

  .quantityContainer {
    grid-area: dropDownContainer;
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column-start: 2;
    grid-column-end: 3;

    display: flex;
    justify-content: center;
    align-items: start;

    .quantityDiv {
      width: 18rem;
      height: 3rem;
    }
    .myControlClassName {
      background-color: rgb(161, 19, 19);
      color: white;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-family: "Fredoka One", normal;
      font-weight: 200;
      font-size: 1.1.rem;
      border-radius: 0.9rem;
      transition: linear 0.2s;
      position: relative;
      z-index: 20;
      letter-spacing: 0.1rem;
    }
    .myControlClassName:hover {
      background-color: #ff961b;
      font-size: 1.2rem;
      font-weight: 400;
      color: white;
      transform: scale(0.9);
      position: relative;
      z-index: 20;
    }
    .myPlaceholderClassName {
    }

    .myMenuClassName {
      width: 100%;
      background-color: white;
      border-radius: 0.6rem;
      margin-top: 1rem;
      animation: fadeIn 0.2s ease-in-out;
      position: relative;
      z-index: 20;

      div {
        position: relative;
        z-index: 1;
        margin: auto;
        font-family: "Fredoka One", normal;
        font-weight: 100;
        width: 94%;
        background-color: white;
        cursor: pointer;
        height: 1.8rem;
        font-size: 0.9rem;
        display: flex;
        justify-content: start;
        align-items: center;
        transition: ease 0.1s;
      }
      div:hover {
        font-size: 1rem;
        font-weight: 400;
        color: white;
        transform: scale(0.9);
        width: 100%;
        background-color: #ff961b;
        border-radius: 0.4rem;
      }
      div.close {
        animation: fadeOut 0.2s ease-in-out;
      }
    }
  }

  .mintingContainer {
    grid-area: quantityContainer;
    grid-row-start: 8;
    grid-row-end: 9;
    grid-column-start: 2;
    grid-column-end: 3;

    display: flex;
    justify-content: center;
    align-items: center;

    .mintingButtonDiv {
      width: 20rem;
      height: 4rem;
      background-color: #ff961b;
      border-radius: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: ease 0.2s;
      cursor: pointer;
      h1 {
        color: white;
        font-family: "Fredoka One";
        font-weight: 200;
      }
    }

    .mintingButtonDiv:hover {
      background-color: rgb(161, 19, 19);
      transform: scale(0.9);
      border-radius: 1.2rem;
    }
  }

  .firstBackGround {
    position: absolute;
  }
  .secondBackGround {
    margin-top: 10%;
    position: absolute;
    z-index: -1;
  }
`;

const options = [
  "1 CozyHome",
  "2 CozyHomes",
  "3 CozyHomes",
  "4 CozyHomes",
  "5 CozyHomes",
];
const defaultOption = options[0];

export const Minting: React.FC = () => {
  const [chosenValue, setChosenValue] = useState<number>(0);
  const scrollPosition = useRef<number>(0);
  const showThirdContainer = false;

  const data: IContent = require("../../data/json/text.json");
  const header_data: IHeader = data["landing"]["header"];

  useEffect(() => {
    console.log(chosenValue);
  }, []);

  return (
    <MinterContainer>
      <div className={"headerClass"}>
        <Header
          showThirdContainer={showThirdContainer}
          scrollPosition={scrollPosition.current}
          {...header_data}
        />
      </div>

      <div className={"statContainer"}>
        <div className={"statContainerDiv"}>
          <h1>999 Left</h1>
        </div>
      </div>

      <div className={"gifContainer"}>
        <img src={Pictures["gif"].default}></img>
      </div>
      <div className={"quantityContainer"}>
        <Dropdown
          className="quantityDiv"
          controlClassName="myControlClassName"
          placeholderClassName="myPlaceholderClassName"
          menuClassName="myMenuClassName"
          arrowClassName="myArrowClassName"
          options={options}
          onChange={(value) =>
            setChosenValue(Number(value.value.substring(0, 1)))
          }
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
      <div className={"mintingContainer"}>
        <div className={"mintingButtonDiv"}>
          <h1>Mint Now</h1>
        </div>
      </div>

      <div className={"firstBackGround"}>
        <BackGroundContainer />
      </div>

      <div className={"secondBackGround"}>
        <BackGroundContainerSecond />
      </div>
    </MinterContainer>
  );
};
