import React from "react";
import styled from "styled-components";
import data from "./Data.json";

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
        {data.projects.map((project) => (
          <div key={project.title}>
            <Img src={project.img} />
            <Title>{project.title}</Title>
            <MadeWith>
              <p>{project.madeWith.title}</p>
              <p>{project.madeWith.secondTitle}</p>
              <p>{project.madeWith.thirdTitle}</p>
            </MadeWith>

            <ViewProject>
              <ViewMyProjectCode href={project.viewProjectLive} target="_blank">
                VIEW PROJECT
              </ViewMyProjectCode>
              <ViewMyProjectCode href={project.viewProjectCode} target="_blank">
                VIEW CODE
              </ViewMyProjectCode>
            </ViewProject>
          </div>
        ))}
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
`;

const ProjectsSection = styled.div`
  padding-bottom: 80px;
`;

const Img = styled.img`
  width: 345px;
  height: 253px;
  margin-top: 40px;
`;

const ProjectId = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -1.13636px;
  color: #ffffff;
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
`;

const ViewMyProjectCode = styled.a`
  color: #ffffff;
`;
