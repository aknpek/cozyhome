import { IContainer as Props } from "../types";
import React from "react";
import styled from "styled-components";

interface ITextDisplay {}

const TextBlock = styled.div<ITextDisplay>`
  .textdisplay {
    display: grid;
    grid-template-columns: 0.4fr 1fr 0.4fr;
    grid-template-rows: 0.2fr 0.5fr 1fr 0.5fr 0.2fr;
    grid-template-areas:
      "slogan"
      "message"
      "subtitle";
  }

  .sloganDiv {
    grid-area: slogan;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    will-change: transform;
    transition: transform 450ms;
    font-family: "Josefin Sans", cursive;
    text-align: center;
    justify-items: center;
    div {
      height: 10rem;
      border-radius: 2rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .slogan {
        color: #121420;
      }
    }
  }

  .messageDiv {
    grid-area: message;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    font-family: "Josefin Sans", cursive;
    div {
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .message{ 
        color: #f1f1f1;
      }
    }

  }
  .subTitleDiv {
    text-align: center;
    grid-area: subtitle;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
    width: 50%;
    font-family: "Josefin Sans", cursive;
    div {
      height: 5rem;
      border-radius: 1rem;
      background-color: #ff961b;
      display: flex;
      justify-content: center;
      align-items: center;
      .subTitle {
        color: white;
      }
    }

    div:hover { 
      cursor: pointer;
    }
  }

  @media screen and (max-width: 2000px) {
    .sloganDiv {
      .slogan {
        letter-spacing: -0.1rem;
        font-size: 7.5rem;
      }
    }
    .messageDiv {
      .message {
        font-size: 1.5rem;
        font-weight: 200;
        line-height: 3;
      }
    }
    .subTitleDiv {
      border-radius: 2rem;
      .subTitle {
      }
    }
  }

  @media screen and (max-width: 1700px) {
    .sloganDiv {
      height: 10rem;
    }
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
    .sloganDiv {
      height: 9rem;
    }
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
    .sloganDiv {
      height: 8rem;
    }
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
    .sloganDiv {
      height: 9rem;
    }
    .slogan {
      letter-spacing: 0.2rem;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 5rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .message {
      width: 90%;
      margin: auto;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-size: 0.9rem;
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
        <div>
          <h1 className={"slogan"}>{props.title}</h1>
        </div>
      </div>
      <div className={"messageDiv"}>
        <div>
          <h1 className={"message"}>{props.slogan}</h1>
        </div>
      </div>
      <div className={"subTitleDiv"}>
        <div>
          <h1 className={"subTitle"}>{props.subtitle}</h1>
        </div>
      </div>
    </TextBlock>
  );
};

export default TextDisplay;
