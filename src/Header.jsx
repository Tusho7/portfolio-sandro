import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <MobileView>
        <header className="header">
          <HeaderTitle>
            <HeaderMyName>Sandro Tushurashvili</HeaderMyName>
            <div>
              <HeaderIcons>
                <a
                  href="https://github.com/Tusho7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Img src="/Images/Icons/icon-github.svg" alt="github" />
                </a>
                <Img
                  src="./Images/Icons/icon-frontend-mentor.svg"
                  alt="front-end-mentor"
                />
                <a
                  href="https://www.linkedin.com/in/sandro-tushurashvili/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Img src="./Images/Icons/icon-linkedin.svg" alt="linkedin" />
                </a>
                <a
                  href="https://twitter.com/SandroTusho"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Img src="./Images/Icons/icon-twitter.svg" alt="twitter" />
                </a>
              </HeaderIcons>
              <ProfileImg src="./Images/profile.jpg" alt="profile" />
            </div>
          </HeaderTitle>
          <RingsImg src="./Images/Logos/pattern-rings.svg" alt="pattern" />
          <PatternImg src="./Images/Logos/pattern-circle.svg" alt="pattern" />

          <HeaderText>
            <AboutMe>
              Nice to meet you!
              {" "}
              <MyName>
                I’m
                {' '}
                <Name>Sandro Tushurashvili.</Name>
              </MyName>
            </AboutMe>
            <Text>
              I'm a front-end developer and I like to build web apps that users
              love
            </Text>
          </HeaderText>
          <Contact>
            <ContactMe>Contact Me</ContactMe>
          </Contact>
        </header>
        <Line>
          <hr />
        </Line>
      </MobileView>

      <TabletView>
        <TabletViewTextContainer>
          <HeaderMyName>Sandro Tushurashvili</HeaderMyName>
          <AboutMe>
            Nice to meet you!
            {" "}
            <MyName>
              I’m
              {' '}
              <Name>Sandro Tushurashvili.</Name>
            </MyName>
          </AboutMe>
          <Text>
            I'm a front-end developer and I like to build web apps that users
            love
          </Text>
          <RingsImg src="./Images/Logos/pattern-rings.svg" alt="pattern" />

          <Contact>
            <ContactMe
              href="https://www.linkedin.com/in/sandro-tushurashvili/"
              target="_blank"
            >
              Contact Me
            </ContactMe>
          </Contact>
        </TabletViewTextContainer>

        <TabletViewIconsAndProfile>
          <HeaderIcons>
            <a
              href="https://github.com/Tusho7"
              target="_blank"
              rel="noreferrer"
            >
              <Img src="/Images/Icons/icon-github.svg" alt="github" />
            </a>
            <Img
              src="./Images/Icons/icon-frontend-mentor.svg"
              alt="front-end-mentor"
            />
            <a
              href="https://www.linkedin.com/in/sandro-tushurashvili/"
              target="_blank"
              rel="noreferrer"
            >
              <Img src="./Images/Icons/icon-linkedin.svg" alt="linkedin" />
            </a>
            <a
              href="https://twitter.com/SandroTusho"
              target="_blank"
              rel="noreferrer"
            >
              <Img src="./Images/Icons/icon-twitter.svg" alt="twitter" />
            </a>
          </HeaderIcons>
          <ProfileImg src="./Images/profile.jpg" alt="profile" />
          <PatternImg src="./Images/Logos/pattern-circle.svg" alt="pattern" />
        </TabletViewIconsAndProfile>
      </TabletView>
      <TabletLine>
        <hr />
      </TabletLine>
    </div>
  );
}

export default Header;

const MobileView = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderTitle = styled.div`
  color: #ffffff;
  margin: 20px auto 0px auto;
  width: 51%;
  background: linear-gradient(
    180deg,
    rgba(36, 36, 36, 0.0001) -10.35%,
    #242424 90%
  );
`;

const HeaderMyName = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.333333px;
  color: #ffffff;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25.6px;
  margin-top: 20px;
  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    margin-top: 44px;
  }
`;

const Img = styled.img`
  :hover {
    filter: invert(65%) sepia(100%) hue-rotate(200deg) saturate(0%);
    cursor: pointer;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  margin-top: 50px;
  border-radius: 10px;
  @media (min-width: 768px) {
    margin-top: 134px;
    width: 494px;
    border-radius: 0px;
  }
`;

const RingsImg = styled.img`
  position: absolute;
  left: -340px;
  top: 140px;
  z-index: -1;
  @media (min-width: 768px) {
    top: 100px;
    left: -300px;
    border-radius: 0px;
  }
  @media (min-width: 1440px) {
    left: -200px;
  }
`;

const PatternImg = styled.img`
  position: absolute;
  left: 300px;
  top: 225px;
  @media (min-width: 768px) {
    left: 275px;
    top: 490px;
    z-index: 1;
  }
  @media (min-width: 1440px) {
    left: -60px;
    top: 575px;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const AboutMe = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -1.13636px;
  color: #ffffff;
  @media (min-width: 768px) {
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -2.04545px;
    width: 85%;
    text-align: left;
    z-index: 1;
  }
  @media (min-width: 1440px) {
    width: 100%;
    font-size: 88px;
    line-height: 88px;
    letter-spacing: -2.5px;
  }
`;

const MyName = styled.span`
  font-size: 30px;
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

const Name = styled.span`
  text-decoration: underline;
  text-decoration-color: #4ee1a0;
  text-decoration-thickness: 4px;
  text-underline-offset: 5px;
`;

const Text = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #d9d9d9;
  margin-top: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    text-align: left;
    width: 90%;
    margin-top: 66px;
  }
  @media (min-width: 1440px) {
    margin-top: 43px;
  }
`;

const Contact = styled.div`
  width: 34%;
  margin: 24px auto 0px auto;
  @media (min-width: 768px) {
    margin: 34px auto 0px 0px;
  }
  @media (min-width: 1440px) {
    margin: 66px auto 0px 0px;
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
  text-decoration-color: #4ee1a0;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  &:hover {
    color: #4ee1a0;
    cursor: pointer;
  }
`;

const Line = styled.div`
  margin-top: 80px;
`;

const TabletView = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const TabletViewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
  @media (min-width: 1440px) {
    margin-top: 39px;
  }
`;
const TabletViewIconsAndProfile = styled.div`
  @media (min-width: 768px) {
    background: linear-gradient(
      180deg,
      rgba(36, 36, 36, 0.0001) -10%,
      #242424 0%
    );
    transform: translateX(-60px);
  }
  @media (min-width: 1440px) {
    transform: translateX(0px);
  }
`;

const TabletLine = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin-top: 60px;
    display: block;
  }
  @media (min-width: 1440px) {
    margin-top: 65px;
  }
`;
