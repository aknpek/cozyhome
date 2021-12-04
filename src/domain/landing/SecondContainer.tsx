import styled, { css } from "styled-components";
import { useEffect, useRef } from "react";

import { IContainer } from "../../types";
import Picture from "../../components/Picture";
import TextDisplay from "../../components/TextDisplay";
import YildizContainer from "../../components/Yildizlar";

interface ISecondComponent {
  textDireciton: Boolean;
  preSale: Boolean;
  metaHomes: Boolean;
}

export const SecondComponent = styled.div<ISecondComponent>`
  margin-top: 100px;
  position: relative;
  display: grid;
  width: 100%;
  height: 600px;

  ${({ textDireciton }) =>
    textDireciton &&
    css`
      grid-template-columns: 1.2fr 1.2fr 0.2fr 2.2fr 1.2fr;
    `}
  ${({ textDireciton }) =>
    !textDireciton &&
    css`
      grid-template-columns: 1.2fr 2.2fr 0.2fr 1.2fr 1.2fr;
      .messageDiv {
        justify-content: left;
      }
    `}
  grid-template-rows: 1fr 2fr 0.5fr;
  grid-template-areas: "picture text-display";
  .picture {
    grid-area: picture;
    grid-row-start: 1;
    grid-row-start: 2;
    grid-column-start: ${(props) => (props.textDireciton ? 2 : 4)};
    grid-column-end: ${(props) => (props.textDireciton ? 3 : 5)};
    z-index: 1;
  }

  .textdisplay {
    grid-area: text-display;
    grid-row-start: 1;
    grid-row-start: 2;
    grid-column-start: ${(props) => (props.textDireciton ? 4 : 2)};
    grid-column-end: ${(props) => (props.textDireciton ? 5 : 3)};
    z-index: 1;
  }
  .yildizDiv {
    position: absolute;
    z-index: 0;
  }
  @media screen and (max-width: 1700px) {
    max-width: 1700px;
    height: 600px;
    .yildizDiv {
      width: 1700px;
    }
  }
  @media screen and (max-width: 1500px) {
    max-width: 1500px;
    height: 550px;
    .yildizDiv {
      width: 1500px;
    }
  }
  @media screen and (max-width: 1300px) {
    max-width: 1300px;
    ${({ preSale }) =>
      preSale &&
      css`
        margin-top: 320px;
        max-height: 550px;
        min-height: 550px;
      `}

    height: 550px;
    .yildizDiv {
      width: 1300px;
    }
  }
  @media screen and (max-width: 1000px) {
    height: 950px;
    max-width: 1000px;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.1fr 0.5fr 1fr 1fr;

    ${({ preSale }) =>
      preSale &&
      css`
        margin-top: 320px;
        max-height: 950px;
        min-height: 950px;
      `}

    .picture {
      margin: auto;
      grid-row-start: 2;
      grid-row-start: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }

    .textdisplay {
      margin: auto;
      grid-row-start: 3;
      grid-row-start: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;

      .yildizDiv {
        width: 800px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    max-width: 750px;
    max-height: 850px;
    grid-template-columns: 0.2fr 7fr 0.2fr;
    grid-template-rows: 0.1fr 1fr 1fr 2fr;
    .picture {
      margin: auto;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }

    .textdisplay {
      margin: auto;
      grid-row-start: 4;
      grid-row-start: 5;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;

      .yildizDiv {
        width: 800px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 0.2fr 5fr 0.2fr;
    grid-template-rows: 0.1fr 1fr 1fr 1fr;

    ${({ metaHomes }) =>
      !metaHomes &&
      css`
        margin-top: 50px;
        max-height: 820px;
      `}

    ${({ metaHomes }) =>
      metaHomes &&
      css`
        margin-top: 150px;
        max-height: 950px;
        min-height: 950px;
      `}

    ${({ preSale }) =>
      preSale &&
      css`
        margin-top: 220px;
        grid-template-rows: 0.1fr 1fr 1fr 0.1fr;
        max-height: 600px;
        min-height: 600px;
      `}


      .picture {
      margin: auto;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }

    .textdisplay {
      margin: auto;
      grid-row-start: 3;
      grid-row-start: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;

      .yildizDiv {
        width: 650px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 0.2fr 5fr 0.2fr;
    grid-template-rows: 0.1fr 1fr 1fr 1fr;

    ${({ metaHomes }) =>
      !metaHomes &&
      css`
        margin-top: 50px;
        max-height: 650px;
      `}

    ${({ metaHomes }) =>
      metaHomes &&
      css`
        margin-top: 170px;
        max-height: 1000px;
        min-height: 1000px;
      `}

    ${({ preSale }) =>
      preSale &&
      css`
        margin-top: 300px;
        grid-template-rows: 0.1fr 1fr 1fr 0.1fr;
        max-height: 500px;
        min-height: 500px;
      `}


      .picture {
      margin: auto;
      grid-row-start: 1;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }

    .textdisplay {
      margin: auto;
      grid-row-start: 3;
      grid-row-start: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      z-index: 1;
    }
  }

  .starDiv {
    position: absolute;
    height: 100%;
    width: 100%;
    /* z-index: 0; */

    .startSubDiv {
      margin-left: 25%;
    }
    .startSubDiv2 {
      margin-top: 25%;
    }
  }
`;

interface PropsSecond {
  data: IContainer;
  textDirection: Boolean;
  preSale: Boolean;
  metaHomes: Boolean;
}

const SecondContainer: React.FC<PropsSecond> = (props) => {
  return (
    <SecondComponent
      textDireciton={props.textDirection}
      preSale={props.preSale}
      metaHomes={props.metaHomes}
    >
        <Picture picture={props.data["pictures"]} />
      <TextDisplay textDirection={props.textDirection} {...props.data} />
      <div className={"starDiv"}>
        <div className={"startSubDiv2"}>
          <YildizContainer />
        </div>
      </div>
    </SecondComponent>
  );
};

export default SecondContainer;
