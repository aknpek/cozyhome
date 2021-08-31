import GeneralWrapper, {
  FifthContainer,
  FirstContainer,
  FirstWrapper,
  FourthContainer,
  SecondContainer,
  ThirdContainer,
} from "./Elements";
import { IContainer, IContent, IHeader } from "../../types";
import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Picture from "../../components/Picture";
import Progress from "../../components/ProgressBar";
import TextDisplay from "../../components/TextDisplay";

const data: IContent = require("../../global/text.json");

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

// const scrollToSection = (className: string) => {
//   scroller.scrollTo(className, {
//     duration: 200,
//     delay: 0,
//     smooth: "easeInOutQuart",
//   });
// };

const Landing: React.FC = () => {
  const header_data: IHeader = data["landing"]["header"];
  const second_container_text: IContainer = data["landing"]["containers"][0];
  const [scrollPosition, setPosition] = useState<Number>(0);
  const [showThirdContainer, setShowThirdContainer] = useState<Boolean>(false);
  const [showFourthContainer] = useState<Boolean>(false);
  // const [scrollable, setScrollable] = useState<Boolean>(true);

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
      <div className={"Home"}></div>
      <Progress scroll={scrollPosition + "%"} />
      <FirstWrapper>
        <FirstContainer>
          <Header {...header_data} showThirdContainer={showThirdContainer} scrollPosition={scrollPosition} />
        </FirstContainer>
        <SecondContainer>
          <Picture />
          <TextDisplay {...second_container_text} />
        </SecondContainer>
        {showThirdContainer ? (
          <ThirdContainer
            showThirdContainer={showThirdContainer}
          ></ThirdContainer>
        ) : (
          <div className="Landing-Home"></div>
        )}
        {showThirdContainer ? (
          <FourthContainer
            showFourthContainer={showFourthContainer}
          ></FourthContainer>
        ) : (
          <div className="Fourth-Container"></div>
        )}
        {showThirdContainer ? (
          <FifthContainer
            showFifthContainer={showFourthContainer}
          ></FifthContainer>
        ) : (
          <div className="Fifth-Container"></div>
        )}
      </FirstWrapper>
    </GeneralWrapper>
  );
};

export default Landing;
