import React from 'react'
import { Col } from 'antd'


function GridCards(props) {

    if(props.landingPage) { //랜딩페이지가 있으면 이부분을 처리해줌
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style={{width:'100%',height:'555px'}} src={props.image} alt={props.movieName}/>
                    </a>
                </div>
            </Col>
        )
    } else{
        return(
            <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>
                        <img style={{width:'100%',height:'555px'}} src={props.image} alt={props.characterName}/>
                </div>
            </Col>
        )
    }
}

export default GridCards
