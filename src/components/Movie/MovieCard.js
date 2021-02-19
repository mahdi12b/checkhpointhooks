import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AddMovie from '../Addmovie/AddMovie';
import { Link } from 'react-router-dom';



const MovieCard = ({movie,addMovie,movieCard}) => {
    return (


   
        <div >
      { movieCard ?
      <Link to={{pathname:'/movieDescription', state:{movie:movie}}}>
            <div className='card'>
                    <img className='img' src={movie.image} alt={movie.id}/>
                    <br/>
                    <span className='movieProfile'>{movie.name}</span>
                    
                    <span className='movieProfile'>{movie.date}</span>
                    
                    <span className='movieProfile'>{movie.type}</span>
                
                    <span className='movieProfile'>{
                     <Box component="fieldset" mb={3} borderColor="transparent">
                   <Rating name="read-only" value={movie.rating} readOnly />
                  </Box>
                  }
                  </span>
                  </div>
      </Link>
                  
                 
                 :
                 <div className='cardAdd'>
                     <AddMovie addMovie={addMovie}/>
                      </div>
                  
}
        </div>
        
                
    )
}

export default MovieCard
MovieCard.deaultProps = {
    name: 'Movie'
}

  