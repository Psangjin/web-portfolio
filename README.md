# web-portfolio

React로 만든 **개인 포트폴리오**입니다.  
프로젝트별 **데모 영상**과 핵심 설명을 한 페이지에서 빠르게 볼 수 있도록 구성했습니다.

> 배포 주소(예정): `https://Psangjin.github.io/web-portfolio/`

---

## 📌 프로젝트 개요

| 프로젝트 | 한 줄 설명 | 영상 파일 | 기술 스택 | 링크 |
|---|---|---|---|---|
| 펀드플로우 (FundFlow) | 대량 업로드 데이터의 리포트 **시각화 데모** | `public/videos/pf1.mp4` | **React** | (추가 예정) |
| 비즈보드 (BizBoard) | 일정·업무를 **카드/보드**로 관리하는 내부용 보드 | `public/videos/BizBoard.mp4` | **Spring**, MyBatis, Oracle, React | [GitHub](https://github.com/Psangjin/BizBoard) |
| 목장바로 (FarmBaro) | 축산 **경매/직거래** 플랫폼 (MVP) | (추가 예정) | **React**, Spring, (SSE) | (추가 예정) |

> 📹 모든 영상은 `public/videos`에 두고 아래처럼 **`process.env.PUBLIC_URL`**로 참조합니다.
> ```jsx
> <video
>   src={process.env.PUBLIC_URL + '/videos/BizBoard.mp4'}
>   autoPlay muted loop playsInline preload="metadata"
> />
> ```

---

## 🧩 주요 기능

- **반응형 레이아웃**: 카드 형태의 프로젝트 섹션(영상 + 설명)
- **경량 배포**: GitHub Pages로 간단하게 호스팅
- **빠른 미디어 로딩**: `preload="metadata"`, `+faststart` 인코딩 가이드로 초기 로딩 최적화

---

## 🛠 기술 스택

- **Frontend**: React (Create React App), HTML/CSS  
- **배포**: GitHub Pages  
- **개발 도구**: VS Code, Node.js, npm  
- **미디어**: ffmpeg(웹 재생 최적화 인코딩)

---

## 📁 폴더 구조

```
web-portfolio
├─ public
│  ├─ index.html
│  └─ videos/              # 데모 영상(mp4/webm)
│     ├─ BizBoard.mp4
│     └─ pf1.mp4
└─ src
   ├─ App.js               # 섹션 구성
   ├─ App.css
   └─ ...
```

---

## ▶️ 로컬 실행

```bash
# 1) 의존성 설치 (프로젝트 루트에서)
npm install

# 2) 개발 서버 실행
npm start
# http://localhost:3000
```

---

## 🚀 배포 (GitHub Pages)

> `package.json`에 `homepage`, `predeploy`, `deploy` 스크립트가 설정되어 있다는 전제입니다.

```bash
# 1) 빌드 & 배포
npm run deploy
```

- GitHub Pages는 보통 **서브경로**(`/<repoName>/`)로 서비스됩니다.  
  정적 자산은 반드시 `process.env.PUBLIC_URL + '/videos/...'` 처럼 참조하세요.  
- 배포 후 경로 예:
  - `https://Psangjin.github.io/web-portfolio/videos/BizBoard.mp4`

---

## 🎞 영상 추가/교체 가이드

1. `public/videos/`에 **mp4(H.264)** 또는 **webm** 업로드  
   - 파일명은 **영문 소문자 권장**(공백/한글 지양)  
   - 용량 **20–40MB 권장**(단일 파일 100MB↑ Push 제한)
2. 컴포넌트 경로 수정
   ```jsx
   <video
     src={process.env.PUBLIC_URL + '/videos/파일명.mp4'}
     autoPlay muted loop playsInline preload="metadata"
   />
   ```
3. 커밋 & 배포
   ```bash
   git add .
   git commit -m "Add video: 파일명.mp4"
   npm run deploy
   ```

> **ffmpeg 예시(웹 스트리밍 최적화)**  
> ```bash
> ffmpeg -i input.mkv -vcodec libx264 -acodec aac -movflags +faststart -crf 23 output.mp4
> ```

---

## ✅ 체크리스트

- [ ] `public/videos`에 mp4 업로드 (대/소문자 정확히)  
- [ ] `process.env.PUBLIC_URL`로 경로 지정  
- [ ] 로컬에서 `http://localhost:3000/videos/파일명.mp4` 열리나 확인  
- [ ] `npm run deploy` 후 GitHub Pages에서 최종 점검  
- [ ] 캐시 새로고침(Ctrl+F5)으로 갱신 확인

---

## 📬 연락

- GitHub: [@Psangjin](https://github.com/Psangjin)
