import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config'
import MainImage from './Sections/Mainimage'
import GridCards from '../commons/GridCards'
import { Row } from 'antd'

const textZip = (props) => { //영화설명이 너무 길어서 임의로 줄이는코드!
    const a = props.split('.')
    return a[0]+'.'
}


function LandingPage() {
    const [Movies, setMovies] = useState([])//가져온 정보(이미지, 영화이름 등)를 넣어줌
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState(0)


    const fetchMovies = (endpoint) =>{
        // useEffect, loadMoreItems에 중복된 내용을 넣어줌
        fetch(endpoint)
            .then(response => response.json())//json 형태로 변환하고
            .then(response => {
                console.log(response)
                setMovies([...Movies, ...response.results]) //원래 있던 무비에 새로 가져온 것들을 추가해줌(loadMoreItems)
                setMainMovieImage(response.results[0])//가장 인기있는 영화를 가져옴, 이걸 MainMovie컴포넌트에 넘겨줄 것
                setCurrentPage(response.page)
            })//그 값을 가져옴
    } 

    useEffect(()=>{
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchMovies(endpoint)
    }, [])

    const loadMoreItems = () =>{
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`
        fetchMovies(endpoint)
    }
    return (
        <div style={{ width: '100%', margin: '0'}}>
                {/* const a = {MainMovieImage.overview}
                a = a.split('.')
                console.log(a) */}
                
            {MainMovieImage && //MainMovieImage가 있으면 아래 문장실행

                <MainImage 
                  image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                  title={MainMovieImage.original_title}
                  text={textZip(MainMovieImage.overview)}
                />
            }
            {/* 이미지와 url을 모두 가져옴 */}
            <div style={{ width: '85%', margin: '1rem auto'}}>
                
                <h2>Movie by lastest</h2>
                <hr />



                <Row gutter={[16,16]}>
                {Movies && Movies.map((movie, index) => (
                    <React.Fragment key={index}>
                        <GridCards 
                            landingPage
                            image={movie.poster_path ? 
                                `${IMAGE_BASE_URL}w200${movie.poster_path}` : null}
                            movieId={movie.id} //고유의 영화 정보로 들어가기 위해서 id값을 가져옴
                            movieName={movie.original_title}
                        
                        />
                    </React.Fragment>
                ))} 
                {/* 하나하나 나눠서 보여주기 */}
                </Row>
            </div>

            <div style={{ display:'flex', justifyContent:'center'}}>
                <button onClick={loadMoreItems}>Load more</button>
            </div>
        </div>
    )
}

export default LandingPage
