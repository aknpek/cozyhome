import GeneralWrapper, { FirstContainer, FirstWrapper } from "./Elements";
import { IContent, IHeader } from "../../types";
import React, { useEffect, useState } from "react";

import FifthContainer from "./FifthContainer";
import FourthContainer from "./FourthContainer";
import Header from "../../components/Header";
import Progress from "../../components/ProgressBar";
import SecondContainer from "./SecondContainer";
import SeventhContainer from "./SeventhContainer";
import ThirdContainer from "./ThirdContainer";
import { injected } from "../../components/Wallet";
import { useWeb3React } from "@web3-react/core";

const getDocHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
};

const Landing: React.FC = () => {
  const data: IContent = require("../../data/json/text.json");
  const header_data: IHeader = data["landing"]["header"];
  const [tryWallet, setTryWallet] = useState<Boolean>(false);
  const [scrollPosition, setPosition] = useState<Number>(0);
  const [showThirdContainer, setShowThirdContainer] = useState<Boolean>(false);
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = async () => {
    try {
      await deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        connect();
        setTryWallet(true);
      } else {
        setTryWallet(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!tryWallet && active) {
      setTryWallet(true)
    }
  }, [tryWallet, active])


  const calculateScrollPercentage = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPostion = (scrollTop / totalDocScrollLength) * 100;
    setPosition(scrollPostion);
  };
  const scrollDistance = () => {
    requestAnimationFrame(() => {
      calculateScrollPercentage();
    });
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollDistance);
    return () => {
      document.removeEventListener("scroll", scrollDistance);
    };
  });

  useEffect(() => {
    if (scrollPosition > 15) {
      setShowThirdContainer(true);
    }

    if (scrollPosition < 3) {
      setShowThirdContainer(false);
    }
  }, [scrollPosition]);

  return (
    <GeneralWrapper>
      <div className={"progressDiv"}>
        <Progress scroll={scrollPosition + "%"} />
      </div>
      <FirstWrapper>
        <FirstContainer>
          <Header
            {...header_data}
            showThirdContainer={showThirdContainer}
            scrollPosition={scrollPosition}
            metaMask={{
              active: active,
              account: account,
              connector: connect,
              disconnector: disconnect,
              library: library
            }}
          />
        </FirstContainer>

        <SecondContainer
          data={data["landing"]["containers"][0]}
          textDirection={true}
        />
        <SecondContainer
          data={data["landing"]["containers"][1]}
          textDirection={false}
        />

        {showThirdContainer ? (
          <ThirdContainer
            showThirdContainer={showThirdContainer}
            data={data["landing"]["containers"][2]}
          ></ThirdContainer>
        ) : (
          <div className="Landing-Home"></div>
        )}

        <FifthContainer
          showFifthContainer={showThirdContainer}
          data={data["landing"]["containers"][4]}
        ></FifthContainer>

        <FourthContainer
          data={data["landing"]["containers"][3]}
        ></FourthContainer>

        <SecondContainer
          data={data["landing"]["containers"][5]}
          textDirection={false}
        />
        <SeventhContainer
          data={data["landing"]["containers"][6]}
        ></SeventhContainer>
      </FirstWrapper>
    </GeneralWrapper>
  );
};

export default Landing;
