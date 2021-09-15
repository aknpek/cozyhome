import { IPictures } from "../types";
import Pictures from "../components/Locals";
import React from "react";
import styled from "styled-components";

interface IPicture {}

const PicStyled = styled.div<IPicture>`
  margin: auto;
  background-color: transparent;

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
    width: 100%;
    height: 100%;
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

  div {
    will-change: transform;
    transition: transform 450ms;
  }

  @media screen and (max-width: 2000px) {
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
  @media screen and (max-width: 1700px) {
    div {
      max-height: 28rem;
      max-width: 28rem;
      min-width: 28rem;
      min-height: 28rem;
    }
  }
  @media screen and (max-width: 1500px) {
    div {
      max-height: 26rem;
      max-width: 26rem;
      min-width: 26rem;
      min-height: 26rem;
    }
  }
  @media screen and (max-width: 1200px) {
    div {
      max-height: 25rem;
      max-width: 25rem;
      min-width: 25rem;
      min-height: 25rem;
    }
  }
  @media screen and (max-width: 900px) {
    div {
      max-height: 22rem;
      max-width: 22rem;
      min-width: 22rem;
      min-height: 22rem;
    }
  }
  @media screen and (max-width: 700px) {
    div {
      max-height: 20rem;
      max-width: 20rem;
      min-width: 20rem;
      min-height: 20rem;
    }
  }
  @media screen and (max-width: 500px) {
    div {
      max-height: 18rem;
      max-width: 18rem;
      min-width: 18rem;
      min-height: 18rem;
    }
  }
  @media screen and (max-width: 500px) {
    div {
      max-height: 16rem;
      max-width: 16rem;
      min-width: 16rem;
      min-height: 16rem;
    }
    .gif {
      margin-top: 3rem;
    }
  }

  .gif:hover {
    transition: transform 250ms;
    transform: rotate(-10deg);
  }
`;

interface Props {
  picture: IPictures[];
}

const Picture: React.FC<Props> = (props) => {
  return (
    <PicStyled className={"picture"}>
      <div>
        {props.picture.map((value: IPictures) => {
          if (value["picture_url"] !== "gif") {
            return (
              <img
                className={"gif"}
                src={Pictures[value["picture_url"]].default}
                alt="amk"
                key={value.id}
              />
            );
          } else if (value["picture_url"] === "gif") {
            return (
              <img
                className={"gif"}
                src={Pictures[value["picture_url"]].default}
                alt="amk"
                key={"_"}
              />
            );
          } else {
            <div></div>;
          }
        })}
      </div>
    </PicStyled>
  );
};

export default Picture;
