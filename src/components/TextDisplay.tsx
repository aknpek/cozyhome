import { ISlogan, IContainer as Props } from "../types";
import React, { useRef } from "react";
import styled, { css } from "styled-components";

import CozyLogo from "../svgs/CozyLogo";
import Dropdown from "react-dropdown";
import { scrollToSection } from "../components/Header";

interface ITextDisplay {
  textDirection: Boolean;
  preSale: Boolean;
}

const TextBlock = styled.div<ITextDisplay>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .sloganDiv {
    will-change: transform;
    transition: transform 450ms;
    font-family: "Fredoka One", normal;
    font-weight: 200;

    text-align: center;
    justify-items: center;

    .sloganDivBlock {
      height: 5rem;
      border-radius: 2rem;
      display: flex;
      justify-content: ${(props) => (props.preSale ? "center" : "left")};
      align-items: center;
      .slogan {
        font-size: 4.5rem;
        letter-spacing: 0.1rem;
        color: white;
      }
    }
    .cozyHomeLogoDiv {
      display: flex;
      height: 8rem;
      justify-content: left;
      align-items: center;
      .cozyHomeLogoDiv2 {
        /* position: absolute; */
        transform: scale(1);
      }
    }
  }
  .messageDiv {
    font-family: "Josefin Sans", cursive;
    display: flex;
    justify-content: ${(props) => (props.preSale ? "center" : "left")};
    align-items: center;
    .message {
      color: #f1f1f1;
      font-size: 18px;
      font-weight: 200;
      line-height: 1.5;
      letter-spacing: 0.05rem;
      margin-left: ${(props) => !props.textDirection && "2rem"};
    }

    .preSaleBlock {
      margin-top: 3rem;
      margin-bottom: 3rem;
      width: 40rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .preSale {
        font-family: "Fredoka One", normal;
        display: flex;
        height: 4rem;
        width: 15rem;
        font-weight: 200;
        border-radius: 0.8rem;
        border-width: 2rem;
        color: white;
        border: 1.5px solid #05344e;

        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .preSaleEth {
        font-family: "Fredoka One", normal;
        color: white;
        border: 1.5px solid #05344e;
        font-weight: 200;
        display: flex;
        height: 4rem;
        width: 15rem;
        border-radius: 0.8rem;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
  }
  .subTitleDiv {
    text-align: center;
    margin-top: 1rem;
    width: 50%;
    font-family: "Josefin Sans", cursive;
    border-radius: 2rem;
    border-radius: 1rem;
    background-color: #ff961b;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s ease;

    .subTitle {
      color: white;
    }

    :hover {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
      transition: 0.8s ease;
      cursor: pointer;
    }
  }
  .subTitleMintBlock {
    display: flex;
    justify-content: space-around;

    .subTitleMintDiv {
      text-align: center;
      margin-top: 1rem;
      width: 55%;
      font-family: "Josefin Sans", cursive;
      border-radius: 2rem;
      border-radius: 1rem;
      background-color: #ff961b;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 1s ease;

      .subTitleMint {
        color: white;
      }

      :hover {
        -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
        transition: 0.8s ease;
        cursor: pointer;
      }
    }
    .subTitleQuantityDiv {
      text-align: center;
      margin-top: 1rem;
      width: 35%;
      font-family: "Josefin Sans", cursive;
      border-radius: 2rem;
      border-radius: 1rem;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 1s ease;

      .subTitleQuantity {
        color: black;
      }
    }
  }

  .sloganDivBlock:hover {
    transition: transform 250ms;
    transform: translateX(+20px);
    transform: rotate(+2deg);
  }

  @media screen and (max-width: 1700px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.75);
        }
      }
    }
    .messageDiv {
      font-family: "Josefin Sans", cursive;
      display: flex;
      justify-content: center;
      align-items: center;
      .message {
        color: #f1f1f1;
        font-size: 1.2rem;
        font-weight: 200;
        line-height: 1;
      }
    }
  }
  @media screen and (max-width: 1600px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.7);
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.65);
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.43);
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.55);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.5);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 1.1rem;
        line-height: 1;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .sloganDiv {
      /* background-color: red; */
      .cozyHomeLogoDiv {
        .cozyHomeLogoDiv2 {
          transform: scale(0.8);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 100;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .sloganDiv {
      margin-top: 25rem;

      .sloganDivBlock {
        justify-content: center;
      }

      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.8);
        }
      }
    }
    .messageDiv {
      margin-top: 2rem;
      text-align: center;

      .message {
        font-size: 1.1rem;
        line-height: 2;
        text-align: center;
      }
      div {
        width: ${(props) => (props.preSale ? "100%" : "80%")};;
        h1 {
        }
      }
    }
    .subTitleDiv {
      margin: auto;
      margin-top: 2rem;
      width: 11rem;
      height: 4rem;
      border-radius: 1.2rem;

      .subTitle {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .sloganDiv {
      .sloganDivBlock {
        display: flex;
        justify-content: center;

        .slogan {
          margin-top: -5rem;
          font-size: 3rem;
        }
      }

      .cozyHomeLogoDiv {
        height: 3rem;

        .cozyHomeLogoDiv2 {
          transform: scale(0.2);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 0.9rem;
        line-height: 3.5;
        text-align: center;
      }
    }
    .subTitleDiv {
      margin: auto;
      width: 11rem;
      height: 4rem;
      border-radius: 1.2rem;

      .subTitle {
        font-size: 1.2rem;
      }
    }
  }
`;

interface PTextDisplay extends Props {
  textDirection: Boolean;
}

const TextDisplay: React.FC<PTextDisplay> = (props) => {
  const eth = useRef<Number>(0.3);
  const leftMint = useRef<Number>(1000);
  const options = [1, 2, 3, 5, 10, 20, 100];
  const defaultOption = options[0];

  return (
    <TextBlock
      preSale={props.title === "Presale"}
      className={"textdisplay"}
      textDirection={props.textDirection}
    >
      <div className={"sloganDiv"}>
        {props.title !== "" ? (
          <div className={"sloganDivBlock"}>
            <h1 className={"slogan"}>{props.title}</h1>
          </div>
        ) : (
          <div className={"cozyHomeLogoDiv"}>
            <div className={"cozyHomeLogoDiv2"}>
              <CozyLogo props={{}} />
            </div>
          </div>
        )}
      </div>
      <div className={"messageDiv"}>
        <div>
          {props.title === "Presale" ? (
            <div className={"preSaleBlock"}>
              <h1 className={"preSale"}>{eth.current} ETH</h1>
              <h1 className={"preSaleEth"}>{leftMint.current} LEFT</h1>
            </div>
          ) : (
            props.slogan.map((value: ISlogan) => {
              return <h1 className={"message"}>{value.slogan}</h1>;
            })
          )}
        </div>
      </div>
      {props.subtitle !== "" && props.title !== "Presale" ? (
        <div
          className={"subTitleDiv"}
          onClick={() => scrollToSection("Presale-Container")}
        >
          <h1 className={"subTitle"}>{props.subtitle}</h1>
        </div>
      ) : (
        [
          props.title === "Presale" ? (
            <div className={"subTitleMintBlock"}>
              <div className={"subTitleMintDiv"}>
                <h1 className={"subTitleMint"}>{props.subtitle}</h1>
              </div>
              <div className={"subTitleQuantityDiv"}>
                <h1 className={"subTitleQuantity"}>{1}</h1>
              </div>
            </div>
          ) : (
            <div></div>
          ),
        ]
      )}
    </TextBlock>
  );
};

export default TextDisplay;
