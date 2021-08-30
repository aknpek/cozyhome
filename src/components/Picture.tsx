import React from "react";
import styled from "styled-components";
import homes from "../data/Home.gif";
import cerce from "../data/Border.svg";

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
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin: auto;
    max-height: 450px;
    max-width: 450px;
    min-width: 400px;
    min-height: 400px;

    .cerceve {
      width: 100%;
      height: 100%;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
      z-index: 2;
      object-fit: contain;

    }
    .gif {
      width: 100%;
      height: 100%;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
      z-index: 1;
      object-fit: contain;
    }
  }
`;

const Picture: React.FC = () => {
  return (
    <PicStyled className={"picture"}>
      <div>
        <img src={cerce} className={"cerceve"} alt={"cerceve"} />
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
