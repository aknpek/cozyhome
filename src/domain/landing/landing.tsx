import GeneralWrapper, {
  FirstContainer,
  FirstWrapper,
  ThirdContainer,
} from "./Elements";
import { IContent, IHeader } from "../../types";
import React, { useEffect, useState } from "react";

import FifthContainer from "./FifthContainer";
import FourthContainer from "./FourthContainer";
import Header from "../../components/Header";
import Progress from "../../components/ProgressBar";
import SecondContainer from "./SecondContainer";
import SeventhContainer from "./SeventhContainer";

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
  const [scrollPosition, setPosition] = useState<Number>(0);
  const [showThirdContainer, setShowThirdContainer] = useState<Boolean>(false);

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
