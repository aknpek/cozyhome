import React from "react";
import styled from "styled-components";

// import mainLogo from "../../public/yarasa 1.png";


// interface IPictureJson {
//   id: number;
//   url: string;
//   description: string;
// }

// interface PictureData {
//   pictures: IPictureJson[];
// }

interface IPicture {}

// const data: PictureData = require("../data/statics.json");

const PicStyled = styled.div<IPicture>`
  margin: auto;
  background-color: transparent;

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
      max-height: 31rem;
      max-width: 31rem;
      min-width: 31rem;
      min-height: 31rem;
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

    -webkit-transition: 0.15s;
    -moz-transition: 0.15s;
    -ms-transition: 0.15s;
    -o-transition: 0.15s;
    transition: 0.15s;
  }

  .gif:hover {
    transition: transform 250ms;
    transform: rotate(-10deg);
  }
`;

const Picture: React.FC = () => {


  return (

    <PicStyled className={"picture"}>
      <div>
        {/* <img
          src={homes}
          className={"gif"}
          alt={data["pictures"][0].description}
        ></img> */}
        <img className={"gif"} src={require("../data/yarasa 1.png")} alt="amk"/>
      </div>
    </PicStyled>
  );
};

export default Picture;
