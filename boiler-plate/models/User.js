const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10

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

//유저 모델에 유저 정보를 저장하기 전에! 이 코드를 실행함
userSchema.pre('save', function( next ){ //next 파라미터를 통해 원래 실행하던 곳으로 보내줌
    //비밀번호를 암호화 시키기
    
    var user = this //위 스키마들을 가리키고 있는 것

    //이름 변경시에도 암호화를 해버리므로 비밀번호를 바꿀 때만 암호화 할 수 있도록 조건을 걸어줌
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt){//bcrypt에서 salt를 가져와서 실행함
            if(err) return next(err)//에러가 나면 원래실행하던 곳으로 에러를 반환하여 돌아감
    
            //암호화 되기 전 비밀번호와, salt, function을 이용한 에러처리를 해준다.
            bcrypt.hash(user.password, salt, function(err, hash){//hash가 암호화 된 비밀번호
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    }
})

//스키마를 모델로 감싸줘야 함
//모델 이름, 지정한 스키마 순으로 파라미터를 넣어준다.
const User = mongoose.model('User', userSchema)

//다른곳에 쓸 수 있도록하는 코드
module.exports = { User }