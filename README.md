# CodePlat(2021.01 - 2021.2)

![plat-logo](https://user-images.githubusercontent.com/52441478/109408651-b9a8bf80-79ce-11eb-97d5-2eb50bf0712c.png)

<br>

## 1. Project Summary

CodePlat은 2명의 팀원이 겨울방학 약 50여일 간 개발한 사이드 프로젝트로, 학생, 직장인, 프리랜서, 디자이너 등에게 프로젝트 혹은 스터디 구인, 참여 및 커뮤니티 기능을 제공하는 서비스 플랫폼입니다. 사용자는 스터디 및 프로젝트 모집, 구인 뿐 아니라 커뮤니티 및 채팅 기능을 활용하여 다른 사용자와의 원활한 교류를 할 수 있습니다.

<br>

## 2. Project target

현직 개발자 뿐 아니라 디자이너, 학생도 공개적으로 개발관련 스터디나 프로젝트에 참여하거나 모집할 수 있도록 프로젝트 사용자 타겟을 설정하였습니다.

<br>

## 3. Main features

### 3.1 Authentication

![image](https://user-images.githubusercontent.com/52441478/109410492-748c8980-79de-11eb-8be9-d629b8e851fa.png)

![image](https://user-images.githubusercontent.com/52441478/109410540-cc2af500-79de-11eb-903b-f80d0c1c0863.png)

로컬 회원가입 뿐 아니라 소셜 회원가입도 지원하여 사용자의 편의성을 증대하였습니다. 또한 비밀번호 찾기 및 변경기능을 제공하고, 이메일 인증 시스템을 제공하여 유연한 사용자 정보 관리를 할 수 있도록 노력하였습니다. 회원 인증 기능은 firebase의 인증 모듈 등과 같은 별도의 툴 없이 프론트와 백에서 직접 유효성 검증 로직을 구성하여 개발하였습니다.

<br>

### 3.2 CRUD

#### 3.2.1 Create & Read

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/52441478/109411483-c97fce00-79e5-11eb-99f3-74db9954966a.gif)

quill editor 라이브러리를 적용하여 사용자가 작성한 코드 신택스 하이라이팅 기능을 추가하였습니다. 또한 사용자는 프로젝트 특성에 맞게 기술을 선정할 수 있고, 원하는 파일을 업로드할 수도 있습니다.
인피니트 스크롤링 로직을 구현하여 별도의 페이지네이션 없이 사용자가 편리하게 게시글 리스트를 파악할 수 있도록 하였습니다. 또한 해당 스터디나 프로젝트의 기술 혹은 지역 정보로 게시글을 필터링할 수 있고 게시글 검색 기능도 추가하였습니다.

#### 3.2.2 Update & Delete

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/52441478/109411665-10ba8e80-79e7-11eb-91ff-0206492dbd6a.gif)

<br>

### 3.3 Post Scrap & Like, Comment Like

영상

<br>

### 3.4 Realtime Chat & Chat notification

영상

### 3.5 Responsive Design

영상

<br>

## 4. Frontend

### 4.1 Main Techstack

- React.js, next.js, redux, redux-saga, styled-components, antd, axios, firebase

<br>

### 4.2 Directory Structure

<img width="171" alt="스크린샷 2021-02-28 오후 2 38 36" src="https://user-images.githubusercontent.com/52441478/109409081-c8917100-79d2-11eb-80db-d5300b30215d.png">

React hook의 자유도 높은 활용성 덕분에 컴포넌트를 Container, Presentational로 나누는 구조를 채택하지 않고 내부 컴포넌트에서 로직처리와 렌더링을 모두 처리하는 방법을 채택하였습니다.

<br>

### 4.3 SSR (Server Side Rendering)

프로젝트 특성상 구인 및 모집 포스트, 커뮤니티 게시글이 검색엔진에 최적화되어야 더 많은 사용자의 유입 및 원활한 사이트 운영이 가능하다는 판단을 하였고, 페이지 초기 로드 속도를 높여 사용자 경험을 증진 시키기 위해 SSR을 적용하였습니다. 또한 코드스플리팅 및 유용한 SSR 기능을 보유하고있는 next.js 프레임워크를 사용하여 개발의 생산성을 도모하였습니다.

<br>

### 4.4 Redux, Redux-saga Architecture

Redux 패턴은 크게 action type, action creator, reducer 3가지의 분류로 나누어 설계하였고, Redux 데이터 비동기 처리는 redux-saga 를 이용하여 직관적으로 데이터 요청 과정을 파악할 수 있도록 Request-> Success/Failure의 패턴으로 설계 하였습니다. 또한 redux-actions 라이브러리를 사용하여 action 생성과 reducer handle을 보다 쉽게 다루도록 노력했습니다.

- 예시
  ![image](https://user-images.githubusercontent.com/52441478/109409824-2fb22400-79d9-11eb-8e39-659a2b8a7408.png)

<br>

## 5. Backend

<br>

## 6. How to Run

### 6.1 Frontend

```
# go to directory
$ cd /ProjectFrontend

# install dependencies
$ npm install
$ yarn install

# running localhost 3000 port
$ npm run dev

# build for production and launch server
$ npm run build && npm start
```

<br>

### 6.2 Backend

```


```

<br>

## 7. Cooperation & Testing Tool

- github, slack, Postman

<br>

## 8. Contributor

Frontend : 박진호

github : https://github.com/zinozino1

Backend : 조원제

github : https://github.com/onejaejae
