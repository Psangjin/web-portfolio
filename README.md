# web-portfolio

React로 만든 **개인 포트폴리오**입니다.  
프로젝트별 **데모 영상**과 핵심 설명을 한 페이지에서 빠르게 확인할 수 있도록 구성했습니다.

- **Live**: https://psangjin.github.io/web-portfolio/  
- **Repo**: https://github.com/Psangjin/web-portfolio

---

## 📌 프로젝트 개요

| 프로젝트 | 한 줄 설명 | 영상 파일(배포 경로) | 기술 스택 | 링크 |
|---|---|---|---|---|
| 펀드플로우 (FundFlow) | 대량 업로드 데이터 리포트 **시각화 데모** | `/videos/FundFlow.mp4` | **React**, React Router, Axios | https://github.com/Psangjin/FundFlow |
| 비즈보드 (BizBoard) | 일정·업무를 **카드/보드**로 관리하는 내부용 보드 | `/videos/BizBoard.mp4` | **Spring**, MyBatis, Oracle, JSP, Axios, jQuery | https://github.com/Psangjin/BizBoard |
| 목장바로 (FarmBaro) | 축산 **경매/직거래** 플랫폼 (MVP) | `/videos/Farmbaro.mp4` | **Spring**, MyBatis, Oracle, REST API, **React**, Redux Toolkit, Axios | https://github.com/Psangjin/farm-baro |

> 📹 모든 영상은 `public/videos`에 두고 아래처럼 **`process.env.PUBLIC_URL`**로 참조합니다.
>
> ```jsx
> <video
>   src={process.env.PUBLIC_URL + '/videos/BizBoard.mp4'}
>   controls
>   playsInline
>   muted
>   preload="metadata"
> />
> ```
> ⚠️ GitHub Pages는 **대소문자 구분**을 합니다. 예: `Farmbaro.mp4`(b 소문자) → App.js에서도 동일하게 사용.

---

## 🧩 주요 기능

- **반응형 레이아웃**(영상 + 설명 카드)
- **경량 배포**: GitHub Pages
- **빠른 로딩**: `preload="metadata"`, H.264/AAC, `+faststart` 인코딩

---

## 🛠 기술 스택

- **Frontend**: React (Create React App), HTML/CSS  
- **배포**: GitHub Pages (`gh-pages`)  
- **개발 도구**: VS Code, Node.js, npm  
- **미디어**: HandBrake / ffmpeg(웹 최적화 인코딩)

---

## 📁 폴더 구조

```text
web-portfolio
├─ public
│  ├─ index.html
│  └─ videos/              # 데모 영상(mp4/webm)
│     ├─ BizBoard.mp4
│     ├─ FundFlow.mp4
│     └─ Farmbaro.mp4      # ← b 소문자 (대소문자 주의)
└─ src
   ├─ App.js               # 섹션 구성
   ├─ App.css
   └─ ...
