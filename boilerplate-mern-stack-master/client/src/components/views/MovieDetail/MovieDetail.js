import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../LandingPage/Sections/Mainimage'
import MovieInfo from './Sections/MovieInfo'

// const textZip = (props) => { //영화설명이 너무 길어서 임의로 줄이는코드!
//     const a = props.split('.')
//     return a[0]+'.'
// }


function MovieDetail(props) {
    //movieId가져오는 방법
    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])


    useEffect(() => {
        //DOM이 랜딩될 때 해야할 일

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovie(response)
            })
    }, [])

    
    return (
        <div>
            {/* header */}

            <MainImage 
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
            />

            {/* body */}
            <div style={{width: ' 85%', margin: '1rem auto'}}>
                {/* movie info */}
                <MovieInfo 
                    movie={Movie}
                />

                <br/>
                {/* actors grid */}

                <div style={{display:'flex', justifyContent:'center', margin:'2rem'}}>
                    <button>Toggle Actor View</button>
                </div>

            </div>
        </div>
    )
}

export default MovieDetail
