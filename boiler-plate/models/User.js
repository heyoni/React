const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')


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
    } else { //이 코드는 비밀번호 외 다른걸 변경할 경우 빠져나가도록 해주는 코드
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb){
    //plainPassword 1234567를 암호화해서 <---체크---> 암호화된 비밀번호
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if (err) return cb(err) //비밀번호가 다를 경우 - cb: call back, 에러를 콜백해줌
            cb(null, isMatch)//비밀번호가 같을 경우 - cb으로 에러는 null값, isMatch 즉, true값을 콜백해줌
    })
}

userSchema.methods.generateToken = function(cb){
    var user = this
    //jsonwebtoken을 이용하여 토큰 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    // user._id + 'secretToken' = token
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.static.findByToken = function(token, cb){
    var user = this;
    //복호화하기(토큰을 decode 한다)
    //토큰을 만들때 userid+'문자들' -> 이걸 secret token으로 만들어줬었음. 이걸 두번째 파라미터로 넣어줌
    jwt.verify(token, 'secretToken', function(err, decoded){
        //userid를 이용해서 유저를 찾은 다음 클라이언트에서 가져온 토큰과 db에 보관된 토큰이 일치하는지 확인하기
        user.findOne({"_id":decoded, "token": token}, function(err, user){
            if(err) return cb(err);
            cb(null, user); 
        })
    })
}


//스키마를 모델로 감싸줘야 함
//모델 이름, 지정한 스키마 순으로 파라미터를 넣어준다.
const User = mongoose.model('User', userSchema)

//다른곳에 쓸 수 있도록하는 코드
module.exports = { User }