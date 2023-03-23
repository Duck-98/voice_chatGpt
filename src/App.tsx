import React, { useState } from "react";
import styled from "styled-components";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ChatGPT from "./components/chatGpt";
import { VscDebugStart, VscDebugStop } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Main>
      <h1>음성으로 ChatGPT를 사용해보세요!</h1>
      <div className="explain">
        <h2>사용 방법</h2>
        <span>1. 시작 버튼을 누르고 질문을 한다.</span>
        <span>2. chatGPT가 로딩하는동안 기다린다.</span>
        <span>3. 종료하고 싶다면, X 버튼을 누른다.</span>
        <span>
          Tip. 로딩이 되고 있을 때는 시작 버튼을 누르지 말고 기다려주세요.
        </span>
      </div>
      <div>
        <div className="btn-container">
          {listening ? (
            <div className="circle-container">
              <Circle />
            </div>
          ) : (
            <StartButton onClick={() => SpeechRecognition.startListening()}>
              <VscDebugStart />
            </StartButton>
          )}

          <Button>
            <VscDebugStop onClick={() => SpeechRecognition.stopListening()} />
          </Button>
          <ChatGPT
            transcript={transcript}
            listening={listening}
            resetTranscript={resetTranscript}
            setLoading={setLoading}
            message={message}
            setMessage={setMessage}
          />
        </div>
        {loading && (
          <>
            <div className="loading_spinner_box">
              <div className="loading_spinner" />
            </div>
          </>
        )}
      </div>
      <div className="div-con">
        <Label>내 질문</Label>
        <Answer>
          <span>{transcript}</span>
        </Answer>
      </div>
      <div className="div-con">
        <Label>AI 답변</Label>
        <Answer>
          <span>{message}</span>
        </Answer>
      </div>
      <div>
        <StyledLink to="https://github.com/Duck-98">
          <span>Copyright © 2023 Duck-98</span>
          <BsGithub />
        </StyledLink>
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  .explain {
    display: flex;
    flex-direction: column;
  }
  .loading_spinner_box {
    display: flex;
    justify-content: center;
    .loading_spinner {
      width: 60px;
      height: 60px;
      border: 4px solid #121212;
      border-top: 2px solid #f4f5f6;
      border-radius: 50%;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;

      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
  .explain {
    // 설명란
    h2 {
      text-align: center;
    }
    color: white;
    font-size: 22px;
    line-height: 153%;
    letter-spacing: -0.4px;
  }
  .btn-container {
    //버튼
    margin: 40px 0 30px 0;
    display: flex;
    justify-content: center;
  }
  .div-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  .circle-container {
    display: flex;
    align-items: center;
    width: 60px;
    height: 50px;
    justify-content: center;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 50px;
  border: none;
  color: #61d9fb;
  font-size: 30px;
`;

const StartButton = styled.button`
  width: 60px;
  height: 50px;
  border: none;
  font-size: 30px;
  color: #61d9fb;
`;

const Label = styled.label`
  color: white;
  font-size: 25px;
  line-height: 153%;
  letter-spacing: -0.4px;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    border: 1px solid white;
    padding: 3rem;
    word-break: break-all;
    width: 50%;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 153%;
    letter-spacing: -0.4px;
  }
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  color: white;
  span {
    margin-right: 10px;
  }
  &:visited {
    color: white;
  }
`;

const Circle = styled.div`
  width: 22.5px;
  height: 22.5px;
  border-radius: 50%;
  border: none;
  background: red;
`;

export default App;
