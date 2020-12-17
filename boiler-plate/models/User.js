const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email:{
        type: String,
        trim: true, //스페이스를 없애줌
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        // 사용자/관리자 권한 부여하기 0일떈 사용자
        type: Number,
        default: 0
    },
    image:String,
    token:{
        //유효성 관리
        type: String
    },
    tokenExp:{
        //토큰 유효기간
        type: Number
    }
})


//스키마를 모델로 감싸줘야 함
//모델 이름, 지정한 스키마 순으로 파라미터를 넣어준다.
const User = mongoose.model('User', userSchema)

//다른곳에 쓸 수 있도록하는 코드
module.exports = { User }