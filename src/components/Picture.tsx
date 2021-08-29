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
  background-color: transparent;

  .cerceve {
    position: absolute;
    height: 35rem;
    width: 35rem;
    z-index: 2;

  }
  .gif {
    position: absolute;
    z-index: 1;
    height: 34rem;
    width: 34rem;
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
