import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>sangjin's Portfolio</h1>

     {/* 펀드플로우 */}
      <div className="port-container">
        <div className="port-video">
          <video
            src={process.env.PUBLIC_URL + '/videos/FundFlow.mp4'}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="펀드플로우 시연 영상"
          />
        </div>
        <div className="port-info">
          <h3>주제 : 펀드플로우</h3>
          <p>일정 : 2025.07(팀 FE)</p>
          <p>사용기술 : React, React Router, Axios</p>
          <p>설명 : 펀딩 데이터 업로드 후 리포트 시각화 데모. 렌더/청크 최적화로 체감 지연을 개선(백엔드 비연동)</p>
          <p>
            github Link :{' '}
            <a
              href="https://github.com/Psangjin/FundFlow"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Psangjin/FundFlow
            </a>
          </p>
        </div>
      </div>

     {/* 비즈보드 */}
      <div className="port-container">
        <div className="port-video">
          <video
            src={process.env.PUBLIC_URL + '/videos/BizBoard.mp4'}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="비즈보드 시연 영상"
          />
        </div>
        <div className="port-info">
          <h3>주제 : 비즈보드</h3>
          <p>일정 :  2025.08 (팀 프로젝트)</p>
          <p>사용기술 : Spring MVC, MyBatis, Oracle, JSP/JSTL, Axios, jQuery, Bootstrap</p>
          <p>설명 : 프로젝트/일정/담당자 관리 보드. 회원·권한, 입력검증, 전역 예외 표준화로 CRUD 흐름 안정화.</p>          
          <p>
            github Link :{' '}
            <a
              href="https://github.com/Psangjin/BizBoard"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Psangjin/BizBoard
            </a>
          </p>
        </div>
      </div>

    {/* 목장바로 */}
      <div className="port-container">
        <div className="port-video">
          <video
            src={process.env.PUBLIC_URL + '/videos/FarmBaro.mp4'}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="목장바로 시연 영상"
          />
        </div>
        <div className="port-info">
          <h3>주제 : 목장바로</h3>
          <p>일정 : 2025.09 (팀 프로젝트)</p>
          <p>사용기술 : Spring Boot, MyBatis, Oracle, REST API, React, Redux Toolkit, Axios</p>
          <p>설명 : 축산 직거래·경매 플랫폼. 가입 위저드/OTP, 등급·이력 기반 화면, 시세 스냅샷 등 도메인 로직 구현</p>
          <p>
            github Link :{' '}
            <a
              href="https://github.com/Psangjin/farm-baro"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Psangjin/farm-baro
            </a>
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;
