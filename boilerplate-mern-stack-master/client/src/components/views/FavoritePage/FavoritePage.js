import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import './favorite.css'
import { Popover } from 'antd'
import { IMAGE_BASE_URL } from '../../Config'



function FavoritePage() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {
        Axios.post('/api/favorite/getFavoriteMovie', { userFrom: localStorage.getItem('userId') })
            .then(response => {
                if(response.data.success){
                    console.log(response.data)
                    setFavorites(response.data.favorites)
                } else {
                    alert('영화정보를 가져오는데 실패했습니다.')
                }
            })
    }, [])


    const renderCards = Favorites.map((favorite, index)=> {

        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "NO IMAGE"
                }
            </div>
        )
        return <tr key={index}>
            <Popover content={content} title={`${favorite.movieTitle}`}>
                <td>{favorite.movieTitle}</td>
            </Popover>
            <td>{favorite.movieRuntTime} mins</td>
            <td><button>remove</button></td>

        </tr>
    })

    return (
        <div style={{width:'85%', margin:'3rem auto'}}>
            <h2>Favorite Movies</h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie Runtime</th>
                        <td>Remove From favorites</td>
                    </tr>
                </thead>
                <tbody>
                    {renderCards}

                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage
