import { IContainer as Props } from "../types";
import React from "react";
import styled from "styled-components";

interface ITextDisplay {}

const TextBlock = styled.div<ITextDisplay>`   
  margin: auto;
  height: 100%;
  .sloganDiv {
    height: 12rem;
    will-change: transform;
    transition: transform 450ms;

  }
  .messageDiv {
    height: 12rem;
  }

  @media screen and (max-width: 2000px) {
    .slogan {
      height: 100%;
      height: 12rem;
      letter-spacing: -0.1rem;
      font-family: "Josefin Sans", cursive;
      font-size: 10rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .message {
      height: 100%;
      height: 5rem;
      width: 95%;
      margin: auto;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 3;
      color: #5d5d5d;
    }
  }

  @media screen and (max-width: 1700px) {
    .slogan {
      height: 100%;
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 9rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .message {
      height: 100%;
      width: 90%;
      margin: auto;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 1.3rem;
      font-weight: 200;
      line-height: 3.5;
      color: #5d5d5d;
    }
  }

  @media screen and (max-width: 1500px) {
    .slogan {
      height: 100%;
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 7.5rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .message {
      height: 100%;
      width: 90%;
      margin: auto;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 1.3rem;
      font-weight: 200;
      line-height: 3;
      color: #5d5d5d;
    }
  }

  @media screen and (max-width: 1200px) {
    .slogan {
      height: 100%;
      height: 12rem;
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 7rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .message {
      height: 100%;
      height: 5rem;
      width: 90%;
      margin: auto;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 1.2rem;
      font-weight: 200;
      line-height: 2.5;
      color: #5d5d5d;
    }
  }

  @media screen and (max-width: 1000px) {
    .slogan {
      height: 100%;
      height: 9rem;
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 6rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .message {
      height: 100%;
      height: 5rem;
      width: 90%;
      margin: auto;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 1.0rem;
      font-weight: 200;
      line-height: 2.5;
      color: #5d5d5d;
    }
  }


  .sloganDiv:hover {
    transition: transform 250ms;
    transform: translateX(+20px);
    transform: rotate(+2deg);
  }
`;

const TextDisplay: React.FC<Props> = (props) => {
  return (
    <TextBlock className={"textdisplay"}>
      <div className={"sloganDiv"}>
        <h1 className={"slogan"}>{props.title}</h1>
      </div>
      <div className={"messageDiv"}>
        <h1 className={"message"}>{props.slogan}</h1>
      </div>
    </TextBlock>
  );
};

export default TextDisplay;
