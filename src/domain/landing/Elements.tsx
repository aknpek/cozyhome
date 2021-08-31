import {
  IFifthContainer,
  IFirstContainer,
  IFirstWrapper,
  IGeneralWrapper,
  ISecondContainer,
  IThirdContainer,
} from "../../types";

import styled from "styled-components";
import { useEffect } from "react";

const GeneralWrapper = styled.div<IGeneralWrapper>`
  width: 100%;
  height: 100%;
`;

export const FirstWrapper = styled.div<IFirstWrapper>`
  flex-direction: row;
`;

export const FirstContainer = styled.div<IFirstContainer>`
  /* margin-left: 5%; */
  /* margin-right: 5%; */
  height: 100%;
  width: 100%;
`;

export const SecondContainer = styled.div<ISecondContainer>`
  @media screen and (max-width: 2000px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(67.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.2fr 1.2fr 0.4fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }

  @media screen and (max-width: 1400px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(67.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.2fr 1.2fr 0.4fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 4;
      grid-column-end: 5;
    }
  }
`;

const ThirdComponent = styled.div<IThirdContainer>`
  display: grid;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  @media screen and (max-width: 2000px) {
    height: calc(67.5rem + 20px);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1.5fr;
    grid-template-areas:
      "header"
      "cell-2 cell-3 cell-4";

    .header {
    }
    .cells {
    }

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/4;
    }
    .cell-2 {
      grid-area: cell-2;
      grid-column-start: 1;
      grid-row-start: 2;
      grid-column-end: 2;
    }
    .cell-3 {
      grid-area: cell-3;
      grid-column-start: 2;
      grid-row-start: 2;
      grid-column-end: 3;
    }
    .cell-4 {
      grid-area: cell-4;
      grid-column-start: 3;
      grid-row-start: 2;
      grid-column-end: 4;
    }
    div {
      max-width: 35rem;
      max-height: 28rem;
      min-width: 400px;
      min-height: 400px;
      background-color: white;
      border-radius: 2rem;
      margin: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  @media screen and (max-width: 1400px) {
    height: calc(88.5rem + 20px);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.8fr 1fr 1fr;
    grid-template-areas:
      "header"
      "cell-2 cell-3"
      "cell-4";

    .header {
    }
    .cells {
    }

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/3;
    }
    .cell-2 {
      grid-area: cell-2;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-3 {
      grid-area: cell-3;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .cell-4 {
      grid-area: cell-4;
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }

  @media screen and (max-width: 900px) {
    height: calc(95.5rem + 20px);
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr;
    grid-template-areas:
      "header"
      "cell-2"
      "cell-3"
      "cell-4";

    .header {
    }
    .cells {
    }

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/1;
    }
    .cell-2 {
      grid-area: cell-2;
      grid-column-start: 1;
      grid-row-start: 2;
    }
    .cell-3 {
      grid-area: cell-3;
      grid-column-start: 1;
      grid-row-start: 3;
    }
    .cell-4 {
      grid-area: cell-4;
      grid-column-start: 1;
      grid-row-start: 4;
    }

    div {
      max-width: 40rem;
      max-height: 40rem;
      min-width: 25rem;
      min-height: 25rem;
      background-color: white;
      border-radius: 2rem;
      margin: auto;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }

  div:hover {
    background-color: black;
  }
`;

interface PropsThird {
  showThirdContainer: Boolean;
}

export const ThirdContainer: React.FC<PropsThird> = ({
  showThirdContainer,
}) => {
  useEffect(() => {}, [showThirdContainer]);

  return (
    <ThirdComponent className="Landing-Home">
      <header className={"cell cell-1 header"}> Your Collection</header>
      <div className={"cell cell-2 cells"}>
        <div></div>
      </div>
      <div className={"cell cell-3 cells"}>
        <div></div>
      </div>
      <div className={"cell cell-4 cells"}>
        <div></div>
      </div>
    </ThirdComponent>
  );
};

const FourthComponent = styled.div<IThirdContainer>`
  margin-top: 0%;
  height: calc(67rem + 20px);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  div:hover {
    display: none;
  }
`;

interface PropsFourth {
  showFourthContainer: Boolean;
}

export const FourthContainer: React.FC<PropsFourth> = ({
  showFourthContainer,
}) => {
  return <FourthComponent className="Fourth-Component"></FourthComponent>;
};

const FifthComponent = styled.div<IFifthContainer>`
  background-color: #f4d03f;
  background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);
  margin-top: 0%;
  height: calc(67rem + 20px);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  div:hover {
    display: none;
  }
`;

interface PropsFifth {
  showFifthContainer: Boolean;
}

export const FifthContainer: React.FC<PropsFifth> = ({
  showFifthContainer,
}) => {
  return <FifthComponent className="Fifth-Component"></FifthComponent>;
};

export default GeneralWrapper;
