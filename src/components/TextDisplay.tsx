import React from "react";
import styled from "styled-components";
import { IContainer as Props } from "../types";

interface ITextDisplay {}

const TextBlock = styled.div<ITextDisplay>`
  margin: auto;
  @media screen and (max-width: 2000px) {
    h1 {
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-size: 8rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      width: 95%;
      margin: auto;
      font-family: "Heiti SC";
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 3.0;
      color: #5d5d5d;
    }
  }

  @media screen and (max-width: 1500px) {
    h1 {
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-size: 7rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      width: 95%;
      margin: auto;
      font-family: "Heiti SC";
      font-size: 1.3rem;
      font-weight: 200;
      line-height: 3.5;
      color: #5d5d5d;
    }
  }

  @media screen and (max-width: 1350px) {
    h1 {
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-size: 7rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      width: 95%;
      margin: auto;
      font-family: "Heiti SC";
      font-size: 1.3rem;
      font-weight: 200;
      line-height: 3.0;
      color: #5d5d5d;
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      letter-spacing: 0.6rem;
      font-family: "Heiti SC";
      font-size: 6rem;
      background: -webkit-linear-gradient(#890daf, #3ca3cc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h2 {
      width: 95%;
      margin: auto;
      font-family: "Heiti SC";
      font-size: 1.2rem;
      font-weight: 200;
      line-height: 3.5;
      color: #5d5d5d;
    }
  }
`;

const TextDisplay: React.FC<Props> = (props) => {
  return (
    <TextBlock className={"textdisplay"}>
      <h1>{props.title}</h1>
      <h2>{props.slogan}</h2>
    </TextBlock>
  );
};

export default TextDisplay;
