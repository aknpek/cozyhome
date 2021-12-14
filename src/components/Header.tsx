
import { IHeader, IMenu } from "../types";
import React, { useEffect, useRef, useState } from "react";
import { injected } from "./Wallet";


import { useWeb3React } from "@web3-react/core";
import DiscordLogo from "../svgs/DiscordLogo";
import OpenSeaLogo from "../svgs/OpenSeaLogo";
import TwitterLogo from "../svgs/TwitterLogo";
import { scroller } from "react-scroll";
import styled from "styled-components";
import { toast } from "react-toastify";


interface IHead {
  showThirdContainer: Boolean;
  mintingPage: Boolean;
}

const HeaderCo = styled.div<IHead>`
  margin-top: -1rem;
  z-index: 20;

  background-color: #121420;
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border-color: transparent;
  }

  main {
    display: flex;
    z-index: 15;
    position: fixed;
    background-color: #121420;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .headerContainer {
    margin-right: 10rem;
    display: ${(props) => (props.mintingPage ? "none" : "")};

    span {
      display: flex;
      font-family: "Fredoka One", normal;
      letter-spacing: 0.05rem;
      font-weight: 400;
      color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
      h1 {
        background-color: white;
        border-radius: 0.3rem;
        display: flex;
        position: relative;
        font-size: 1rem;
        height: 2.5rem;
        width: 8rem;
        font-weight: 800;
        margin: 1rem;
        color: ${(props) => (props.showThirdContainer ? "#0f0f0f" : "#0f0f0f")};
        transition: color 0.2s ease-in-out;
        text-align: center;
        justify-content: center;
        align-items: center;
        letter-spacing: 1.5;
      }
    }
  }

  .walletContainer {
    span {
      display: flex;
      font-family: "Fredoka One", normal;
      letter-spacing: 0.05rem;
      font-weight: 400;
      color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
      h1 {
        background-color: white;
        border-radius: 0.3rem;
        display: flex;
        position: relative;
        font-size: 1rem;
        height: 2.5rem;
        width: 9rem;
        font-weight: 800;
        margin: 1rem;
        color: ${(props) => (props.showThirdContainer ? "#0f0f0f" : "#0f0f0f")};
        transition: color 0.2s ease-in-out;
        text-align: center;
        justify-content: center;
        align-items: center;
        letter-spacing: 1.5;
      }
    }
  }

  .logoContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .twitterLogo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5rem;

      svg {
        height: 2.5rem;
        width: 2.5rem;
      }

    }


    .twitterLogo:hover {
        color: #ffffff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      cursor: pointer;
      z-index: 9;
      transform: scale(1.1);
      background: #ff961b;
      border-radius: 5rem;
    }



    .discordLogo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5rem;
      svg {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
    
  .discordLogo:hover {
      color: #ffffff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      cursor: pointer;
      z-index: 9;
      transform: scale(1.1);
      background: #ff961b;
      border-radius: 5rem;
    }


    .openSeaLogo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5rem;
      svg {
        height: 2.5rem;
        width: 2.5rem;
      }
    }

  .openSeaLogo:hover {
      color: #ffffff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      cursor: pointer;
      z-index: 9;
      transform: scale(1.1);
      background: #ff961b;
      border-radius: 5rem;
    }
  }

  .dropDownContent {
    display: none;
    position: absolute;
    background-color: #121420;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 20;
  }

  .dropDownWallet {
    position: relative;
    display: inline-block;
    font-family: "Fredoka One", normal;
  }

  .dropDownWallet:hover .dropDownContent {
    display: block;
  }

  @media screen and (max-width: 1100px) {
    .headerContainer {
      display: none;
    }

    main {
      display: flex;
      justify-content: center;
    }
    .logoContainer {
      .walletContainer {
        margin-right: 3rem;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .headerContainer {
      display: none;
    }

    main {
      display: flex;
      justify-content: center;
    }
    .logoContainer {
      .walletContainer {
        /* margin-right: 3  rem; */
      }
    }
  }

  @media screen and (max-width: 500px) {
    .headerContainer {
      display: none;
    }

    main {
      display: flex;
      justify-content: center;
    }

    .walletContainer {
      span {
        display: flex;
        font-family: "Fredoka One", normal;
        letter-spacing: 0.05rem;
        font-weight: 400;
        color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
        h1 {
          background-color: white;
          border-radius: 0.3rem;
          display: flex;
          position: relative;
          font-size: 0.7rem;
          height: 2rem;
          width: 8rem;
          font-weight: 800;
          margin: 1rem;
          color: ${(props) =>
    props.showThirdContainer ? "#0f0f0f" : "#0f0f0f"};
          transition: color 0.2s ease-in-out;
          text-align: center;
          justify-content: center;
          align-items: center;
          letter-spacing: 1.5;
        }
      }
    }

    .logoContainer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .twitterLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;

        svg {
          height: 2rem;
          width: 2rem;
        }
      }

      .discordLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;
        svg {
          height: 2rem;
          width: 2rem;
        }
      }

      .openSeaLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;
        svg {
          height: 2rem;
          width: 2rem;
        }
      }
    }

    .dropDownContent {
      display: none;
      position: absolute;
      background-color: #121420;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 20;
    }

    .dropDownWallet {
      position: relative;
      display: inline-block;
      font-family: "Fredoka One", normal;
    }

    .dropDownWallet:hover .dropDownContent {
      display: block;
    }
  }

  @media screen and (max-width: 400px) {
    .headerContainer {
      display: none;
    }

    main {
      display: flex;
      justify-content: center;
    }

    .walletContainer {
      span {
        display: flex;
        font-family: "Fredoka One", normal;
        letter-spacing: 0.05rem;
        font-weight: 400;
        color: ${(props) => (props.showThirdContainer ? "white" : "#cecad3")};
        h1 {
          background-color: white;
          border-radius: 0.3rem;
          display: flex;
          position: relative;
          font-size: 0.7rem;
          height: 2rem;
          width: 5rem;
          font-weight: 800;
          margin: 1rem;
          color: ${(props) =>
    props.showThirdContainer ? "#0f0f0f" : "#0f0f0f"};
          transition: color 0.2s ease-in-out;
          text-align: center;
          justify-content: center;
          align-items: center;
          letter-spacing: 1.5;
        }
      }
    }

    .logoContainer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .twitterLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;

        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }

      .discordLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;
        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }

      .openSeaLogo {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.5rem;
        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }

    .dropDownContent {
      display: none;
      position: absolute;
      background-color: #121420;
      min-width: 100%;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 20;
    }

    .dropDownWallet {
      position: relative;
      display: inline-block;
      font-family: "Fredoka One", normal;
    }

    .dropDownWallet:hover .dropDownContent {
      display: block;

    }
  }

  h1:hover {
    color: #ffffff;
    font-weight: 200;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    z-index: 15;
  }

  h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
    border-radius: 0.8rem;
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
    border-radius: 0.2rem;
    font-weight: 600;
    background-color: #ff961b;
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

  @supports not(position: "sticky") {
    main {
      margin-top: -6rem;
    }
    @media screen and (max-width: 500px) {
      main {
        margin-top: -3rem;
      }
    }
  }
`;

export const scrollToSection = (className: string) => {
  scroller.scrollTo(className, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

interface IHeaderExtension extends IHeader {
  showThirdContainer: Boolean;
  scrollPosition?: Number;
  setHowManyAvailable?: any;
  mintNow?: any;
  mintable?: any;
  mintingPage: boolean;
  //handleWallet?: Dispatch<SetStateAction<boolean>>
  handleWallet?: any;
  setMintLeft?: any;
  wlCode?: number;
  setWlCode?: any;
  floorPrice?: number;
  setWallet?: any;

}

const openInNewTab = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const babyLion = require("../data/contracts/CozyHomeNFTRemix.json");
const abi = babyLion["abi"];
const address = babyLion["address"];

const Header: React.FC<IHeaderExtension> = (props) => {
  const [balanceAccount, setBalanceAccount] = useState<string>("");
  const [tryWallet, setTryWallet] = useState<Boolean>(false);
  const [contract, setContract] = useState<any>();

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  useEffect(() => {
    if (!tryWallet && active) {
      setTryWallet(true);
    }
  }, [tryWallet, active]);

  const connect = async () => {
    try {
      const connected = await activate(injected)
      Promise.resolve(connected).then((value) => { }).then(() => {
        if (props.setWallet) {
          props.setWallet(true);
        }
      })
    } catch {
      toast("Make sure you have Metamask Wallet")
    }
  }

  useEffect(() => {
    if (props.setWallet) {
      props.setWallet(active)
    }
  }, [active])

  const disconnect = () => {
    deactivate();
    toast("You disconnected your wallet!");
    if (props.setWallet) {
      props.setWallet(false);
    }
  };

  const fetchBalance = async () => {
    if (library !== undefined) {
      library.eth.getBalance(account).then((response: string) => {
        setBalanceAccount(`${Number(response) / 1000000000000000000}`);
      });
    }
  };

  const getSupply = async () => {
    // const supply_left = await contract.methods.totalSupply.call();
    const supply_left = await contract.methods.mintableLeft();
    Promise.resolve(supply_left)
      .then((value) => value.call())
      .then((value) => {
        if (props.setMintLeft) {
          props.setMintLeft({ minted: value });
        }
      });
  };

  useEffect(() => {
    if (library !== undefined) {
      setContract(new library.eth.Contract(abi, address));
    }
  }, [library]);

  useEffect(() => {
    if (contract) {
      getSupply();
    }
  }, [contract]);

  useEffect(() => {
    fetchBalance();
  }, [account]);

  const mintNow = async (selectMintableAmount: number, wlCode: number, floorPrice: number) => {

    const sendAmount = 1000000000000000000 * selectMintableAmount * floorPrice;
    const number_of_mints = selectMintableAmount;

    try {
      const minted_list = await contract.methods
        .mintSale(account, number_of_mints, wlCode)
        .send({ from: account, value: sendAmount });

      Promise.resolve(minted_list)
        .then((value) => {
          toast(`Minted Items in Hash ${value.blockHash}`, {
            autoClose: false,
            icon: "🤭",
            closeOnClick: true,
          });
        }).then(() => props.setWlCode(0))
        .catch((e) => console.log(e));
    } catch (e) {
      toast("Your transaction has been cancelled!");
    }
  };

  useEffect(() => {
    if (contract !== undefined && account !== undefined && props.wlCode && props.floorPrice) {
      mintNow(props.mintNow.count, props.wlCode, props.floorPrice);

    }
  }, [props.mintNow]);

  return (
    <HeaderCo
      mintingPage={props.mintingPage}
      showThirdContainer={props.showThirdContainer}
    >
      <main>
        <div className={"headerContainer"}>
          <span>
            {props.menu.map((value: IMenu) => {
              if (value.title !== "connect wallet") {
                return (
                  <div key={"div" + value.id}>
                    <div key={"div2" + value.id}>
                      <h1
                        onClick={() => scrollToSection(value.scroll)}
                        key={"h1" + value.id}
                      >
                        {value.title}
                      </h1>
                    </div>
                  </div>
                );
              }
            })}
          </span>
        </div>

        <div className={"logoContainer"}>
          <div className={"walletContainer"}>
            {props.menu.map((value: IMenu) => {
              return (
                <div className={""} key={"div" + value.id}>
                  <span key={"div" + value.id}>
                    {value.title === "connect wallet" ? (
                      [
                        active ? (
                          <div
                            className={"dropDownWallet"}
                            key={"div" + value.id + "a"}
                          >
                            <h1 key={"div" + value.id + "b"}>Wallet</h1>
                            <div
                              className={"dropDownContent"}
                              key={"wlc" + value.id + "c"}
                            >
                              <h1 key={"wls" + value.id + "d"}>
                                wallet id:{" "}
                                {account === null
                                  ? "-"
                                  : account
                                    ? `${account.substring(
                                      0,
                                      6
                                    )}...${account.substring(
                                      account.length - 4
                                    )}`
                                    : ""}
                              </h1>
                              <h1 key={"div" + value.id + "e"}>
                                balance:{" "}
                                {balanceAccount === null
                                  ? "-"
                                  : balanceAccount
                                    ? `${balanceAccount.substring(
                                      0,
                                      6
                                    )}...${balanceAccount.substring(
                                      balanceAccount.length - 4
                                    )}`
                                    : ""}
                              </h1>
                              <h1
                                onClick={disconnect}
                                key={"h1" + value.id + "f"}
                              >
                                disconnect
                              </h1>
                            </div>
                          </div>
                        ) : (
                          <h1 onClick={connect} key={"h1" + value.id}>
                            {value.title}
                          </h1>
                        ),
                      ]
                    ) : (
                      <div key={"div" + value.id}></div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            className={"twitterLogo"}
            onClick={() =>
              openInNewTab("https://twitter.com/CozyHomeNFT")
            }
          >
            <TwitterLogo />
          </div>
          <div
            className={"discordLogo"}
            onClick={() => openInNewTab("https://discord.com/invite/yk2MZ8Y4pn")}
          >
            <DiscordLogo />
          </div>

          <div
            className={"openSeaLogo"}
            onClick={() =>
              openInNewTab("https://opensea.io/collection/cozy-home-nft-v2")
            }
          >
            <OpenSeaLogo props={{}} />
          </div>
        </div>
      </main>
    </HeaderCo>
  );
};

export default Header;
