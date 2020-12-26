const mongoose = require('mongoose');
const Schema = mongoose.Schema

const favoritSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref:'User' //코드로 된 유저의 정보를 가져올 수 있음
    },
    movieId: {
        type:String
    },
    movieTitle: {
        type:String
    },
    moviePost: {
        type:String
    },
    movieRunTime: {
        type:String
    },
}, { timestamp: true}) //자동으로 시간찍히게 해줌



const Favorite = mongoose.model('Favorite', favoritSchema);

module.exports = { Favorite }