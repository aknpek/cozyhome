import React from "react";
import SvgComponent from "./Cerce";
import cerce from "../data/Border.svg";
import homes from "../data/Home.gif";
import styled from "styled-components";

interface IPictureJson {
  id: number;
  url: string;
  description: string;
}

interface PictureData {
  pictures: IPictureJson[];
}

interface IPicture {}

const data: PictureData = require("../global/statics.json");

const PicStyled = styled.div<IPicture>`
  margin: auto;

  div {
    will-change: transform;
    transition: transform 450ms;
  }

  @media screen and (max-width: 2000px) {
    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      max-height: 35rem;
      max-width: 35rem;
      min-width: 35rem;
      min-height: 35rem;
    }
  }

  @media screen and (max-width: 1700px) {
    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      max-height: 30rem;
      max-width: 30rem;
      min-width: 30rem;
      min-height: 30rem;
    }
  }
  @media screen and (max-width: 1500px) {
    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      max-height: 27rem;
      max-width: 27rem;
      min-width: 27rem;
      min-height: 27rem;
    }
  }
  @media screen and (max-width: 1200px) {
    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      max-height: 25rem;
      max-width: 25rem;
      min-width: 25rem;
      min-height: 25rem;
    }
  }
  @media screen and (max-width: 1200px) {
    div {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      max-height: 22rem;
      max-width: 22rem;
      min-width: 22rem;
      min-height: 22rem;
    }
  }

  div:hover {
    transition: transform 250ms;
    box-shadow: rgba(163, 162, 162, 0.25) 0px 54px 55px,
      rgba(26, 82, 119, 0.12) 0px -12px 30px,
      rgba(155, 27, 123, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 0.4rem;
    transform: translateY(-20px);
    transform: rotate(-10deg);
  }

  .cerceve {
    width: 100%;
    height: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    z-index: 2;
    object-fit: contain;
    border-radius: 0.4rem;
  }
  .gif {
    width: 98%;
    height: 98%;
    margin: 1%auto;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    z-index: 1;
    object-fit: contain;
  }
`;

const Picture: React.FC = () => {
  return (
    <PicStyled className={"picture"}>
      <div>
        <div className={"cerceve"}>
          <SvgComponent />
        </div>
        <img
          src={homes}
          className={"gif"}
          alt={data["pictures"][0].description}
        ></img>
      </div>
    </PicStyled>
  );
};

export default Picture;
