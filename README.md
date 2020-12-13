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
✔️ 일정관리 애플리케이션 개발하기.  
✔️ 순서 : 프로젝트 생성 및 설정하기 👉 컴포넌트 UI 디자인 및 구성하기 👉 상태관리하기  
  
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
#### 정리 - PageTemplate.js라는 파일을 만들어서 인터페이스의 전체적인 틀인 유저관리 틀을 만들어준다. 이 컴포넌트의 스타일을 적용하기 위해서 PageTemplate이라는 디렉토리를 만들어서 적용해주는데, PageTemplate.scss에 스타일 값을 넣어준다. 같은 디렉토리에 index.js 파일은 경로를 줄이기 위해 만든 파일이며 이 모든 파일들을 적용하기 위해서 src/component/App.js에 렌더링시킨다.
-------------
(TodoInput 만들기)  
일정을 입력할 수 있는 컴포넌트 만들기
1. src/component/TodoInput 디렉토리 만들기
2. 같은 경로에 TodoInput.js 파일을 만들어서 Todo input 창을 만들어줌
3. 스타일을 적용하기 위해 TodoInput.scss를 만들어주고 스타일을 넣어준다.
4. 컴포넌트 인덱스 파일을 같은 경로에 index.js파일로 만들어주면 된다.
#### 정리 - 마찬가지로 input창을 만들기 위해 TodoInput이라는 디렉토리를 만들고 '그 안에' TodoInput.js(입력 컴포넌트), TodoInput.scss(스타일), index.js(컴포넌트 인덱스 파일- 경로단축)를 만들어서 input창을 만들어준다
-------------
(TodoItem 만들기)  
일정 정보를 나타내주는 컴포넌트 만들기
1. shouldComponentUpdate 라이프사이클 메서드를 이용해야 하기 때문에 class로 만듦
2. TodoInput과 동일하게 디렉토리, js, scss, index.js 파일을 만들어주고 설정해준다.
-------------
(TodoList 만들기)  
데이터 배열을 컴포넌트 배열로 변환하여 렌더링하는 역할을 함
1. TodoList 디렉토리를 만들고 js 파일을 만들어서 TodoItem 컴포넌트들을 렌더링함(실시간 반영이 아니라 테스트용)
2. 컴포넌트 인덱스 파일을 만들고 App에서 TodoList를 불러와서 렌더링함
-------------
#### 상태 관리  
텍스트 입력, 초기 데이터 정의 및 렌더링, 데이터 추가, 수정, 삭제에 관한 상태 처리
- (텍스트 입력)  
  * state에 input값을 정의하고 이 input의 변경 이벤트를 처리할 handleChange 메서드를 만들어서 TodoInput의 props로 전달해준다.
- (초기 데이터 정의 및 렌더링)  
  * state에 todos라는 객체 배열을 만들어서 객체 안에 id, text, done값들을 넣어준다. id값은 고유값으로 나중에 구성된 배열을 렌더링할 때 key값으로 처리함, text는 말 그대로 일정 정보이며 done은 체크 여부를 의미함  
  * TodoList 컴포넌트에 todos 배열을 map 함수를 사용하여 TodoItem으로 구성된 컴포넌트 배열로 변환해준다.
- (데이터 추가)  
  * input에 적은 일정 정보를 todos 배열에 추가하는 기능
  * setState를 이용하여 todos 안에 넣어준다. id 값은 추가될 떄 마다 증가함, 기존값들과 새로 들어온 값을 합쳐줄 때는 전개연산자(...)을 사용한다.
- (데이터 수정)
  * 데이터 수정은 TodoItem을 클릭했을 때 체크 박스를 활성화/비활성화 하는 과정에서 일어남.
  * 데이터 수정하려면 id로 원하는 데이터를 찾아 slice와 전개 연산자를 사용해서 새 배열을 만드는 방식으로 업데이터 해야함.
  * components/App.js에서 handleToggle 메서드를 정의하여 TodoList의 onToggle props로 전달함
  * App 수정 후에는 TodoList도 수정해야함. (props로 받은 onToggle 메서드를 실행할 때 index를 파라미터로 넣어 줘야하기 때문에)
- (데이터 제거)
  * handleRemove 메서드를 정의하여 id를 찾아 제거하고 TodoList에 onRemove props로 전달해줌
  * 현재 만들어진 코드에서는 자식, 부모 모두 onclick 메서드를 가지고 있음. 자식 👉 부모 순으로 메서드가 실행되며 이를 propagation이라고 함
  * 해결을 위해서는 자식요소에서 e.stopPropagation 함수를 호출해 줘야한다.