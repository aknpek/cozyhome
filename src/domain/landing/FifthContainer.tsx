import { IContainer, IFifthContainer } from "../../types";

import BackGroundFirst from "../../svgs/BackGroundFirst";
import BackGroundSecond from "../../svgs/BackGroundSecond";
import Pictures from "../../components/Locals";
import styled from "styled-components";

const FifthComponent = styled.div<IFifthContainer>`
  display: grid;
  background-color: #121420;
  height: 800px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 0.2fr 0.1fr 0.1fr 0.7fr 0.2fr;
  grid-template-areas:
    "titleDiv"
    "sloganDiv"
    "picturesDiv";

  .backGroundSecond {
    top: 20%;
    width: 100%;
    position: absolute;
    background-color: transparent;
    z-index: 0;
  }

  .backGroundFirst {
    width: 100%;
    position: absolute;
    background-color: transparent;
  }

  .titleDiv {
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: 0.15s;
    -moz-transition: 0.15s;
    -ms-transition: 0.15s;
    -o-transition: 0.15s;
    transition: 0.15s;
    z-index: 1;

    h1 {
      font-size: 4.5rem;
      font-family: "Josefin Sans", cursive;
      color: #ffffffbe;
      font-weight: 600;
    }
  }
  .titleDiv:hover {
    transition: transform 150ms background-color 0.5s ease color 0.5s ease;
    transform: scale(1.05);
    text-decoration: underline;
    text-decoration-color: #13222f;
  }
  .sloganDiv {
    grid-area: sloganDiv;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    width: 90%;
    margin: auto;
    z-index: 1;

    h2 {
      text-align: center;
      font-size: 1.2rem;
      line-height: 2.5;
      font-weight: 100;
      font-family: "Josefin Sans", cursive;
      color: #ffffffbe;
    }
  }
  .pictureDiv {
    grid-area: pictureDiv;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;

    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 1;

    h1 {
      text-align: center;
      font-size: 2.2rem;
      line-height: 2.5;
      font-weight: 100;
      font-family: "Josefin Sans", cursive;
      color: #ffffffbe;
    }
    img {
      height: 300px;
      width: 300px;
      background-color: transparent;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      -ms-transition: 0.1s;
      -o-transition: 0.1s;
      transition: 0.1s;
    }

    img:hover {
      transition: transform linear 250ms;

      transform: translateY(-20px);
    }
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 0.2fr 2fr 0.2fr;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 0.2fr 4fr 0.2fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 0.2fr 5fr 0.2fr;
  }
  @media screen and (max-width: 900px) {
    height: 1600px;
    grid-template-columns: 0.2fr 6fr 0.2fr;
    grid-template-rows: 0.2fr 0.1fr 0.1fr 1fr 0.2fr;

    .titleDiv {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
      h1 {
      }
    }

    .sloganDiv {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
      width: 90%;
      margin: auto;
      z-index: 1;

      h2 {
      }
    }
    .pictureDiv {

      display: grid;

      h1 {
      }
      img {
      }

   
    }

   
  }
`;
interface PropsFifth {
  showFifthContainer: Boolean;
  data: IContainer;
}
const FifthContainer: React.FC<PropsFifth> = (props) => {
  return (
    <FifthComponent className="Fifth-Component">
      <div className={"titleDiv"}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={"sloganDiv"}>
        <h2>{props.data.slogan}</h2>
      </div>
      <div className={"pictureDiv"}>
        {props.data["pictures"].map((value: any) => (
          <div key={value.id + "div"} className={`pictureDiv${value.id}`}>
            <img
              src={Pictures[value.picture_url].default}
              key={value.id + "img"}
              alt={value.description}
            ></img>
            <h1 key={value.id + "h1"}>{value.title}</h1>
          </div>
        ))}
      </div>

      {/* <div className={"backGroundFirst"}>
        <BackGroundFirst
         props={{}}/>
      </div> */}

      {/* <div className={"backGroundSecond"}>
        <BackGroundSecond
         props={{}}/>
      </div> */}
    </FifthComponent>
  );
};

export default FifthContainer;
