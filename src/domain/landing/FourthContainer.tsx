import { IContainer, IFourthContainer } from "../../types";

import styled from "styled-components";

const FourthComponent = styled.div<IFourthContainer>`
  height: 800px;
  background-color: #121420;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
  grid-template-rows: 0.1fr 0.8fr 2fr 0.5fr 0.5fr;
  grid-template-areas:
    "titleDiv"
    "blockFirst blockSecond";

  .titleDiv {
    grid-area: titleDiv;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;

    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
    -ms-transition: 0.1s;
    -o-transition: 0.1s;
    transition: 0.1s;

    h1 {
      font-size: 4.5rem;
      color: #ffffffbe;
      text-align: center;
      font-family: "Josefin Sans", cursive;
    }
  }
  .titleDiv:hover {
    transition: transform 150ms background-color 0.5s ease color 0.5s ease;
    transform: scale(1.05);
    text-decoration: underline;
    text-decoration-color: #13222f;
  }
  .blockFirst {
    grid-area: blockFirst;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    .blockFirstDiv {
      height: 100%;
      width: 90%;

      h5 {
        line-height: 3;
        font-size: 1.2rem;
        font-weight: 400;
        color: #ffffffbe;
        text-align: left;
        font-family: "Josefin Sans", cursive;
      }
      h4 {
        line-height: 2;
        font-size: 2rem;
        font-weight: 600;
        color: #ffffffbe;
        text-align: left;
        font-family: "Josefin Sans", cursive;
      }
    }
  }
  .blockSecond {
    grid-area: blockSecond;
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 4;

    .roadBlock {
      display: flex;
      flex-direction: row;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
      -ms-transition: 0.1s;
      -o-transition: 0.1s;
      transition: 0.1s;

      .roadPercent {
        height: 8rem;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .roadPercentBlock {
          height: 4rem;
          width: 4rem;
          background-color: #ffffffbe;
          border-radius: 1.2rem;
          font-family: "Josefin Sans", cursive;

          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          h1 {
            font-size: 1.2rem;
            font-weight: 600;
          }
        }

        .percent0 {
          background-color: #ffffff;
        }

        .percent25 {
          background-color: #afe1f0;
        }

        .percent50 {
          background-color: #ff961b;
        }

        .percent75 {
          background-color: #8bc343;
        }

        .percent100 {
          background-color: #e65a7d;
        }
      }
      .roadText {
        height: 8rem;
        font-family: "Josefin Sans", cursive;
        color: #ffffffbe;
        display: flex;
        align-items: center;
        width: 80%;

        h1 {
          font-size: 1rem;
          font-weight: 200;
          line-height: 1.5;
          text-decoration: underline;
        }

        h2 {
          font-size: 0.8rem;
          font-weight: 100;
          line-height: 1.5;
        }
      }
    }

    .roadBlock:hover {
      transition: transform 150ms background-color 0.5s ease color 0.5s ease;
      transform: scale(1.05);
      background-color: #ff961b;
      border-radius: 1.5rem;
      .roadPercentBlock {
        h1 {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      .roadText {
        h1 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #121420;
          text-decoration: underline;
          width: 95%;
        }

        h2 {
          font-size: 1rem;
          font-weight: 400;
          color: #121420;
          width: 95%;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 0.2fr 2fr 2fr 0.2fr;
    .blockSecond {
      .roadBlock {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 600;
          }
          h2 {
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: 0.2fr 2fr 2fr 0.2fr;
    .blockSecond {
      .roadBlock {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 0.7rem;
            font-weight: 600;
          }

          h2 {
            font-size: 0.7em;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 0.2fr 3fr 3fr 0.2fr;
    .blockSecond {
      .roadBlock {
        .roadText {
          h1 {
            font-size: 0.8rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 0.7rem;
            font-weight: 600;
          }

          h2 {
            font-size: 0.7rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 950px) {
    height: 1100px;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 0.1fr 0.8fr 2fr 2fr 0.1fr;

    .titleDiv {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .blockFirst {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;

      h5 {
        margin: auto;
        line-height: 1.2;
        font-size: 1.2rem;
        font-weight: 400;
        color: #ffffffbe;
        text-align: left;
        font-family: "Josefin Sans", cursive;
      }
      h4 {
        margin: auto;
        line-height: 2;
        font-size: 2rem;
        font-weight: 600;
        color: #ffffffbe;
        text-align: left;
        font-family: "Josefin Sans", cursive;
      }
    }

    .blockSecond {
      grid-area: blockSecond;
      grid-row-start: 4;
      grid-row-end: 5;
      grid-column-start: 2;
      grid-column-end: 3;

      .roadBlock {
        .roadText {
          h1 {
            font-size: 1.2rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            font-size: 0.9rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            font-size: 1.1rem;
            font-weight: 600;
          }

          h2 {
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    height: 1400px;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    grid-template-rows: 0.1fr 0.8fr 1fr 1fr 0.1fr;

    .blockSecond {
      .roadBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;

        .roadText {
          h1 {
            margin: auto;
            text-align: center;
            font-size: 1rem;
            font-weight: 200;
            line-height: 1.5;
            text-decoration: underline;
          }

          h2 {
            margin: auto;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 100;
            line-height: 1.5;
          }
        }
      }
      .roadBlock:hover {
        .roadText {
          h1 {
            margin: auto;
            text-align: center;
            font-size: 1.1rem;
            font-weight: 600;
          }

          h2 {
            margin: auto;
            text-align: center;
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    height: 1500px;
  }
`;
interface PropsFourth {
  data: IContainer;
}

const FourthContainer: React.FC<PropsFourth> = (props) => {
  return (
    <FourthComponent className="Fourth-Component">
      <div className={"titleDiv"}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={"blockFirst"}>
        <div className={"blockFirstDiv"}>
          <h5>{props.data.slogan}</h5>
          <h4>{props.data.subtitle}</h4>
        </div>
      </div>
      <div className={"blockSecond"}>
        {props.data["pictures"].map((value: any) => (
          <div className={"roadBlock"} key={value.id + "block"}>
            <div
              className={`roadPercent ${value.id}`}
              key={value.id + "percent"}
            >
              <div
                className={`roadPercentBlock percent${value.title}`}
                key={value.id + "percentblock"}
              >
                <h1>{value.title}%</h1>
              </div>
            </div>
            <div className={`roadText ${value.id}`} key={value.id + "road"}>
              <div
                className={`roadTextBlock ${value.id}`}
                key={value.id + "roadblock"}
              >
                <h1>{value.subtitle}</h1>
                <h2>{value.description}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FourthComponent>
  );
};

export default FourthContainer;
