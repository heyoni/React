# react native + react
리엑트 네이티브 + react 공부

## 리엑트 네이티브란?
- (20. 11 ~ 12) - 리엑트 네이티브 어플 만들기 완강
- 모바일용 native앱을 만들기 위한 자바스크립트 라이브러리
- java, swift등을 사용하지 않고 어플을 만들 수 있는 '라이브러리'

## 리엑트란?
- (20. 12 ~ ing) - 리엑트 기본기가 필요할 것 같아 책으로 공부 중
- 프론트엔드 UI를 만들기 위한 자바스크립트 라이브러리
- js기반이며 사용자 인터페이스를 만들기 위한 '라이브러리'
- node.js : 크롬 v8 자바스크립트 엔진으로 빌드된 js 런타임(프로그래밍 언어가 구동되는 환경 -> 웹 환경, 그러니까 브라우저가 아니더라도 js를 사용할 수 있음. react와는 직접적인 연관이 없으나 프로젝트를 개발하는데 필요한 도구들이 node.js를 사용하기 때문에 같이 설치함)
- npm : node.js 패키지 매니저 -> 개발자가 만든 모듈(리엑트 같은 것)을 설치하고 버전관리 하는 툴
- yarn : npm과 마찬가지로 패키지 관리 및 설치하는 툴. npm보다 가볍고 버전 의존성이 낮다
- create-react-app : 프로젝트 핵심 기능들의 설정을 미리 완료하고 react 프로젝트를 만들 수 있는 명령어
- fs : node.js 내장 모듈 중 파일을 읽고 쓸 때 사용
- webpack :  번들링 도구, 파일을 묶듯이 연결하는 것
- JSX : 자바스크립트 확장 문법, render() { ... } 이 부분을 뜻함, 리엑트 용으로 공식 js 문법은 아님, 보기 쉽고 익숙하다(js를 써 봤다면), 오류검사를 '바벨'스크립트가 해줌, span/div 등 익숙한 문법을 사용함,
- (꼭 지켜야 할 약속)
  * 컴포넌트에 여러가지 요소가 있다면 부모 요소로 감싸야 함 : virtual DOM에서 변화 감지시 효율적으로 비교하게 하기 위해서 컴포넌트 내부는 DOM 트리 구조를 따라야함
  * js 표현식 사용
  * if문 대신 조건부 연산자 사용 {condition ? 참 : 거짓}
  * && 을 사용한 조건부 렌더링 {condition && 참} -> 참일때만 렌더링됨
  * 인라인 스타일링 : css를 js객체 형식으로 만들어서 사용가능함. key는 CamelStyle
  * class 대신 className을 사용함
  
- ref : ID처럼 특정 DOM에 이름을 다는 것, DOM을 직접적으로 건드려야 할  사용함
- 리엑트 컴포넌트 : 수명주기가 있음 마운트 👉 (업데이트) 👉 언마운트 순

=============
### 리엑트 프로젝트(실전!)
일정관리 애플리케이션 개발하기.  
순서 : 프로젝트 생성 및 설정하기 👉 컴포넌트 UI 디자인 및 구성하기 👉 상태관리하기  
  
(기본 틀 만들기)
1. create-react-app '폴더명' : 새 프로젝트를 만들고 그 파일로 이동해준다.
2. yarn ejcet / yarn add sass-loader node-sass classnames : 환경설정 및 sass, classnames를 설치해준다
3. yarn add open-color : open-color 라이브러리의 색상들을 참조할 수 있게 함 👉  src/styles라는 폴더를 만들어 utils.scss에서 node_modules에 있는 open-color라이브러리를 불러온다.
4. 메인 스타일 지정(styles/main.scss)
5. 지정한 스타일을 페이지에서 불러와야 하므로 index.js에서 import 해줌
6. webpack 개발 서버 시작을 위해 component/App.js에서 기본 코드를 입력해준다.
7. 페이지에서 불러오기 위해 src/index.js에서 import 해줌    
#### 정리 - 기본 설정 후 메인 스타일 파일과 webpack 파일을 만드는데 이 파일들은 모두 src/index.js에서 적용해줘야한다.
-------------
(PageTemplate 만들기)  
순서 : 디렉토리 만들기 👉 자바스크립트 파일 만들기 👉 sass 파일 만들기 👉 index.js 파일 만들기
1. src/components/PageTemplate 디렉토리 만들기
2. src/components에 PageTemplate.js 를 만들어서 컴포넌트의 JSX를 작성함.
3. 위 페이지의 스타일리은 PageTemplate 디렉토리 안에 scss파일로 저장함
4. 컴포넌트 인덱스 파일을 ./PageTemplate/index.js 파일안에 만들어준다 : 경로 입력시 './PageTemplate'로 입력하기 위해서
5. 그럼 이 페이지를 불러오기 위해서 App.js 파일에서 렌더링 해줘야 함.  
#### 정리 - PageTemplate.js라는 파일을 만들어서 인터페이스의 전체적인 틀인 유저관리 틀을 만들어준다. 이 컴포넌트의 스타일을 적용하기 위해서 PageTemplate이라는 디렉토리를 만들어서 적용해주는데, PageTemplate.scss에 스타일 값을 넣어준다. 같은 디렉토리에 index.js 파일은 경로를 입력할 떄 줄이기 위해 만든 파일이며 이 모든 파일들을 적용하기 위해서 src/component/App.js에 렌더링시킨다.
-------------
