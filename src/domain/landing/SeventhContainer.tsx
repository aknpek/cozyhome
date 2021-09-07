import { IContainer, ISixthContainer } from "../../types";

import Pictures from "../../components/Locals";
import styled from "styled-components";

const SeventhComponent = styled.div<ISixthContainer>`
  background-color: #121420;
  margin-top: 0%;
  height: 1050px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 0.2fr 1fr 0.5fr 1fr 0.5fr;
  grid-template-areas:
    "titleDiv"
    "photosTeam"
    "smartContract";

  .titleTeam {
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 6;

    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4.5rem;
      color: #ffffffbe;
      text-align: center;
      font-family: "Josefin Sans", cursive;
    }
  }

  .photosTeam {
    grid-area: blockFirst;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 6;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      width: 22rem;
      height: 22rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        height: 16rem;
        width: 16rem;
        border-radius: 16rem;

        a {
          img {
          }
        }
      }

      h3 {
        color: #ffffffbe;
        font-size: 2.5rem;
        font-family: "Josefin Sans", cursive;
      }
      h4 {
        color: #ffffffbe;
        font-size: 1rem;
        font-weight: 100;
        font-family: "Josefin Sans", cursive;
        margin-top: -1rem;
      }
    }
  }
  .smartContract {
    grid-area: blockSecond;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      h1 {
        color: #ffffffbe;
        font-family: "Josefin Sans", cursive;
        text-decoration: underline;
      }
      h1:hover {
      }
    }
  }

  @media screen and (max-width: 1700px) {
    height: 850px;

    .photosTeam {
      div {
        width: 20rem;
        height: 20rem;
        div {
        }
        img {
          height: 15rem;
          width: 15rem;
        }
      }

      h3 {
        font-size: 2.5rem;
      }
      h4 {
        font-size: 1rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    height: 750px;

    .photosTeam {
      div {
        width: 20rem;
        height: 20rem;
        div {
        }
        img {
          height: 13rem;
          width: 13rem;
        }
      }

      h3 {
        font-size: 2rem;
      }
      h4 {
        font-size: 1rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    height: 650px;

    .photosTeam {
      div {
        width: 20rem;
        height: 20rem;
        div {
        }
        img {
          height: 10rem;
          width: 10rem;
        }
      }

      h3 {
        font-size: 1.8rem;
      }
      h4 {
        font-size: 1rem;
        font-weight: 100;
        margin-top: -1rem;
      }
    }
  }
`;
interface PropsSeven {
  data: IContainer;
}
const SeventhContainer: React.FC<PropsSeven> = (props) => {
  return (
    <SeventhComponent className="Seven-Component">
      <div className={"titleTeam"}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={"photosTeam"}>
        {props.data["pictures"].map((value: any) => (
          <div key={value.id + "photos"}>
            <div key={value.id + "photosinner"}>
              <a href={value.hyperlink} key={value.id + "a"}>
                <img
                  src={Pictures[value.picture_url].default}
                  alt={value.title}
                  key={value.id + "image"}
                />
              </a>
            </div>

            <h3 key={value.id + "h3"}>{value.title}</h3>
            <h4 key={value.id + "h4"}>{value.subtitle}</h4>
          </div>
        ))}
      </div>
      <div className={"smartContract"}>
        <a>
          <h1>Smart Contract</h1>
        </a>
      </div>
    </SeventhComponent>
  );
};

export default SeventhContainer;
