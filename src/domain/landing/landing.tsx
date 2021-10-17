import GeneralWrapper, { FirstContainer, FirstWrapper } from "./Elements";
import { IContent, IHeader, IRarity } from "../../types";
import React, { useEffect, useRef, useState } from "react";

import { AttributesContainer } from "./Attributes";
import BackGroundContainer from "../../components/BackgroundFirst";
import BackGroundContainerSecond from "../../components/BackgroundSecond";
import CozyLand from "./CozyLand";
import FifthContainer from "./FifthContainer";
import FourthContainer from "./FourthContainer";
import { HardCodeBulut } from "./HardCodeBulut";
import Header from "../../components/Header";
import Progress from "../../components/ProgressBar";
import ScrollTrigger from "gsap/ScrollTrigger";
import SecondContainer from "./SecondContainer";
import SeventhContainer from "./SeventhContainer";
import ThirdContainer from "./ThirdContainer";
import { gsap } from "gsap";
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
  const [showThirdContainer, setShowThirdContainer] = useState<Boolean>(true);
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  let refSec = useRef<HTMLDivElement>(null);
  let refSec2 = useRef<HTMLDivElement>(null);
  let refSecCozyLand = useRef<HTMLDivElement>(null);
  let refCollection = useRef<HTMLDivElement>(null);
  let refRarity = useRef<HTMLDivElement>(null);
  let refRoadMap = useRef<HTMLDivElement>(null);
  let refPresale = useRef<HTMLDivElement>(null);
  let refAttributes = useRef<HTMLDivElement>(null);
  let refTeam = useRef<HTMLDivElement>(null);
  let refHeader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(refHeader.current!, {
      y: -50,
      duration: 0.6,
      scrollTrigger: refHeader.current!,
    });

    gsap.from(refSec.current!, {
      opacity: 0.8,
      y: -500,
      scale: 0.4,
      duration: 1,
      scrollTrigger: refSec.current!,
    });

    gsap.from(refSec2.current!, {
      opacity: 0.8,
      x: 500,
      scale: 0.8,
      
      duration: 1,
      scrollTrigger: refSec2.current!,
    });
    gsap.from(refSecCozyLand.current!, {
      opacity: 0.8,
      x: -500,
      scale: 0.8,
      duration: 1,
      scrollTrigger: refSecCozyLand.current!,
    });
    gsap.from(refCollection.current!, {
      opacity: 0.8,
      y: -500,
      scale: 0.8,
      duration: 1,
      scrollTrigger: refCollection.current!,
    });
    gsap.from(refRarity.current!, {
      opacity: 0.5,
      y: 200,
      scale: 0.7,
      duration: 1,
      scrollTrigger: refRarity.current!,
    });
    gsap.from(refRoadMap.current!, {
      opacity: 0.5,
      y: 200,
      scale: 0.7,
      duration: 1,
      scrollTrigger: refRoadMap.current!,
    });
    gsap.from(refPresale.current!, {
      opacity: 0.5,
      y: -200,
      scale: 0.7,
      duration: 1,
      scrollTrigger: refPresale.current!,
    });
    gsap.from(refAttributes.current!, {
      opacity: 0.5,
      y: -200,
      scale: 0.7,
      duration: 1,
      scrollTrigger: refAttributes.current!,
    });
    gsap.from(refTeam.current!, {
      opacity: 0.5,
      y: -200,
      scale: 0.7,
      duration: 1,
      scrollTrigger: refTeam.current!,
    });
  });

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
      // setShowThirdContainer(true);
    }
    if (_scrollPosition < 3) {
      // setShowThirdContainer(false);
    }

    // console.log(_scrollPosition, 'this is scroll')

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
        <div ref={refHeader}>
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
        </div>

        <HardCodeBulut />

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
          <div ref={refSec}>
            <SecondContainer
              data={data["landing"]["containers"][0]}
              textDirection={true}
              preSale={false}
              metaHomes={false}
            />
          </div>
          <div ref={refSec2}>
            <SecondContainer
              data={data["landing"]["containers"][1]}
              textDirection={false}
              preSale={false}
              metaHomes={true}
            />
          </div>
        </div>

        <div ref={refSecCozyLand} className={"CozyLand-Container"}>
          <CozyLand data={data["landing"]["containers"][8]} />
        </div>

        <div ref={refCollection}>
          <ThirdContainer
            showThirdContainer={showThirdContainer}
            data={data["landing"]["containers"][2]}
          ></ThirdContainer>
        </div>

        <div ref={refRarity}>
          <FifthContainer
            showFifthContainer={showThirdContainer}
            data={data["landing"]["containers"][4]}
          ></FifthContainer>
        </div>

        <div ref={refRoadMap}>
          <FourthContainer
            data={data["landing"]["containers"][3]}
          ></FourthContainer>
        </div>

        <div ref={refPresale} className={"Presale-Container"}>
          <SecondContainer
            data={data["landing"]["containers"][5]}
            textDirection={true}
            preSale={true}
            metaHomes={false}
          />
        </div>

        <div ref={refAttributes}>
          <AttributesContainer
            elements={rarity["elements"]}
            data={data["landing"]["containers"][7]}
          ></AttributesContainer>
        </div>

        <div ref={refTeam} className={"Team-Container"}>
          <SeventhContainer
            data={data["landing"]["containers"][6]}
          ></SeventhContainer>
        </div>
      </FirstWrapper>
    </GeneralWrapper>
  );
};

export default Landing;
