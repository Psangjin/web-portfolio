import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>sangjin's Portfolio</h1>

      <div className="port-container">
        <div className="port-video">
          <video src={"https://yong-jin.github.io/web-portfolio/videos/pf1.mkv"} autoPlay muted loop></video>
        </div>
        <div className="port-info">
          <h3>주제 : 펀드플로우</h3>
          <p>일정 : </p>
          <p>사용기술 : </p>
          <p>설명 : </p>
          <p>github Link : <a href="https://github.com/Psangjin/FundFlow.git" target="_blank" rel="noreferrer">
  https://github.com/Psangjin/FundFlow
</a></p>
        </div>
      </div>

      <div className="port-container">
        <div className="port-video">
          <video src={process.env.PUBLIC_URL + '/videos/BizBoard.mp4'} autoPlay muted loop></video>
        </div>
        <div className="port-info">
          <h3>주제 : 비즈보드</h3>
          <p>일정 : </p>
          <p>사용기술 : </p>
          <p>설명 : </p>
          <p>github Link : <a href="https://github.com/Psangjin/BizBoard" target="_blank" rel="noreferrer">
  https://github.com/Psangjin/BizBoard
</a></p>
        </div>
      </div>

      <div className="port-container">
        <div className="port-video">
          <video src={"https://yong-jin.github.io/web-portfolio/videos/pf1.mkv"} autoPlay muted loop></video>
        </div>
        <div className="port-info">
          <h3>주제 : 목장바로</h3>
          <p>일정 : </p>
          <p>사용기술 : </p>
          <p>설명 : </p>
          <p>github Link : <a href="https://github.com/Psangjin/farm-baro.git" target="_blank" rel="noreferrer">
  https://github.com/Psangjin/farm-baro
</a></p>
        </div>
      </div>

    </div>
  );
}

export default App;
