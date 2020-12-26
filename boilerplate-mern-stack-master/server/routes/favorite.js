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


router.post('/favorited', (req, res) => {
    //내가 이 영화를 좋아요 리스트에 넣었는지에 대한 정보를 DB에서 가져오기
    Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom})
        .exec(( err, info ) => {
            if(err) return res.status(400).send(err)
            let result = false
            if(info.length !==0){
                result= true
            }
            res.status(200)/json({ success: true, favoriteNumber: result})
            })
})



router.post('/removeFromFavorite', (req, res) => {
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec(( err, doc )=>{
            if(err) return res.status(400).send(err)
            return res.status(200).json({ success: true, doc})

        })
})



router.post('/addToFavorite', (req, res) => {
    const favorite = new Favorite(req.body)

    favorite.save((err, doc) =>{//req.body에 있는 모든 정보들을 favorite document에 들어가게 됨
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
})

router.post('/getFavoritedMovie', (req, res) => {
    Favorite.find({ 'userFrom': req.body.userFrom })
        .exex((err, favorites) =>{
            if(err) return res.status(400).send(err)
            return res.status(200).json({ success: true, favorites })
        })
})



module.exports = router;
