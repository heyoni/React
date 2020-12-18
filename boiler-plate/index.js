// 백엔드 서버를 시작하면 이 파일에서 시작됨 - 시작점

//익스프레스 모듈을 가져옴 
const express = require('express')
//express function을 이용하여 새로운 express 앱을 만듦
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const { User } = require("./models/User")
const cookieParser = require('cookie-parser')

//로컬인지 배포중인지 확인하여 키를 가지고 옴
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended:true}))


//bodyParser 옵션주기
//application/x-www-form-urlendcoded 이렇게 된 데이터를 분석해서 가져올 수 있도록 하는것
app.use(bodyParser.urlencoded({extended: true}))
//마찬가지로 json 데이터를 분석해서 가져올 수 있도록 함
app.use(bodyParser.json())

//쿠키파서 사용 전 설정하기
app.use(cookieParser());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕!fdsfsdfsf')
})

app.post('/register', (req, res) => {
    //회원가입시 필요한 정보들을 client에서 받아오면 그것을 db에 넣어줌


    //1. user model에서 가져와야함 -> 위에 const { User }... 부분이 그 부분!
    const user = new User(req.body)
    // //이게 req.body에 들어있는 내용임. 이걸 req.body에 들어올 수 있게 하는게 바로 bodyParser
    // {
    //     id: 'hello',
    //     password: '123'
    // }

    //mongodb에서 오는 메소드 save시 usermodel에 저장이 되는 것임
    // 에러가 있을 수 있으니 에러를 처리하는 코드를 넣어줘야함
    user.save((err, userInfo) => {
        if (err) return res.json({ success : false, err })
        return res.status(200).json({
            success: true
        })
    })
    //이 전에 비밀번호 암호화를 해야함 -> mongusdb사용
})

app.post('/login', (req, res)=> {
  //1. 요청된 eamil이 DB에 있는지 찾기
  User.findOne({email: req.body.email},(err, user) =>{
    if (!user){//없을경우
      return res.json({
        loginSuccess: false,
        message:"아이디 다시 확인해주세요"
      })
    }
  //2. 이메일이 DB에 있다면 비밀번호가 같은지 확인하기
    user.comparePassword(req.body.password, (err, isMatch) =>{//comparePassword라는 메서드를 만들어서 비밀번호가 맞는지 확인하기
      if(!isMatch)
        return res.json({ loginSuccess:false, message:"비밀번호를 다시 확인해주세요" })
      
      //3. 아이디, 비밀번호가 모두 맞다면 token 생성하기
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err) // status400을 통해 에러를 잡아내고 에러 메세지를 보냄

        //4. 토큰을 쿠키에 저장한다.(쿠키, 로컬스토리지, 세션 등 여러 곳에서 저장할 수 있음) -> cookieparser가 맆요
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess:true, userId: user._id })
      })
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening  at http://localhost:${port}`)
})


//이 코드는 package.json에서 scripts "start"로 실행되는데
//실행 방법은 터미널에 npm run start를 입력하면 start에 입력되어 있는 node index.js가 변환되어 실행된다

