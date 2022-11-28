import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <div>
      <header>
        <HeaderTitle>
          <HeaderMyName>Sandro Tushurashvili</HeaderMyName>
          <HeaderIcons>
            <img src="/Images/Icons/icon-github.svg" />
            <img src="./Images/Icons/icon-frontend-mentor.svg" />
            <img src="./Images/Icons/icon-linkedin.svg" />
            <img src="./Images/Icons/icon-twitter.svg" />
          </HeaderIcons>
          <ProfileImg src="./Images/profile.jpg" />
        </HeaderTitle>
        <RingsImg src="./Images/Logos/pattern-rings.svg" />
        <PatternImg src="./Images/Logos/pattern-circle.svg" />

        <HeaderText>
          <AboutMe>
            Nice to meet you!
            {' '}
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
    </div>
  );
}

export default Header;

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
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25.6px;
  margin-top: 20px;
`;

const ProfileImg = styled.img`
  width: 100%;
  margin-top: 50px;
  border-radius: 10px;
`;

const RingsImg = styled.img`
  position: absolute;
  left: -340px;
  top: 140px;
  z-index: -1;
`;

const PatternImg = styled.img`
  position: absolute;
  left: 300px;
  top: 225px;
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
`;

const MyName = styled.span`
  font-size: 30px;
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
`;

const Contact = styled.div`
  width: 34%;
  margin: 24px auto 0px auto;
`;

const ContactMe = styled.span`
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
`;

const Line = styled.div`
  margin-top: 80px;
`;
