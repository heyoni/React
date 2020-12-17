// 백엔드 서버를 시작하면 이 파일에서 시작됨 - 시작점

//익스프레스 모듈을 가져옴 
const express = require('express')
//express function을 이용하여 새로운 express 앱을 만듦
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!zzzz')
})

app.listen(port, () => {
  console.log(`Example app listening wdfw  at http://localhost:${port}`)
})


//이 코드는 package.json에서 scripts "start"로 실행되는데
//실행 방법은 터미널에 npm run start를 입력하면 start에 입력되어 있는 node index.js가 변환되어 실행된다
