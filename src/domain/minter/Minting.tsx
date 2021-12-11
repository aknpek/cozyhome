import React, { useEffect, useState, useRef } from "react";
import styled, { CSSObject } from "styled-components";
import { IContent, IHeader } from "../../types";
import Select from "react-select";
import Header from "../../components/Header";
import { toast } from "react-toastify";

interface IChosens {
  token_id: number;
  token_uri: string;
}

interface IMint {
  count: number;
}

const MintContainer = styled.section`
  background-color: #121420;
  font-family: "Fredoka One", normal;

  .headerClass {
    position: fixed;
    margin-top: -3rem;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  .grandContainer {
    height: 100%;
    display: flex;
    padding: 2rem 0;
    padding-bottom: 12rem;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    h1,
    span {
      letter-spacing: 0.1rem;
      font-size: 1.2rem;
      font-family: "Anton", normal;
      letter-spacing: 0.2rem;
      font-weight: 200;
      color: #0f0f0f;
    }
    .statContainerDiv {
      margin-top: 4rem;
      background-color: #f1c40f;
      box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);

      display: flex;
      border-radius: 0.8rem;
      justify-content: center;
      align-items: center;
      width: 24rem;
      height: 3rem;
      cursor: pointer;
      h1 {
        color: black;
        font-size: 1rem;
        font-family: "Fredoka One", normal;
      }
    }
    .gifContainer {
      z-index: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .gif {
        margin-top: 2rem;
        height: 500px;
        width: 500px;
        z-index: 20;
        object-fit: contain;
        border-radius: 0px 20px;
        -webkit-transition: 0.15s;
        -moz-transition: 0.15s;
        -ms-transition: 0.15s;
        -o-transition: 0.15s;
        transition: 0.15s;
      }
      .priceComponent {
        display: flex;
        margin: 2rem;
        height: 3rem;
        width: 13rem;
        display: flex;
        border-radius: 0.9rem;
        backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
        background-color: white;

        justify-content: center;
        align-items: center;
        h1 {
          font-family: "Fredoka One", normal;
          text-align: center;
          color: black;
          font-size: 1.2rem;
        }
      }
    }
    .buttonContainer {
      margin-top: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 50vw;
    }
    .quantityContainer {
      display: flex;

      .selectContainer {
        width: 15rem;
        height: 5rem;
      }
    }
    .buttonSection {
      margin-top: 1rem;
      width: 15rem;
      height: 5rem;
      border-width: 0px;
      border-radius: 15px;
      background: #ff961b;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      -ms-transition: 0.1s;
      -o-transition: 0.1s;
      transition: 0.1s;
      span{
        font-family: "Fredoka One", normal;
      }
    }
    }
    .buttonSection:hover {
      cursor: pointer;
      border-radius: 20px;
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      -ms-transition: 0.2s;
      -o-transition: 0.2s;
      transition: 0.2s;
      background: #07bc0c;
      transition: transform linear 250ms;
      transform: translateY(-20px);
      transform: scale(0.9);
      span{
        color: white;
      }
    }
  }
  @media screen and (max-width: 850px) {
    .grandContainer {
      flex-direction: column;
      padding: 5rem 0;
    }

    .quantityContainer {
      position: relative;
      z-index: 30;
      .selectContainer {
      }
    }
  }
  @media screen and (max-width: 500px) {
    .headerClass {
    position: fixed;
    top: 0rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
    .grandContainer {
      .statContainerDiv {
      margin-top: 2rem;
      width: 16rem;
      height: 3rem;
      h1 {
        font-size: 0.8rem;
      }
    }
      .gifContainer {
        .gif {
          height: 300px;
          width: 300px;
        }
      }
    }
  }
`;
interface Animal {
  label: string;
  value: number;
}

const items: Animal[] = [
  { label: "1 Cozy Home", value: 1 },
  { label: "2 Cozy Homes", value: 2 },
  { label: "3 Cozy Homes", value: 3 },
  { label: "4 Cozy Homes", value: 4 },
  { label: "5 Cozy Homes", value: 5 },
  { label: "10 Cozy Homes", value: 10 },
  { label: "25 Cozy Homes", value: 25 },
  { label: "100 Cozy Homes", value: 100 },
  { label: "250 Cozy Homes", value: 250 },
];

interface IMinted {
  minted: boolean | number;
}

export const Minting: React.FC = () => {
  const [chosenValue, setChosenValue] = useState<number>(1);
  const [mintNow, setMintNow] = useState<IMint>({ count: 1 });
  const scrollPosition = useRef<number>(0);
  const showThirdContainer = false;
  const data: IContent = require("../../data/json/text.json");
  const header_data: IHeader = data["landing"]["header"];
  const [mintLeft, setMintLeft] = useState<IMinted>({ minted: false });

  useEffect(() => {
    toast(`${chosenValue} item ready for mint!`);
  }, [chosenValue]);

  const customStyles = {
    control: (styles: CSSObject) => {
      return {
        ...styles,
        display: "flex",
        height: "5rem",
        borderRadius: "15px",
        background: "rgb(221,227,59)",
        fontFamily: "Anton",
      };
    },
    option: (
      styles: CSSObject,
      { data, isDisabled, isFocused, isSelected, isActive }: any
    ) => {
      return {
        ...styles,
        background: isFocused ? "rgb(221,227,59)" : "",
      };
    },
    menu: (styles: CSSObject) => {
      return {
        ...styles,
        fontFamily: "Anton",
      };
    },
    placeholder: (styles: CSSObject) => ({
      ...styles,
      color: "#0F0F0F",
      fontSize: "1.25rem",
    }),
    input: (styles: CSSObject) => ({
      ...styles,
      fontFamily: `Anton`,
      "& input": {
        font: "inherit",
        alignSelf: "center",
      },
    }),
  };

  const handleSelect = (option: any) => {
    if (option) {
      setChosenValue(option.value);
    }
  };
  return (
    <MintContainer>
      <div className={"headerClass"}>
        <Header
          showThirdContainer={showThirdContainer}
          scrollPosition={scrollPosition.current}
          mintNow={mintNow}
          {...header_data}
          mintingPage={true}
          setMintLeft={setMintLeft}
        />
      </div>
      <div className="grandContainer">
        <div className="gifContainer">
          <div className={"statContainerDiv"}>
            {mintLeft.minted ? (
              <h1>Supply 5555 / {mintLeft.minted}</h1>
            ) : (
              <h1>Connect Wallet to See Supply</h1>
            )}
          </div>
          <img
            className="gif"
            src={require("./../../data/png/logo.gif")}
            alt="gif"
          />
          <div className="priceComponent">
            <h1>{chosenValue * 0.03} ETH</h1>
          </div>
        </div>

        <div className={"quantityContainer"}>
          <div className="selectContainer">
            <Select
              menuPlacement="bottom"
              onChange={handleSelect}
              options={items}
              // styles={customStyles}
              placeholder="Number of mint!"
            />
          </div>
        </div>

        <button
          className="buttonSection"
          onClick={() => {
            toast("You are minting now!");
            setMintNow((prevState) => {
              return { count: chosenValue };
            });
          }}
        >
          <span>Mint Now</span>
        </button>
      </div>
    </MintContainer>
  );
};
