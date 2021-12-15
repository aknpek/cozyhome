import React, { useEffect, useState, useRef } from "react";
import styled, { CSSObject } from "styled-components";
import { IContent, IHeader } from "../../types";
import Select from "react-select";
import Header from "../../components/Header";
import { toast } from "react-toastify";
// require("dotenv").config();

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
      text-align: center;
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
        font-weight: 800;
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
        
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1 {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 3rem;
          width: 8rem;
          border-radius: 0.9rem;
          backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
          box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
          background-color: white;

          font-family: "Fredoka One", normal;
          text-align: center;
          color: black;
          font-size: 1.2rem;
        }

        .whiteListCode{
        border-radius: 0.5rem;
        width: 200px;
        height: 40px;
        background-color: white;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        label {
          letter-spacing: 0.1rem;
        
        }

        input{
          width: 75px;
          height: 25px;
          font-family: "Fredoka One", normal;
          letter-spacing: 0.5rem;
          text-align: center;
        }
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
  const [wlCode, setWlCode] = useState<number>(1111);
  const [floorPrice, setFloorPrice] = useState<number>(0.03);
  const [walletSet, setWallet] = useState<boolean>(false);
  useEffect(() => {
    if (walletSet) {
      toast(`${chosenValue} item ready for mint!`);
    } else {
      toast(`Connect Wallet`);
    }
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

  const onInputChange = (event: any) => {
    console.log("areaew");
    if (event) {
      setWlCode(event.target.value);
    }
  };

  useEffect(() => {
    console.log(wlCode == Number(process.env.REACT_APP_WORM));
    if (wlCode == Number(process.env.REACT_APP_WORM)) {
      setFloorPrice(0.025);
    } else {
      setFloorPrice(0.030);
    }
  }, [wlCode]);

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
          floorPrice={floorPrice}
          wlCode={wlCode}
          setWallet={setWallet}
          setWlCode={setWlCode}
        />
      </div>
      <div className="grandContainer">
        <div className="gifContainer">
          <div style={{ cursor: "default", backgroundColor: "black" }} className={"statContainerDiv"}>
            {mintLeft.minted ? (
              <h1 style={{ color: "white" }}>Supply 7999 / {mintLeft.minted}</h1>
            ) : (
              <h1 style={{ color: "white" }}>Connect Wallet to See Supply</h1>
            )}
          </div>
          <img
            className="gif"
            src={require("./../../data/png/logo.gif").default}
            alt="gif"
          />
          <div className="priceComponent">
            <h1>{(chosenValue * floorPrice).toFixed(3)} ETH</h1>
            <div className="whiteListCode">
              <label>WL Code:</label>
              <input
                type="text"
                name="CODE"
                onChange={onInputChange}
                defaultValue={0}
              />
            </div>
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
            if (walletSet) {
              toast("You are minting now!");
              setMintNow((prevState) => {
                return { count: chosenValue };
              });
            } else {
              toast("Connect your wallet again!")
            }
          }}
        >
          <span>Mint Now</span>
        </button>
      </div>
    </MintContainer>
  );
};
