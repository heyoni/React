import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Button } from 'antd';

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime
    
    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)


    let variables = { //서버에서 가져올 때 어떤 영화, 어떤사람이 좋아요를 눌렀는지와 같은 구체적인 정보, axios에 넣어서 가져옴
        userFrom: userFrom,
        movieId: movieId,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime,
    }


    useEffect(() => {

        Axios.post('/api/favorite/favoriteNumber', variables) //(endpoint, variables) endpoint는 임의로 정할 수 있음
        //서버부분에서 받아서 처리해줘야 하기 때문에 서버부분을 만져줘야함
            .then(response => {
                // console.log(response.data)
                if(response.data.success){
                    setFavoriteNumber(response.data.favoriteNumber)
                } else {
                    alert('정보를 가져오는데 실패했습니다.1')
                }
            })
        Axios.post('/api/favorite/favorited', variables) //좋아요 버튼이 눌려있는지 확인해주는 부분
            .then(response => {
                // console.log('favorited : ',response.data)
                if(response.data.success){
                    setFavorited(response.data.favorited)
                } else {
                    alert('정보를 가져오는데 실패했습니다.2')
                }
            })
    }, [])

    const onClickFavorite = () =>{
        if(Favorited){
            Axios.post('/api/favorite/removeFromFavorite',variables)
                .then(response =>{
                    if(response.data.success){
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    }else{
                        alert('Favorite 지우기 실패')
                    }
                })

        } else {
            Axios.post('/api/favorite/addToFavorite',variables)
                .then(response =>{
                    console.log('addToFav:',response.data)
                    if(response.data.success){
                        setFavoriteNumber(FavoriteNumber+1)
                        setFavorited(!Favorited)
                    }else{
                        alert('Favorite 추가 실패')
                    }
                })
        }
    }



    return (
    <div style={{ display:'flex', justifyContent: 'flex-end'}}>
        <Button onClick={onClickFavorite}>{Favorited? "좋아요 취소": "좋아요"} {FavoriteNumber}</Button>

    </div>

    )
}


export default Favorite
