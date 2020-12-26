import Axios from 'axios'
import { response } from 'express'
import React from 'react'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime
    
    useEffect(() => {
        let variables = { //서버에서 가져올 때 어떤 영화, 어떤사람이 좋아요를 눌렀는지와 같은 구체적인 정보, axios에 넣어서 가져옴
            userFrom,
            movieId
        }
        Axios.post('/api/favorite/favoriteNumber', variables) //(endpoint, variables) endpoint는 임의로 정할 수 있음
        //서버부분에서 받아서 처리해줘야 하기 때문에 서버부분을 만져줘야함
            .then(response => {
                if(response.data.success){
                    


                } else {
                    alert('정보를 가져오는데 실패했습니다.')
                }
            })
    }, [])


    return (
    <div style={{ display:'flex', justifyContent: 'flex-end'}}>
        <button>Favorite</button>

    </div>

    )
}

export default Favorite
