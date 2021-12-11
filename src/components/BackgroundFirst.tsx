import BackGroundFirst from "../svgs/BackGroundFirst";
import React from "react";
import styled from "styled-components";

const BackGroundComponent = styled.div``;

export const BackGroundContainer: React.FC = () => {
  return (
    <BackGroundComponent>
      <BackGroundFirst props={{}}/>
    </BackGroundComponent>
  );
};

export default BackGroundContainer;
