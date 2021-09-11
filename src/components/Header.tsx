import { IContainer, IHeader, IMenu } from "../types";
import React, { useEffect } from "react";

import { scroller } from "react-scroll";
import styled from "styled-components";

interface IHead {
  showThirdContainer: Boolean;
}

const HeaderCo = styled.div<IHead>`
  @supports not (position: "sticky") {
  }

  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border-color: transparent;
  }

  @media screen and (max-width: 2000px) {
    main {
      display: flex;
      z-index: 3;
      position: fixed;
      top: 2%;
      background-color: #00000023;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    span {
      display: flex;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-weight: 400;
      color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
      h1 {
        display: flex;
        position: relative;
        font-size: 1rem;
        height: 4rem;
        width: 8rem;
        margin: 1rem;
        color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
        transition: color 0.2s ease-in-out;
        text-align: center;
        justify-content: center;
        align-items: center;
        letter-spacing: 1.5;
      }
    }
  }

  @media screen and (max-width: 700px) {
    main {
      display: flex;
      z-index: 3;
      position: fixed;
      top: 2%;
      background-color: #00000023;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    span {
      display: flex;
      font-family: "Heiti SC";
      font-family: "Josefin Sans", cursive;
      font-weight: 400;
      color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
      h1 {
        display: flex;
        position: relative;
        font-size: 0.6rem;
        height: 4rem;
        width: 2.5rem;
        margin: 0.6rem;
        color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
        transition: color 0.2s ease-in-out;
        text-align: center;
        justify-content: center;
        align-items: center;
        letter-spacing: 1.5;
      }
    }
  }

  h1:hover {
    color: white;
    font-weight: 200;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
  }

  h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  h1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  h1::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: linear-gradient(132deg, #f4d03f 0%, #ff961b 100%);
    z-index: -1;
    transition: transform 0.3s ease;
  }

  img {
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: calc(10rem + 20px);
  }
`;

const scrollToSection = (className: string) => {
  scroller.scrollTo(className, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

interface IMeta {
  connector: any;
  disconnector: any;
  active: any;
  account: any;
}
interface IHeaderExtension extends IHeader {
  showThirdContainer: Boolean;
  scrollPosition: Number;
  metaMask: IMeta;
}

const Header: React.FC<IHeaderExtension> = (props) => {
  useEffect(() => {}, [props.showThirdContainer]);

  const metaActive = props.metaMask.active;
  const connector = props.metaMask.connector
  const disconnector = props.metaMask.disconnector

  return (
    <HeaderCo showThirdContainer={props.showThirdContainer}>
      <main>
        <span>
          {props.menu.map((value: IMenu) => {
            return (
              <div key={"div" + value.id}>
                {value.title === "connect wallet" ? (
                  [
                    metaActive ? (
                      <h1
                        onClick={disconnector}
                        key={"h1" + value.id}
                      >
                        disconnect
                      </h1>
                    ) : (
                      <h1
                        onClick={connector}
                        key={"h1" + value.id}
                      >
                        {value.title}
                      </h1>
                    ),
                  ]
                ) : (
                  <div key={"div2" + value.id}>
                    <h1
                      onClick={() => scrollToSection(value.scroll)}
                      key={"h1" + value.id}
                    >
                      {value.title}
                    </h1>
                  </div>
                )}
              </div>
            );
          })}
        </span>
      </main>
    </HeaderCo>
  );
};

export default Header;
