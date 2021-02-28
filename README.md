# CodePlat(2021.01 - 2021.2)

![plat-logo](https://user-images.githubusercontent.com/52441478/109408651-b9a8bf80-79ce-11eb-97d5-2eb50bf0712c.png)

<br>

## 1. Project Summary

```
CodePlat은 겨울방학 약 50여일 간 개발한 사이드 프로젝트로, 학생, 직장인, 프리랜서, 디자이너 등에게 프로젝트 혹은 스터디 구인, 참여 및 커뮤니티 기능을 제공하는 서비스 플랫폼입니다. 사용자는 스터디 및 프로젝트 모집, 구인 뿐 아니라 커뮤니티 및 채팅 기능을 활용하여 다른 사용자와의 원활한 교류를 할 수 있습니다.
```

<br>

## 2. Project target

```js
현직 개발자 뿐 아니라 디자이너, 학생도 공개적으로 개발관련 스터디나 프로젝트에 참여하거나 모집할 수 있도록 프로젝트 사용자 타겟을 설정하였습니다.
```

## 3. Main features

<br>

### 3.1 Authentication

#### 3.1.1 Login/Logout

#### 3.1.2 Register

#### 3.1.3 Password update/search

<br>

### 3.2 CRUD

#### 3.2.1 Post CRUD

#### 3.2.2 Comment CRUD

<br>

### 3.3 Post Scrap & Like, Comment Like

<br>

### 3.4 Realtime Chat & Chat notification

### 3.5 Responsive Design

<br>

## 4. Frontend

<br>

### 4.1 Main Techstack

```
* React.js, next.js, redux, redux-saga, styled-components, antd, axios, firebase
```

### 4.2 Directory Structure

<img width="171" alt="스크린샷 2021-02-28 오후 2 38 36" src="https://user-images.githubusercontent.com/52441478/109409081-c8917100-79d2-11eb-80db-d5300b30215d.png">

```
React hook의 자유도 높은 활용성 덕분에 컴포넌트를 Container, Presentational로 나누는 구조를 채택하지 않고 내부 컴포넌트에서 로직처리와 렌더링을 모두 처리하는 방법을 채택하였습니다.
```

### 4.3 SSR (Server Side Rendering)

```
프로젝트 특성상 구인 및 모집 포스트, 커뮤니티 게시글이 검색엔진에 최적화되어야 더 많은 사용자의 유입 및 원활한 사이트 운영이 가능하다는 판단을 하였고, 페이지 초기 로드 속도를 높여 사용자 경험을 증진 시키기 위해 SSR을 적용하였습니다. 또한 코드스플리팅 및 유용한 SSR 기능을 보유하고있는 next.js 프레임워크를 사용하여 개발의 생산성을 도모하였습니다.
```

### 4.4 Redux, Redux-saga Architecture

```

```
