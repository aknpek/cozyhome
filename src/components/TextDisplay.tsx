import CozyLogo from "../svgs/CozyLogo";
import { IContainer as Props } from "../types";
import React from "react";
import styled from "styled-components";

// import { pinJSONToIPFS } from "./Pinata";

interface ITextDisplay {}

const TextBlock = styled.div<ITextDisplay>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .sloganDiv {
    will-change: transform;
    transition: transform 450ms;
    font-family: "Josefin Sans", cursive;

    text-align: center;
    justify-items: center;

    .sloganDivBlock {
      border-radius: 2rem;
      /* background-color: white; */
      display: flex;
      justify-content: left;
      align-items: center;
      .slogan {
        font-size: 4.5rem;
        letter-spacing: -0.1rem;
        color: white;
      }
    }
    .cozyHomeLogoDiv {
      display: flex;
      height: 8rem;
      justify-content: center;
      align-items: center;
      .cozyHomeLogoDiv2 {
        position: absolute;
        transform: scale(0.65);
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
      font-size: 1.5rem;
      font-weight: 200;
      line-height: 3;
    }
  }
  .subTitleDiv {
    text-align: center;
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
  .sloganDivBlock:hover {
    transition: transform 250ms;
    transform: translateX(+20px);
    transform: rotate(+2deg);
  }

  @media screen and (max-width: 1700px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 7rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.55);
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
        line-height: 3;
      }
    }
  }
  @media screen and (max-width: 1600px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 6rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.52);
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.5);
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
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.4);
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.38);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 1.1rem;
        line-height: 3;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.35);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 1.1rem;
        line-height: 3;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .sloganDiv {
      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.3);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 0.9rem;
        line-height: 3;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .sloganDiv {
      margin-top: 18rem;
      .cozyHomeLogoDiv {
        height: 5rem;
        .cozyHomeLogoDiv2 {
          transform: scale(0.3);
        }
      }
    }
    .messageDiv {
      .message {
        font-size: 0.9rem;
        line-height: 3;
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
        

        .cozyHomeLogoDiv2 {
          top: -20rem,;
          height: 3rem;
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

const TextDisplay: React.FC<Props> = (props) => {
  return (
    <TextBlock className={"textdisplay"}>
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
        <h1 className={"message"}>{props.slogan}</h1>
      </div>
      {props.subtitle !== "" ? (
        <div className={"subTitleDiv"}>
          <h1 className={"subTitle"}>{props.subtitle}</h1>
        </div>
      ) : (
        <div></div>
      )}
    </TextBlock>
  );
};

export default TextDisplay;
