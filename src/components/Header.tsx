import React, { useEffect } from "react";
import styled from "styled-components";
import { IHeader } from "../types";
import { scroller } from "react-scroll";

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

  main {
    display: flex;
    z-index: 3;
    position: fixed;
    top: 2%;
    background-color: #c7c7c724;
    border-radius: 1rem;

  }

  span {
    display: flex;
    font-family: "Heiti SC";
    font-size: 0.7vw;
    font-weight: 400;
    color: ${(props) => (props.showThirdContainer ? "white" : "#cad3cf")};
    /* background-color: yellow; */

    h1 {
      display: flex;
      height: 4rem;
      width: 6rem;
      margin: 1rem;
      color: #757474;
      transition: color 0.2s ease-in-out;
      text-align: center;
      justify-content: center;
      align-items: center;
      letter-spacing: 1.6;

      /* background-color: red; */
    }

    h1:hover {
      position: relative;
      color: #3ca3cc;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }

  img {
    width: 6rem;
    height: 6rem;
    background-color: #dadada;
    margin-top: auto;
    margin-bottom: auto;
    /* margin-right: calc(20rem + 20px); */
  }
`;

const scrollToSection = (className: string) => {
  scroller.scrollTo(className, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

interface IHeaderExtension extends IHeader {
  showThirdContainer: Boolean;
  scrollPosition: Number;
}

const Header: React.FC<IHeaderExtension> = (props) => {
  useEffect(() => {}, [props.showThirdContainer]);

  return (
    <HeaderCo showThirdContainer={props.showThirdContainer}>
      <main>
        <img src={props.logo["url"]} alt={props.logo["description"]} />
        <span>
          <h1 onClick={() => scrollToSection("Home")}>{props.menu["home"]}</h1>
          <h1 onClick={() => scrollToSection("Landing-Home")}>
            {props.menu["about"]}
            {props.showThirdContainer && <div className={"Deneme"}></div>}
          </h1>
          <h1 onClick={() => scrollToSection("Fourth-Component")}>
            {props.menu["roadmap"]}
          </h1>
          <h1 onClick={() => scrollToSection("Fifth-Component")}>
            {props.menu["team"]}
          </h1>
        </span>
      </main>
    </HeaderCo>
  );
};

export default Header;
