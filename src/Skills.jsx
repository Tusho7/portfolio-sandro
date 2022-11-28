import React from "react";
import styled from "styled-components";

function Skills() {
  return (
    <div>
      <div>
        <HtmlDiv>
          <Title>HTML</Title>
        </HtmlDiv>

        <CssDiv>
          <Title>CSS</Title>
        </CssDiv>

        <JavascriptDiv>
          <Title>JAVASCRIPT</Title>
        </JavascriptDiv>

        <SassDiv>
          <Title>SASS</Title>
        </SassDiv>

        <ReactDiv>
          <Title>REACT</Title>
        </ReactDiv>
      </div>

      <RingsImg src="./Images/Logos/pattern-rings.svg" />

      <Line></Line>
    </div>
  );
}

export default Skills;

const HtmlDiv = styled.div`
  margin-top: 40px;
`;

const Title = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  letter-spacing: -1px;
`;

const CssDiv = styled.div`
  margin-top: 24px;
`;

const JavascriptDiv = styled.div`
  margin-top: 24px;
`;
const SassDiv = styled.div`
  margin-top: 24px;
`;
const ReactDiv = styled.div`
  margin-top: 24px;
`;

const Line = styled.hr`
  margin-top: 40px;
`;

const RingsImg = styled.img`
  position: absolute;
  left: 160px;
  top: 1000px;
`;
