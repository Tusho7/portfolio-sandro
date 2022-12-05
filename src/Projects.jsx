import React from "react";
import styled from "styled-components";
import data from "./Data.json";

function Projects() {
  return (
    <Main>
      <Line />
      <RingsImg src="./Images/Logos/pattern-rings.svg" />
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
        {data.projects.map((project) => (
          <div key={project.title} className="main-container">
            <div className="modal" />
            <Img src={project.img} />
            <div className="content-details">
              <ViewMyProjectCode href={project.viewProjectLive} target="_blank">
                VIEW PROJECT
              </ViewMyProjectCode>
              <ViewMyProjectCode href={project.viewProjectCode} target="_blank">
                VIEW CODE
              </ViewMyProjectCode>
            </div>

            <Title>{project.title}</Title>
            <MadeWith>
              <p>{project.madeWith.title}</p>
              <p>{project.madeWith.secondTitle}</p>
              <p>{project.madeWith.thirdTitle}</p>
            </MadeWith>

            <ViewProject>
              <ViewMyProjectCode href={project.viewProjectLive} target="_blank">
                <Text>VIEW PROJECT</Text>
              </ViewMyProjectCode>
              <ViewMyProjectCode href={project.viewProjectCode} target="_blank">
                <Text>VIEW CODE</Text>
              </ViewMyProjectCode>
            </ViewProject>
          </div>
        ))}
      </ProjectsSection>
      <ViewAllMyProjects>
        <SeeProjectsLink
          href="https://github.com/Tusho7?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <ViewAllMyProjectsHere>
            View All My Projects Here
          </ViewAllMyProjectsHere>
        </SeeProjectsLink>
      </ViewAllMyProjects>
    </Main>
  );
}

export default Projects;

const Main = styled.div`
  position: relative;
`;

const Line = styled.hr`
  margin-top: 67px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const RingsImg = styled.img`
  position: absolute;
  left: 160px;
  top: -70px;
  @media (min-width: 768px) {
    top: -200px;
    left: 550px;
  }
  @media (min-width: 1440px) {
    left: 1000px;
  }
`;

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
    margin-top: 0px;
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
    color: #4ee1a0;
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

const ViewAllMyProjects = styled.div`
  width: 100%;
  margin: auto;
  padding-bottom: 80px;
  @media (min-width: 768px) {
    padding-bottom: 100px;
  }
`;

const SeeProjectsLink = styled.a`
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #4ee1a0;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  &:hover {
    color: #4ee1a0;
    cursor: pointer;
  }
`;

const ViewAllMyProjectsHere = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 2.28571px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  &:hover {
    color: #4ee1a0;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const ViewMyProjectCode = styled.a`
  color: #ffffff;
  @media (min-width: 1440px) {
    color: #4ee1a0;
    text-underline-offset: 10px;
  }
`;

const Text = styled.p`
  text-decoration: underline;
  text-decoration-color: #4ee1a0;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
`;
