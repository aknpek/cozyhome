import GeneralWrapper, {
  FifthContainer,
  FirstContainer,
  FirstWrapper,
  FourthContainer,
  SecondContainer,
  SixthContainer,
  ThirdContainer,
} from "./Elements";
import { IContent, IHeader } from "../../types";
import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Progress from "../../components/ProgressBar";

const data: IContent = require("../../data/text.json");
// const animation_data: IAnimation

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
  const header_data: IHeader = data["landing"]["header"];
  // const animation-data: IAnimSecond = animation_data["secondContainer"]
  const [scrollPosition, setPosition] = useState<Number>(0);
  const [showThirdContainer, setShowThirdContainer] = useState<Boolean>(false);
  const [showFourthContainer] = useState<Boolean>(false);

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
      <Progress scroll={scrollPosition + "%"} />
      <FirstWrapper>
        <FirstContainer>
          <Header
            {...header_data}
            showThirdContainer={showThirdContainer}
            scrollPosition={scrollPosition}
          />
        </FirstContainer>

        <SecondContainer data={data["landing"]["containers"][0]} textDirection={true}/>
        <SecondContainer data={data["landing"]["containers"][1]} textDirection={false}/>

        {showThirdContainer ? (
          <ThirdContainer
            showThirdContainer={showThirdContainer}
          ></ThirdContainer>
        ) : (
          <div className="Landing-Home"></div>
        )}

        <FourthContainer
          showFourthContainer={showFourthContainer}
        ></FourthContainer>

        <FifthContainer
          showFifthContainer={showThirdContainer}
        ></FifthContainer>

        <SixthContainer
          showSixthContainer={showThirdContainer}
        ></SixthContainer>
      </FirstWrapper>
    </GeneralWrapper>
  );
};

export default Landing;
