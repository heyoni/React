const { User } = require("../models/User")


let auth = (req, res, next) =>{
    //인증처리들을 하는 곳
    //1. 클라이언트 쿠키에서 토큰을 가져옴
    let token = req.cookies.x_auth; //x_auth라는 쿠키에서 토큰을 가져온다

    //2. 토큰을 복호화하고 user를 찾는다
    User.findByToken(token, (err, user) => {
        //유저가 없을경우
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true})

        //유저가 있는 경우
        //여기에서 req에 user와 token을 넣어줌으로써 req.user와 req.token을 하면 정보들을 가져올 수 있음
        req.token = token;
        req.user = user;
        next();
    })

    //3. user가 있으면 인증하고 없으면 인증하지 않음
}

module.exports = { auth };