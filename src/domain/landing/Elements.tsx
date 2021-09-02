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
    height: calc(55.5rem + 20px);
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
  @media screen and (max-width: 1700px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
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
  @media screen and (max-width: 1500px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.3fr 1.2fr 0.4fr;
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
  @media screen and (max-width: 1200px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.5fr 1.2fr 0.4fr;
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
  @media screen and (max-width: 1000px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.5fr 1.2fr 0.4fr;
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
  @media screen and (max-width: 500px) {
    position: relative;
    display: grid;
    width: 100%;
    height: calc(55.5rem + 20px);
    grid-template-columns: 0.4fr 1.2fr 0.4fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas: "picture text-display";

    .picture {
      grid-area: picture;
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .textdisplay {
      grid-area: text-display;
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }

`;


const ThirdComponent = styled.div<IThirdContainer>`
  display: grid;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  animation: 1s ease-out 0s 1 slideInFromLeft;
  
  .header {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    
    h1{
      position: absolute;
      margin-top: 8%;
      font-size: 10rem;
      color: white;
      font-family: "Josefin Sans", cursive;

    }
  }
  .cells {
  }

  @media screen and (max-width: 2000px) {
    height: calc(67.5rem + 20px);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1.7fr;
    grid-template-areas:
      "header"
      "cell-2 cell-3 cell-4";

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
    height: calc(105.5rem + 20px);
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 1fr 1fr;
    grid-template-areas:
      "header"
      "cell-2"
      "cell-3"
      "cell-4";

    .cell-1 {
      grid-area: header;
      grid-row: 1/1;
      grid-column: 1/1;
      h1{
      position: absolute;
      margin-top: 20%;
      font-size: 6rem;
      color: white;
      font-family: "Josefin Sans", cursive;

    }
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

  div {
    will-change: transform;
  transition: transform 450ms;
  /* transition: transform 1s ease-in-out; */

  }
  div:hover {
    transition: transform linear 250ms;
    box-shadow: rgba(163, 162, 162, 0.25) 0px 54px 55px, rgba(26, 82, 119, 0.12) 0px -12px 30px, rgba(155, 27, 123, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 1rem;
    transform: translateY(-20px);


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
      <header className={"cell cell-1 header"}>
        <h1>Your Collection</h1>{" "}
      </header>
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
