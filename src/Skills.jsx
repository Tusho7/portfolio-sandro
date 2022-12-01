import React from "react";
import styled from "styled-components";

function Skills() {
  return (
    <div>
      <Container>
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
      </Container>

      <RingsImg src="./Images/Logos/pattern-rings.svg" />

      <Line />
    </div>
  );
}

export default Skills;

const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 228px;
  }
`;

const HtmlDiv = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 52px;
  }
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
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const CssDiv = styled.div`
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 52px;
  }
`;

const JavascriptDiv = styled.div`
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 52px;
  }
`;
const SassDiv = styled.div`
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 52px;
  }
`;
const ReactDiv = styled.div`
  margin-top: 24px;
  @media (min-width: 768px) {
    margin-top: 52px;
  }
`;

const Line = styled.hr`
  margin-top: 40px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const RingsImg = styled.img`
  position: absolute;
  left: 160px;
  top: 1000px;
  @media (min-width: 768px) {
    top: 850px;
    left: 550px;
  }
`;
