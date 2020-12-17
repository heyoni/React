# boiler-plate
- 최소한의 변경으로 재사용 할 수 있는 코드를 뜻함
- 이 프로젝트에서는 회원가입, 로그인 코드를 만들 예정
- 강의 : https://www.youtube.com/channel/UCFyXA9x8lpL3EYWeYhj4C4Q
## 1) 기본 골격잡기
- node.js : JS는 원래 브라우저 속에서만 사용할 수 있었음. Node.js가 나오게 됨으로써 브라우저 밖, 그러니까 서버 단(php, go , ... 등)에서도 사용할 수 있게함
- Express.js : Node.js를 더 쉽게 사용할수 있게 하는 프레임워크
- 설치하기 : npm(node.js기본 패키지 관리자), express.js
- mongodb 연결하기 : 블로그 참고(https://hoodu.tistory.com/39)
- BodyParser : 클라이언트가 정보를 서버단으로 보내줄 때 이것을 이용하여 정보를 받아올 수 있다.
- Postman : client에서 Request(요청)을 줘야하는데 아직 배포된 상태가 아니므로 받을 수 있는 방법이 없기 때문에 이것을 이용하여 request를 받아옴.
- nodemon : node.js만 이용하면 서버를 내렸다 재실행해야 변동 사항을 제대로 확인할 수 있음. 이런 번거로움을 없애주기 위해 사용
- 민감정보 처리하기 : mongodb를 연결하다보면 비밀번호를 입력해야 하는데, git을 사용하게 되면 전세계 사람들이 내 비밀번호를 알게 되므로 .gitignore를 사용한다. + dev.js/key.js/prod.js를 이용하여 배포가 되기 전과 되기 후를 모두 제어할 수 있음.
- bcrypt로 고객의 비밀번호를 암호화 할 수 있다.