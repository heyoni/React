import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config'
import MainImage from '../LandingPage/Sections/Mainimage'
import MovieInfo from './Sections/MovieInfo'
import GridCards from '../commons/GridCards'
import { Row } from 'antd'



// const textZip = (props) => { //영화설명이 너무 길어서 임의로 줄이는코드!
//     const a = props.split('.')
//     return a[0]+'.'
// }


function MovieDetail(props) {
    //movieId가져오는 방법
    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState()

    //
    const [ActorToggle, setActorToggle] = useState(false)



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


        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                console.log('response crew : ', response)
                setCasts(response.cast)
            })
    }, [])

    const toggleAcotorView = () =>{
        setActorToggle(!ActorToggle)
    }
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
                    <button onClick={toggleAcotorView}>Toggle Actor View</button>
                </div>


                {ActorToggle &&
                    <Row gutter={[16,16]}>
                    {Casts && Casts.map((cast, index) => (
                        <React.Fragment key={index}>
                            <GridCards 
                                image={cast.profile_path ? 
                                    `${IMAGE_BASE_URL}w200${cast.profile_path}` : null}
                                // movieId={cast.id} //고유의 영화 정보로 들어가기 위해서 id값을 가져옴
                                characterName={cast.name}
                            
                            />
                        </React.Fragment>
                    ))} 
                    {/* 하나하나 나눠서 보여주기 */}
                    </Row>
                }


            </div>
        </div>
    )
}

export default MovieDetail
