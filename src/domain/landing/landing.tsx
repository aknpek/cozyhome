import GeneralWrapper, { FirstContainer, FirstWrapper } from "./Elements";
import { IContent, IHeader, IRarity } from "../../types";
import React, { useEffect, useRef, useState } from "react";

import { AttributesContainer } from "./Attributes";
import BackGroundContainer from "../../components/BackgroundFirst";
import BackGroundContainerSecond from "../../components/BackgroundSecond";
import BulutlarContainer from "../../components/Bulutlar";
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
  const rarity: IRarity = require("../../data/json/rarity.json");

  const header_data: IHeader = data["landing"]["header"];
  const [tryWallet, setTryWallet] = useState<Boolean>(false);
  const scrollPosition = useRef<Number>(0);
  const [showThirdContainer, setShowThirdContainer] = useState<Boolean>(false);
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {}
  };

  const disconnect = async () => {
    try {
      await deactivate();
    } catch (ex) {}
  };

  // useEffect(() => {
  //   injected.isAuthorized().then((isAuthorized: boolean) => {
  //     if (isAuthorized) {
  //       connect();
  //       setTryWallet(true);
  //     } else {
  //       setTryWallet(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    if (!tryWallet && active) {
      setTryWallet(true);
    }
  }, [tryWallet, active]);

  const calculateScrollPercentage = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const _scrollPosition = (scrollTop / totalDocScrollLength) * 100;
    if (_scrollPosition > 15) {
      setShowThirdContainer(true);
    }
    if (_scrollPosition < 3) {
      setShowThirdContainer(false);
    }
    scrollPosition.current = _scrollPosition;
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
            scrollPosition={scrollPosition.current}
            metaMask={{
              active: active,
              account: account,
              connector: connect,
              disconnector: disconnect,
              library: library,
            }}
          />
        </FirstContainer>

        <BulutlarContainer {...{ top: "10", right: "0", scale: 2.2 }} />
        <BulutlarContainer {...{ top: "10", right: "70", scale: 1 }} />
        <BulutlarContainer {...{ top: "40", right: "80", scale: 1.5 }} />
        <BulutlarContainer {...{ top: "15", right: "80", scale: 1.5 }} />
        <BulutlarContainer {...{ top: "22", right: "0", scale: 2 }} />
        <BulutlarContainer {...{ top: "30", right: "0", scale: 1.5 }} />
        <BulutlarContainer {...{ top: "25", right: "75", scale: 1.5 }} />
        <BulutlarContainer {...{ top: "65", right: "0", scale: 1.2 }} />
        <BulutlarContainer {...{ top: "82", right: "75", scale: 1.2 }} />
        <BulutlarContainer {...{ top: "95", right: "0", scale: 1.2 }} />
        <BulutlarContainer {...{ top: "75", right: "0", scale: 1.2 }} />
        <BulutlarContainer {...{ top: "72", right: "75", scale: 2.2 }} />
        <BulutlarContainer {...{ top: "40", right: "0", scale: 1.2 }} />
        <BulutlarContainer {...{ top: "42", right: "5", scale: 1.2 }} />
        <BulutlarContainer {...{ top: "55", right: "75", scale: 1.8 }} />
        <BulutlarContainer {...{ top: "52", right: "0", scale: 1.8 }} />
        <BulutlarContainer {...{ top: "45", right: "75", scale: 1.8 }} />
        <BulutlarContainer {...{ top: "85", right: "5", scale: 1.2 }} />
        <BulutlarContainer {...{ top: "88", right: "75", scale: 1.2 }} />

        <div className={"firstBackGround"}>
          <BackGroundContainer />
        </div>

        <div className={"secondBackGround"}>
          <BackGroundContainerSecond />
        </div>

        <div className={"firstBackGround2"}>
          <BackGroundContainer />
        </div>

        <div className={"secondBackGround2"}>
          <BackGroundContainerSecond />
        </div>

        <div className={"Home-Container"}>
          <SecondContainer
            data={data["landing"]["containers"][0]}
            textDirection={true}
            preSale={false}
            metaHomes={false}
          />
          <SecondContainer
            data={data["landing"]["containers"][1]}
            textDirection={false}
            preSale={false}
            metaHomes={true}
          />
        </div>

        {showThirdContainer ? (
          <ThirdContainer
            showThirdContainer={showThirdContainer}
            data={data["landing"]["containers"][2]}
          ></ThirdContainer>
        ) : (
          <div className="Collection-Container"></div>
        )}

        <FifthContainer
          showFifthContainer={showThirdContainer}
          data={data["landing"]["containers"][4]}
        ></FifthContainer>

        <FourthContainer
          data={data["landing"]["containers"][3]}
        ></FourthContainer>

        <div className={"Presale-Container"}>
          <SecondContainer
            data={data["landing"]["containers"][5]}
            textDirection={true}
            preSale={true}
            metaHomes={false}
          />
        </div>

        <div>
          <AttributesContainer
            elements={rarity["elements"]}
            data={data["landing"]["containers"][7]}
          ></AttributesContainer>
        </div>

        <div className={"Team-Container"}>
          <SeventhContainer
            data={data["landing"]["containers"][6]}
          ></SeventhContainer>
        </div>
      </FirstWrapper>
    </GeneralWrapper>
  );
};

export default Landing;
