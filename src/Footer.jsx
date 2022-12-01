import styled from "styled-components";
import { useState } from "react";

function Footer() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    /* eslint-disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Sorry, invalid format here");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };
  return (
    <div>
      <FooterDivFirst>
        <div>
          <ContactMe>Contact</ContactMe>
          <FooterText>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </FooterText>
        </div>

        <MessageDiv>
          <Input type="text" placeholder="NAME" required />
          <Line />
          <Input
            type="email"
            placeholder="EMAIL"
            required
            value={message}
            onChange={handleChange}
          />
          {error && <ErrorLine style={{ color: "red" }} />}
          {error && (
            <ErrorMessage style={{ color: "red" }}>{error}</ErrorMessage>
          )}

          {!error && <Line />}
          <Input type="textarea" placeholder="MESSAGE" required />
          <Line />
          <RingsImg src="./Images/Logos/pattern-rings.svg" alt="pattern" />
          <SendMessage>SEND MESSAGE</SendMessage>
        </MessageDiv>
      </FooterDivFirst>
      <FooterDivSecond>
        <Line />
        <NameAndIcons>
          <MyName>Sandro Tushurashvili</MyName>
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
        </NameAndIcons>
      </FooterDivSecond>
    </div>
  );
}

export default Footer;

const FooterDivFirst = styled.div`
  background: #242424;
`;

const ContactMe = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -1.13636px;
  color: #ffffff;
  padding-top: 60px;
  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -2.04545px;
  }
`;
const FooterText = styled.p`
  width: 92%;
  margin: 20px auto 0px auto;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #d9d9d9;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 58%;
  }
`;

const MessageDiv = styled.div`
  color: white;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  @media (min-width: 768px) {
    width: 58%;
    margin: 48px auto 0px auto;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #242424;
  width: 100%;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.222222px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 16px;
  padding-left: 40px;
  margin-top: 32px;
  resize: none;

  &:first-child {
    margin-top: 0px;
  }
  &:nth-child(5) {
    z-index: 999;
    height: 80px;
    &::placeholder {
      transform: translateY(-3vh);
    }
  }
`;

const ErrorMessage = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.166667px;
  color: #ff6f5b;
  padding-top: 5px;
  padding-right: 10px;
`;

const ErrorLine = styled.hr`
  width: 95%;
  margin: auto;
  border: none;
  height: 2px;
  background-color: red;
`;

const Line = styled.hr`
  width: 95%;
  margin: auto;
`;

const RingsImg = styled.img`
  position: absolute;
  right: 200px;
  top: 180px;
  @media (min-width: 768px) {
    right: 435px;
    top: 260px;
  }
`;

const SendMessage = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  margin-top: 32px;
  letter-spacing: 2.28571px;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #4ee1a0;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  margin-right: 5px;
  &:hover {
    color: #4ee1a0;
    cursor: pointer;
  }
`;

const FooterDivSecond = styled.div`
  padding-bottom: 60px;
  padding-top: 87px;
  background: #242424;
  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 40px;
  }
`;

const NameAndIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 39px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 95%;
    margin: 30px auto 0px auto;
  }
`;

const MyName = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.333333px;
  color: #ffffff;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.444444px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25.6px;
  margin-top: 20px;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

const Img = styled.img`
  :hover {
    filter: blur(5px);
    cursor: pointer;
  }
`;
