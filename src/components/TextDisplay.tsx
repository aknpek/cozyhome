import React from "react";
import styled from "styled-components";
import { IContainer as Props } from "../types";

interface ITextDisplay {}

const TextBlock = styled.div<ITextDisplay>`
  /* display: flex;
    position: relative;
    background-color: yellow;
    top: 15%;
    height: 50%;
    width: 50%;
    min-width: 100px;
    right: 20%;
    flex-direction: column;
    flex: -1; */
  /* background-color: yellow; */

  h1 {
    font-size: calc(8rem * 0.9);
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
    line-height: 2.5;
    color: #5d5d5d;
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
