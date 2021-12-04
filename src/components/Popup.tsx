import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

interface IPopUp {
  display: string;
}

const PopUpContainer = styled.div<IPopUp>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  width: 100%;
  cursor: pointer;
  -webkit-transition: 0.15s;
  -moz-transition: 0.15s;
  -ms-transition: 0.15s;
  -o-transition: 0.15s;
  transition: 0.55s;
  animation: fadeIn 0.5s;
  transform: translateY(${(props) => props.display});

  .card {
    backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
    margin-top: 19rem;
    border: 2px solid #fff;
    border-radius: 2rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
    height: 15rem;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-transition: 0.15s;
    -moz-transition: 0.15s;
    -ms-transition: 0.15s;
    -o-transition: 0.15s;
    transition: 0.5s;

    .card_text {
      background-color: rgba(255, 255, 255, 0.3);
      -webkit-transition: 0.15s;
      -moz-transition: 0.15s;
      -ms-transition: 0.15s;
      -o-transition: 0.15s;
      transition: 0.5s;
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 52;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      animation: fadeIn 0.5s;

      span {
        -webkit-transition: 0.15s;
        -moz-transition: 0.15s;
        -ms-transition: 0.15s;
        -o-transition: 0.15s;
        transition: 0.5s;
        margin: 10px;
        width: 80%;
        line-height: 1.5;
        font-family: "Fredoka One", normal;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
      }
    }
  }

  .card:hover {
    background-color: red;
    color: white;
    transform: rotate(2deg) scale(1.1);
    -webkit-transition: 0.15s;
    -moz-transition: 0.15s;
    -ms-transition: 0.15s;
    -o-transition: 0.15s;
    transition: 0.15s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    span {
      -webkit-transition: 0.15s;
      -moz-transition: 0.15s;
      -ms-transition: 0.15s;
      -o-transition: 0.15s;
      transition: 0.5s;
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 1500px) {
    .card {
      margin-top: 17rem;
      .card_text {
        span {
          font-size: 1.1rem;
        }
      }
    }
    .card:hover {
      span {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .card {
      .card_text {
        span {
          font-size: 0.9rem;
        }
      }
    }
    .card:hover {
      span {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .card {
      margin-top: 10rem;

      .card_text {
        span {
          font-size: 0.8rem;
        }
      }
    }
    .card:hover {
      span {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .card {
      margin-top: 9rem;
    }
  }
  @media screen and (max-width: 500px) {
    .card {
      margin-top: 6rem;
    }
  }
  @media screen and (max-width: 400px) {
    .card {
      margin-top: 5rem;
    }
  }
`;

const first_slogan = "🎄 Cozy Home Pre-Sale Date: 14th of December 2021 🎄";

const Popup: React.FC = () => {
  const [display, setDisplay] = useState<string>("0px");

  return (
    <motion.div className={"holder"}>
      <PopUpContainer display={display}>
        <div onClick={() => setDisplay("-900px")} className="card">
          <div className="card_text">
            <span>{first_slogan}</span>
            <span>🔥 We have many suprise giveaways! Check Them Out! 🔥</span>
            <span>{"🎄 Cozy Home Sale Date: 16th of December 2021 🎄"}</span>
          </div>
        </div>
      </PopUpContainer>
    </motion.div>
  );
};

export default Popup;
