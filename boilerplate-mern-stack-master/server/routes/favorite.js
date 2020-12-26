const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite')

router.post('/favoriteNumber', (req, res) => {
    

    //1. mongodb에서 favorite 숫자 가져오기
    Favorite.find({"movieId": req.body.movieId})
    .exec(( err, info ) => {
        if(err) return res.status(400).send(err)
        //프론트에 다시 숫자 정보를 보내주기
        res.status(200)/json({ success: true, favoriteNumber: info.length })
            //잘 가져왔으면 favorite버튼을 누른 사람들의 수를 가져옴
            //여기서 누른 사람들의 수는 [3232, 3809, 9109]<- 이런 userid값이 저장되어 있으니 length만 가져오면 됨
        })

})

module.exports = router;
