import React from 'react'
import './MovieDescription.css'

const MovieDescription = (props) => {
    console.log(props.location.state)
    return (
        <div className='movieDescription'>
            
            <img className='imgdescription'src={props.location.state.movie.image} alt={props.location.state.movie.id}/>
            <div className='trailerDescr'>
            <iframe width='100%' src={props.location.state.movie.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <span className='container description'>{props.location.state.movie.description}</span>
            </div>
            
        </div>
    )
}

export default MovieDescription
