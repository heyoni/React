## 리액트 프로젝트(실전!)
✔️ 일정관리 애플리케이션 개발하기.  
✔️ 순서 : 프로젝트 생성 및 설정하기 👉 컴포넌트 UI 디자인 및 구성하기 👉 상태관리하기  
  
### (기본 틀 만들기)
1. create-react-app '폴더명' : 새 프로젝트를 만들고 그 파일로 이동해준다.
2. yarn ejcet / yarn add sass-loader node-sass classnames : 환경설정 및 sass, classnames를 설치해준다
3. yarn add open-color : open-color 라이브러리의 색상들을 참조할 수 있게 함 👉  src/styles라는 폴더를 만들어 utils.scss에서 node_modules에 있는 open-color라이브러리를 불러온다.
4. 메인 스타일 지정(styles/main.scss)
5. 지정한 스타일을 페이지에서 불러와야 하므로 index.js에서 import 해줌
6. webpack 개발 서버 시작을 위해 component/App.js에서 기본 코드를 입력해준다.
7. 페이지에서 불러오기 위해 src/index.js에서 import 해줌    
#### 정리 - 기본 설정 후 메인 스타일 파일과 webpack 파일을 만드는데 이 파일들은 모두 src/index.js에서 적용해줘야한다.
-------------
### (PageTemplate 만들기)  
순서 : 디렉토리 만들기 👉 자바스크립트 파일 만들기 👉 sass 파일 만들기 👉 index.js 파일 만들기
1. src/components/PageTemplate 디렉토리 만들기
2. src/components에 PageTemplate.js 를 만들어서 컴포넌트의 JSX를 작성함.
3. 위 페이지의 스타일리은 PageTemplate 디렉토리 안에 scss파일로 저장함
4. 컴포넌트 인덱스 파일을 ./PageTemplate/index.js 파일안에 만들어준다 : 경로 입력시 './PageTemplate'로 입력하기 위해서
5. 그럼 이 페이지를 불러오기 위해서 App.js 파일에서 렌더링 해줘야 함.  
#### 정리 - PageTemplate.js라는 파일을 만들어서 인터페이스의 전체적인 틀인 유저관리 틀을 만들어준다. 이 컴포넌트의 스타일을 적용하기 위해서 PageTemplate이라는 디렉토리를 만들어서 적용해주는데, PageTemplate.scss에 스타일 값을 넣어준다. 같은 디렉토리에 index.js 파일은 경로를 줄이기 위해 만든 파일이며 이 모든 파일들을 적용하기 위해서 src/component/App.js에 렌더링시킨다.
-------------
### (TodoInput 만들기)  
일정을 입력할 수 있는 컴포넌트 만들기
1. src/component/TodoInput 디렉토리 만들기
2. 같은 경로에 TodoInput.js 파일을 만들어서 Todo input 창을 만들어줌
3. 스타일을 적용하기 위해 TodoInput.scss를 만들어주고 스타일을 넣어준다.
4. 컴포넌트 인덱스 파일을 같은 경로에 index.js파일로 만들어주면 된다.
#### 정리 - 마찬가지로 input창을 만들기 위해 TodoInput이라는 디렉토리를 만들고 '그 안에' TodoInput.js(입력 컴포넌트), TodoInput.scss(스타일), index.js(컴포넌트 인덱스 파일- 경로단축)를 만들어서 input창을 만들어준다
-------------
### (TodoItem 만들기)  
일정 정보를 나타내주는 컴포넌트 만들기
1. shouldComponentUpdate 라이프사이클 메서드를 이용해야 하기 때문에 class로 만듦
2. TodoInput과 동일하게 디렉토리, js, scss, index.js 파일을 만들어주고 설정해준다.
-------------
### (TodoList 만들기)  
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
-------------
### 컴포넌트 리렌더링 최적화
- shouldComponentUpdate를 이용하여 리렌더링 성능을 향상할 수 있음
- 어떤 경우에 구현?
  * 컴포넌트 배열이 렌더링이되는 리스트 컴포넌트일 때
  * 리스트 컴포넌트 내부에 있는 아이템 컴포넌트일 때
  * 하위 컴포넌트 갯수가 많으며 리렌더링 되지 말아야 할 상황에서도 리렌더링이 진행될 때 (현재 프로젝트에서 구현한 이유)
