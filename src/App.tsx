import React from "react";
import styled from "styled-components";
import { VscDebugStart, VscDebugStop } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
function App() {
  return (
    <Main>
      <h1>음성으로 ChatGPT를 사용해보세요!</h1>
      <div className="explain">
        <h2>사용 방법</h2>
        <span>1. 시작 버튼을 누르고 질문을 한다.</span>
        <span>2. chatGPT가 로딩하는동안 기다린다.</span>
        <span>3. 종료하고 싶다면, X 버튼을 누른다.</span>
      </div>
      <div>
        <div className="btn-container">
          <Button>
            <VscDebugStart />
          </Button>
          <Button>
            <VscDebugStop />
          </Button>
          <Button className="reset">
            <RxCross1 />
          </Button>
        </div>
        {/* <div className="loading_spinner_box">
          <div className="loading_spinner" />
        </div> */}
      </div>
      <div className="div-con">
        <Label>내 질문</Label>
        <Answer>
          <span></span>
        </Answer>
      </div>
      <div className="div-con">
        <Label>AI 답변</Label>
        <Answer>
          <span></span>
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
`;

const Button = styled.button`
  width: 60px;
  height: 50px;
  border: none;
  color: #61d9fb;
  font-size: 30px;
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
  /* text-align: center; */
  span {
    border: 1px solid white;
    padding: 3rem;
    /* white-space: normal; */
    word-break: break-all;
    /* word-wrap: break-word; */
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

export default App;
