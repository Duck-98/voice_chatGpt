import React from "react";
import styled from "styled-components";
import { VscDebugStart, VscDebugStop } from "react-icons/vsc";
import { GrPowerReset } from "react-icons/gr";
function App() {
  return (
    <Main>
      <h1>음성으로 ChatGPT를 사용해보세요!</h1>
      <div>
        <div className="btn-container">
          <button>
            <VscDebugStart />
          </button>
          <button>
            <VscDebugStop />
          </button>
          <button>
            <GrPowerReset />
          </button>
        </div>
        <div className="explain">
          <h2>사용 방법</h2>
          <span>1. 시작 버튼을 누르고 질문을 한다.</span>
          <span>2. chatGPT가 로딩하는동안 기다린다.</span>
          <span>종료하고 싶다면, 리셋버튼을 누른다.</span>
        </div>
        {/* <div className="loading_spinner_box">
          <div className="loading_spinner" />
        </div> */}
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
    margin-left: 3px;
    .loading_spinner {
      width: 11px;
      height: 11px;
      border: 1.5px solid #f4f5f6;
      border-top: 1.5px solid #121212;
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
`;

export default App;
