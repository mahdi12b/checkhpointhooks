import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';



const MovieCard = ({movie,addMovie}) => {
    return (
        <div className='card'>
            
              
                    <img className='img' src={movie.image} alt={movie.id}/>
                    <br/>
                    <span className='movieProfile'>{movie.name}</span>
                    
                    <span className='movieProfile'>{movie.date}</span>
                    
                    <span className='movieProfile'>{movie.type}</span>
                
                    <span className='movieProfile description'>{movie.description}</span>
                    <span className='movieProfile'>{
                     <Box component="fieldset" mb={3} borderColor="transparent">
                   <Rating name="read-only" value={movie.rating} readOnly />
                  </Box>
                  }
                  </span>
                    
        </div>
    )
}

export default MovieCard
MovieCard.deaultProps = {
    name: 'Movie'
}

  