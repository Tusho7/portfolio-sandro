import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <div>
      <ProjectsTitles>
        <ProjectId>Projects</ProjectId>
        <ContactMe
          href="https://www.linkedin.com/in/sandro-tushurashvili/"
          target="_blank"
        >
          Contact me
        </ContactMe>
      </ProjectsTitles>

      <ProjectsSection>
        <div>
          <Img
            src="/Images/Projects/interactive-comments-section.jpg"
            alt="interactive-comments-section"
          />
          <Title>INTERACTIVE COMMENTS SECTION</Title>
          <MadeWith>
            <p>REACT</p>
            <p>STYLED COMPONENTS</p>
          </MadeWith>

          <ViewProject>
            <ViewMyProjectCode
              href="https://interactive-comments-section-nif5oois6-tusho7.vercel.app/"
              target="_blank"
            >
              VIEW PROJECT
            </ViewMyProjectCode>
            <ViewMyProjectCode
              href="https://github.com/Tusho7/interactive-comments-section"
              target="_blank"
            >
              VIEW CODE
            </ViewMyProjectCode>
          </ViewProject>
        </div>

        <div>
          <Img
            src="/Images/Projects/count-down-timer.jpg"
            alt="count-down-timer"
          />
          <Title>COUNT DOWN TIMER</Title>
          <MadeWith>
            <p>REACT</p>
          </MadeWith>

          <ViewProject>
            <ViewMyProjectCode
              href="https://count-down-timer-68dctfygq-tusho7.vercel.app/"
              target="_blank"
            >
              VIEW PROJECT
            </ViewMyProjectCode>
            <ViewMyProjectCode
              href="https://github.com/Tusho7/count-down-timer"
              target="_blank"
            >
              VIEW CODE
            </ViewMyProjectCode>
          </ViewProject>
        </div>

        <div>
          <Img
            src="/Images/Projects/single-page-design.jpg"
            alt="single-page-design"
          />
          <Title>SINGLE PAGE DESIGN</Title>
          <MadeWith>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </MadeWith>

          <ViewProject>
            <ViewMyProjectCode
              href="https://tusho7.github.io/single-page-design/"
              target="_blank"
            >
              VIEW PROJECT
            </ViewMyProjectCode>
            <ViewMyProjectCode
              href="https://github.com/Tusho7/single-page-design"
              target="_blank"
            >
              VIEW CODE
            </ViewMyProjectCode>
          </ViewProject>
        </div>

        <div>
          <Img
            src="/Images/Projects/interactive-pricing-component.jpg"
            alt="interactive-pricing-component"
          />
          <Title>INTERACTIVE PIRICING COMPONENT</Title>
          <MadeWith>
            <p>HTML</p>
            <p>CSS</p>
          </MadeWith>

          <ViewProject>
            <ViewMyProjectCode
              href="https://tusho7.github.io/interactive-pricing-component/"
              target="_blank"
            >
              VIEW PROJECT
            </ViewMyProjectCode>
            <ViewMyProjectCode
              href="https://github.com/Tusho7/interactive-pricing-component"
              target="_blank"
            >
              VIEW CODE
            </ViewMyProjectCode>
          </ViewProject>
        </div>

        <div>
          <Img src="/Images/Projects/tic-tac-toe.jpg" alt="tic-tac-toe" />
          <Title>TIC TAC TOE</Title>
          <MadeWith>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </MadeWith>

          <ViewProject>
            <ViewMyProjectCode
              href="https://tusho7.github.io/tic-tac-toe/"
              target="_blank"
            >
              VIEW PROJECT
            </ViewMyProjectCode>
            <ViewMyProjectCode
              href="https://github.com/Tusho7/tic-tac-toe"
              target="_blank"
            >
              VIEW CODE
            </ViewMyProjectCode>
          </ViewProject>
        </div>

        <div>
          <Img src="/Images/Projects/tip-calculator.jpg" alt="tip-calculator" />
          <Title>TIP CALCULATOR</Title>
          <MadeWith>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </MadeWith>

          <ViewProject>
            <ViewMyProjectCode
              href="https://tusho7.github.io/tip-calculator-app/"
              target="_blank"
            >
              VIEW PROJECT
            </ViewMyProjectCode>
            <ViewMyProjectCode
              href="https://github.com/Tusho7/tip-calculator-app"
              target="_blank"
            >
              VIEW CODE
            </ViewMyProjectCode>
          </ViewProject>
        </div>
      </ProjectsSection>
    </div>
  );
}

export default Projects;

const ProjectsTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  align-items: flex-start;
  @media (min-width: 768px) {
    align-items: center;
    margin-top: 140px;
  }
`;

const ProjectsSection = styled.div`
  padding-bottom: 80px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 20px;
    padding-bottom: 100px;
  }
  @media (min-width: 1440px) {
    column-gap: 30px;
  }
`;

const Img = styled.img`
  width: 345px;
  height: 253px;
  margin-top: 40px;
  @media (min-width: 1440px) {
    width: 540px;
    height: 400px;
    &:hover {
      cursor: pointer;
      background: #000000;
      mix-blend-mode: normal;
      opacity: 0.75;
    }
  }
`;

const ProjectId = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -1.13636px;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -2.04545px;
  }
  @media (min-width: 1440px) {
    font-size: 88px;
    line-height: 88px;
    letter-spacing: -2.5px;
  }
`;
const ContactMe = styled.a`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 2.28571px;
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 15px;
  text-decoration-color: #4ee1a0;
  :hover {
    cursor: pointer;
  }
`;

const Title = styled.p`
  margin-top: 20px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const MadeWith = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 8px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #d9d9d9;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const ViewProject = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 20px;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 2.28571px;
  color: #ffffff;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-color: #4ee1a0;
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

const ViewMyProjectCode = styled.a`
  color: #ffffff;
`;
